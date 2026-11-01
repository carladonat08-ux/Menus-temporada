"""Auditoría de la app en navegador (Chromium + Playwright)."""
import json, re, os
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")) + "/"
URL = "file://" + ROOT + "index.html"
fails, ok = [], []

def check(cond, msg):
    (ok if cond else fails).append(msg)

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2)
    pg = ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("console", lambda m: m.type == "error" and "ERR_TUNNEL" not in m.text and "fonts" not in m.text and errs.append(m.text))
    pg.add_init_script("Date.now = (() => { const f = new Date(2026, 10, 1, 12).getTime(); return () => f; })(); const _D = Date; window.Date = class extends _D { constructor(...a) { if (!a.length) return new _D(2026, 10, 1, 12); return new _D(...a); } static now() { return new _D(2026, 10, 1, 12).getTime(); } };")
    pg.goto(URL); pg.wait_for_timeout(600)

    body = pg.inner_text("body")
    # 1. Estado inicial (hoy = domingo 1 nov 2026)
    check("Otoño" in pg.inner_text("#hero"), "Hoy muestra Otoño")
    check("SEMANA 4 DE OCTUBRE" in pg.inner_text("#hero").upper(), "Hoy: semana 4 de octubre")
    check(pg.locator('#weeks button[aria-selected="true"]').inner_text().strip().startswith("Semana 4"), "Pestaña Semana 4 seleccionada")
    check(pg.locator("#weeks .dot").count() == 1, "Un solo punto de 'te toca'")
    check("Domingo" in pg.inner_text(".day-head h2"), "Se abre en el día de hoy (domingo)")
    check(pg.locator("#hoy").is_hidden(), "Botón Hoy oculto cuando la fecha es hoy")
    # 2. Contenido retirado
    for w in ["€", "Reglas", "Cambiar", "Calcio", "Hierro", "Mi registro", "Restaurar", "coste", "precio"]:
        check(w not in body, f"No aparece «{w}»")
    # 3. Domingo: cena = yogur/palomitas sin botón de receta
    meals = pg.locator(".meal")
    check(meals.count() == 5, "5 tomas en el día")
    cena = meals.nth(4)
    check(re.search(r"yogur|palomitas", cena.inner_text(), re.I) is not None, "Domingo: cena ligera (yogur o palomitas)")
    check(pg.locator("button.meal").count() == 2, "Domingo: receta solo en desayuno y comida")
    # 4. Recetas de toda la semana actual
    n_rec = 0
    for i in range(7):
        pg.locator(".day-btn").nth(i).click(); pg.wait_for_timeout(80)
        btns = pg.locator("button.meal")
        for j in range(btns.count()):
            btns.nth(j).click(); pg.wait_for_timeout(120)
            vis = pg.locator("#rec").is_visible()
            steps = pg.locator("#rec .steps li").count()
            ing = pg.locator("#rec .ing-list li").count()
            check(vis and steps >= 2 and ing >= 1, f"Receta abre con pasos (día {i}, toma {j})")
            n_rec += 1
            pg.keyboard.press("Escape"); pg.wait_for_timeout(80)
            check(pg.locator("#rec").is_hidden(), "La receta se cierra con Escape")
        # almuerzo y merienda sin receta
        labels = [pg.locator("button.meal .lbl").nth(k).inner_text().upper() for k in range(btns.count())]
        check(not any(l in ("ALMUERZO", "MERIENDA", "PRE-ENTRENO") for l in labels), f"Sin receta en almuerzo/merienda (día {i})")
    check(n_rec >= 20, f"Recetas probadas: {n_rec}")
    # cerrar tocando fuera
    pg.locator(".day-btn").nth(0).click(); pg.locator("button.meal").nth(0).click(); pg.wait_for_timeout(100)
    pg.mouse.click(195, 30); pg.wait_for_timeout(100)
    check(pg.locator("#rec").is_hidden(), "La receta se cierra tocando fuera")

    # 5. Fechas límite
    def set_date(v):
        pg.fill("#fecha", v); pg.dispatch_event("#fecha", "change"); pg.wait_for_timeout(150)
    cases = [("2026-11-02", "Otoño", "SEMANA 1 DE NOVIEMBRE", 0), ("2026-11-30", "Otoño", "SEMANA 5 DE NOVIEMBRE · MENÚ 2", 1),
             ("2026-12-20", "Otoño", "SEMANA 2 DE DICIEMBRE", 1), ("2026-12-21", "Invierno", "SEMANA 3 DE DICIEMBRE", 2),
             ("2027-01-04", "Invierno", "SEMANA 1 DE ENERO", 0), ("2027-03-22", "Primavera", "SEMANA 4 DE MARZO", 3),
             ("2027-06-21", "Verano", "SEMANA 3 DE JUNIO", 2), ("2028-02-29", "Invierno", "SEMANA 4 DE FEBRERO", 3)]
    for v, est, kick, wk in cases:
        set_date(v)
        h = pg.inner_text("#hero").upper()
        check(est.upper() in h and kick in h, f"{v}: {est} · {kick.lower()}")
        sel = pg.locator('#weeks button[aria-selected="true"]').inner_text().strip()
        check(sel.startswith(f"Semana {wk + 1}"), f"{v}: pestaña Semana {wk + 1}")
        check(pg.locator("#hoy").is_visible(), f"{v}: aparece el botón Hoy")
    pg.click("#hoy"); pg.wait_for_timeout(150)
    check("SEMANA 4 DE OCTUBRE" in pg.inner_text("#hero").upper(), "Botón Hoy vuelve a hoy")

    # 6. Semanas y días
    pg.locator("#weeks button").nth(0).click(); pg.wait_for_timeout(100)
    check("Lunes" in pg.inner_text(".day-head h2"), "Otra semana se abre en lunes")
    check(pg.locator(".day-btn").count() == 7, "7 botones de día")

    # 7. Compra
    pg.click("#v-compra"); pg.wait_for_timeout(150)
    shop = pg.inner_text("#view")
    check("Lista de la compra" in shop and pg.locator(".shop li").count() > 20, "Lista de la compra con productos")
    check("NaN" not in shop and "undefined" not in shop, "Lista sin valores erróneos")
    pg.locator("#weeks button").nth(3).click(); pg.wait_for_timeout(100)  # la semana que toca hoy
    cb = pg.locator(".shop input").nth(0); cb.check()
    pg.reload(); pg.wait_for_timeout(400); pg.click("#v-compra"); pg.wait_for_timeout(150)
    check(pg.locator(".shop input").nth(0).is_checked(), "Las casillas se recuerdan al recargar")
    pg.click("#clear"); pg.wait_for_timeout(100)
    check(not pg.locator(".shop input").nth(0).is_checked(), "Desmarcar todo funciona")
    pg.click("#v-menu"); pg.wait_for_timeout(100)

    # 8. Ajustes de entreno
    pg.locator(".day-btn").nth(2).click(); pg.wait_for_timeout(80)
    before = pg.inner_text(".day-head")
    pg.click("#ajustes"); pg.wait_for_timeout(120)
    check(pg.locator("#cfg").is_visible(), "Ajustes se abre")
    pg.locator("#entdays button").nth(2).click(); pg.wait_for_timeout(120)
    pg.keyboard.press("Escape"); pg.wait_for_timeout(80)
    after = pg.inner_text(".day-head")
    check("DESCANSO" in before.upper() and "ENTRENO" in after.upper(), "Marcar miércoles como entreno cambia el día")
    check("PRE-ENTRENO" in pg.inner_text(".meals").upper(), "El miércoles pasa a tener pre-entreno")
    pg.reload(); pg.wait_for_timeout(300)
    pg.locator(".day-btn").nth(2).click(); pg.wait_for_timeout(80)
    check("ENTRENO" in pg.inner_text(".day-head").upper(), "Los días de entreno se recuerdan")
    pg.click("#ajustes"); pg.locator("#entdays button").nth(2).click(); pg.keyboard.press("Escape")

    # 9. Sin desbordamiento horizontal en móviles pequeños
    pg.fill("#fecha", "2027-01-04"); pg.dispatch_event("#fecha", "change"); pg.wait_for_timeout(150)  # con el botón Hoy visible
    for wdt in (320, 360, 390, 430):
        pg.set_viewport_size({"width": wdt, "height": 800}); pg.wait_for_timeout(100)
        sw = pg.evaluate("document.documentElement.scrollWidth")
        check(sw <= wdt, f"Sin scroll lateral a {wdt}px (ancho {sw})")
        pg.locator("button.meal").nth(0).click(); pg.wait_for_timeout(100)
        sw2 = pg.evaluate("document.querySelector('#rec .panel').scrollWidth - document.querySelector('#rec .panel').clientWidth")
        check(sw2 <= 0, f"Receta sin scroll lateral a {wdt}px")
        pg.keyboard.press("Escape")
    pg.set_viewport_size({"width": 390, "height": 844})
    pg.screenshot(path="/tmp/aud_light.png")

    # 10. Modo oscuro
    dctx = b.new_context(viewport={"width": 390, "height": 844}, color_scheme="dark")
    dp = dctx.new_page(); dp.goto(URL); dp.wait_for_timeout(400)
    bg = dp.evaluate("getComputedStyle(document.body).backgroundColor")
    check(bg != "rgb(246, 245, 241)", f"Modo oscuro aplica fondo oscuro ({bg})")
    dp.screenshot(path="/tmp/aud_dark.png")

    # 11. Accesibilidad básica
    unnamed = pg.evaluate("[...document.querySelectorAll('button')].filter(b => !(b.innerText.trim() || b.getAttribute('aria-label'))).length")
    check(unnamed == 0, f"Todos los botones tienen nombre ({unnamed} sin nombre)")
    check(len(errs) == 0, f"Sin errores de JavaScript ({errs[:3]})")
    b.close()

# 12. Archivos de la web
root = ROOT
html = open(root + "index.html", encoding="utf-8").read()
for f in ["icon.svg", "favicon-32.png", "apple-touch-icon.png", "manifest.webmanifest", "icon-192.png", "icon-512.png"]:
    check(os.path.exists(root + f), f"Existe {f}")
check("const PLAN" in html and "function recetaDe" in html and "function buildWeek" in html, "index.html incluye plan, datos y recetas")
man = json.load(open(root + "manifest.webmanifest", encoding="utf-8"))
check(man["short_name"] == "Menús" and len(man["icons"]) >= 2, "Manifest correcto")

print(f"Comprobaciones OK: {len(ok)}")
print(f"FALLOS: {len(fails)}")
for f in fails: print("  ✗", f)
