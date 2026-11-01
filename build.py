"""Genera index.html a partir de template.html + data.js.

Uso: python3 build.py
Edita los menús, ingredientes o precios en data.js y vuelve a ejecutar este script.
"""
from pathlib import Path

here = Path(__file__).parent
template = (here / "template.html").read_text(encoding="utf-8")
data = (here / "data.js").read_text(encoding="utf-8")
(here / "index.html").write_text(template.replace("/*DATA*/", data), encoding="utf-8")
print("index.html actualizado")
