"""Genera index.html a partir de template.html + plan.js + data.js + recipes.js.
Para regenerar el plan de platos: node tools/planner.js

Uso: python3 build.py
Edita los menús, ingredientes o precios en data.js y vuelve a ejecutar este script.
"""
from pathlib import Path

here = Path(__file__).parent
template = (here / "template.html").read_text(encoding="utf-8")
data = (here / "data.js").read_text(encoding="utf-8")
recipes = (here / "recipes.js").read_text(encoding="utf-8")
plan = (here / "plan.js").read_text(encoding="utf-8")
(here / "index.html").write_text(template.replace("/*DATA*/", plan + "\n" + data + "\n" + recipes), encoding="utf-8")
print("index.html actualizado")
