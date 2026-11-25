"""Genera la maqueta navegable de Consona con los textos exactos de los artefactos de JUA-16.

Uso, desde la raíz del repositorio:

    # v1: la maqueta del paquete de revisión clínica (congelada; no se edita su plantilla)
    python3 -I scripts/maqueta/genmaqueta.py . scripts/maqueta/plantilla-maqueta-v1.html docs/review/jua-16/MAQUETA.html
    # v2: versión de trabajo, con los fallos de la revisión de producto del 13-11-2026 corregidos
    python3 -I scripts/maqueta/genmaqueta.py . scripts/maqueta/plantilla-maqueta-v2.html docs/product/maqueta-v2.html

Comprueba el SHA-256 de cada artefacto contra docs/review/jua-16/README.md antes de copiar nada.
Si un artefacto cambia de versión, hay que actualizar antes su fila y su huella en el README.
La plantilla lleva todo el diseño y la lógica; este script solo inserta los textos en «/*__DATA__*/null».
"""
import re, json, sys, os, hashlib, html

ROOT, TPL, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
ED = os.path.join(ROOT, "docs/education")
readme = open(os.path.join(ROOT, "docs/review/jua-16/README.md"), encoding="utf-8").read()
ARTS = {}
for aid, desc, ver, fname, h in re.findall(r'^\| (A\d+) \| ([^|]+) \| ([\d.]+) \| \[`([^`]+)`\]\([^)]+\) \| `([0-9a-f]{64})` \|$', readme, re.M):
    real = hashlib.sha256(open(os.path.join(ED, fname), "rb").read()).hexdigest()
    if real != h:
        sys.exit("SHA-256 distinto: " + fname)
    ARTS[aid] = {"desc": desc.strip(), "ver": ver, "file": fname, "hash": h}
assert len(ARTS) == 10, sorted(ARTS)

def esc(s): return html.escape(s, quote=False)
def inline(s):
    s = esc(s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    def link(m):
        txt, url = m.group(1), m.group(2)
        if "spm-tdpm" in url:
            return f'<a href="#" data-go="antes" class="inapp">{txt}</a>'
        return f'<span class="ilink">{txt}</span>'
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link, s)
    return s.replace("`", "")
def render(lines):
    out, para, lst = [], [], []
    def flush():
        nonlocal para, lst
        if para: out.append("<p>" + inline(" ".join(para)) + "</p>"); para = []
        if lst: out.append("<ul>" + "".join("<li>" + inline(x) + "</li>" for x in lst) + "</ul>"); lst = []
    for l in lines:
        if not l.strip(): flush(); continue
        if l.startswith("- "):
            if para: out.append("<p>" + inline(" ".join(para)) + "</p>"); para = []
            lst.append(l[2:]); continue
        if lst: flush()
        para.append(l.strip())
    flush()
    return "".join(out)
def render_quote(lines):
    q = [l[1:].lstrip() for l in lines if l.startswith(">")]
    out, lst = [], []
    for l in q:
        if l.startswith("- "): lst.append(l[2:]); continue
        if lst: out.append("<ul>" + "".join("<li>" + inline(x) + "</li>" for x in lst) + "</ul>"); lst = []
        if l.strip(): out.append("<p>" + inline(l) + "</p>")
    if lst: out.append("<ul>" + "".join("<li>" + inline(x) + "</li>" for x in lst) + "</ul>")
    return "".join(out)
def section(s, start_re, end_re=r'^## '):
    m = re.search(start_re, s, re.M)
    if not m: return None
    rest = s[m.end():]
    n = re.search(end_re, rest, re.M)
    return rest[:n.start()] if n else rest
def blocks(text):
    return [(m.group(1), m.group(2).strip(), m.group(3).strip("\n").split("\n"))
            for m in re.finditer(r'^### ([A-Z]{3}-\d+[a-z]?) · ([^\n]+)\n(.*?)(?=^### |\Z)', text, re.M | re.S)]
def doc(aid): return open(os.path.join(ED, ARTS[aid]["file"]), encoding="utf-8").read()

def screen(aid):
    s = doc(aid)
    body = section(s, r'^## \d+\. Texto de la pantalla')
    der = section(s, r'^## \d+\. Mensajes? de derivación') or ""
    ders = {i: (t, l) for i, t, l in blocks(der)}
    out = []
    for bid, title, lines in blocks(body):
        if bid.startswith("DER-"):
            t, l = ders[bid]
            out.append({"id": bid, "kind": "der", "title": t, "html": render_quote(l)}); continue
        if bid.endswith("-00"):
            plain = [x for x in lines if x.strip()]
            out.append({"id": bid, "kind": "title", "title": re.sub(r'\*\*', '', plain[0]), "sub": plain[1] if len(plain) > 1 else ""}); continue
        if bid.endswith("-01") and all((not x.strip()) or x.startswith(">") for x in lines):
            out.append({"id": bid, "kind": "note", "html": render_quote(lines)}); continue
        kind = "sources" if title.lower().startswith("fuentes") else "block"
        out.append({"id": bid, "kind": kind, "title": title, "html": render(lines)})
    return out

def refs_list(aid):
    sec = section(doc(aid), r'^## Referencias\s*$') or ""
    return [[m.group(1), m.group(3), m.group(2)] for m in re.finditer(r'^\[(\d+)\]: (\S+) "(.*)"$', sec, re.M)]
PREFIX = {"menstruacion": "S", "folicular": "FS", "ovulatoria": "OS", "lutea": "LS"}
def phase_refs(key, aid):
    ids = sorted(set(re.findall(r'\b%s-\d+\b' % PREFIX[key], doc(aid))), key=lambda x: int(x.split("-")[1]))
    aud = open(os.path.join(ROOT, "docs/research/fases", key, "02-auditoria-fuentes.md"), encoding="utf-8").read()
    rows = {m.group(1): m.group(2) for m in re.finditer(r'^\| (%s-\d+) \| ([^|]+) \|' % PREFIX[key], aud, re.M)}
    out = []
    for i in ids:
        if i not in rows: continue
        t = re.sub(r'\*', '', rows[i]).strip()
        m = re.search(r'(PMC\d+)', t) or None
        url = ("https://pmc.ncbi.nlm.nih.gov/articles/" + m.group(1) + "/") if m else ""
        if not url:
            d = re.search(r'DOI (10\.\S+)', t)
            url = ("https://doi.org/" + d.group(1).rstrip(".")) if d else ""
        out.append([i, t, url])
    return out

SCREENS = {"antes": {"aid": "A1", "blocks": screen("A1"), "refs": refs_list("A1")}}
for key, aid in [("menstruacion", "A6"), ("folicular", "A7"), ("ovulatoria", "A8"), ("lutea", "A9")]:
    SCREENS[key] = {"aid": aid, "blocks": screen(aid), "refs": phase_refs(key, aid)}

CARDS = {}
for key, aid in [("lutea", "A2"), ("menstruacion", "A3"), ("folicular", "A4"), ("ovulatoria", "A5")]:
    sec = section(doc(aid), r'^## 2\. Texto de las tarjetas')
    mv = re.search(r'^\| No la declaró \| «(.+?)» \|', sec, re.M)
    mdecl = re.search(r'^\| La persona afectada declaró[^|]*\| «(.+?)»', sec, re.M)
    cards = []
    for m in re.finditer(r'^### ([^\n]+)\n(.*?)(?=^### |\Z)', sec, re.M | re.S):
        body = m.group(2)
        pre = re.search(r'\*\*Antetítulo:\*\* (.+)', body).group(1).strip()
        h = render_quote([l for l in body.split("\n") if l.startswith(">")])
        card = {"title": m.group(1).strip(), "pre": pre, "html": h}
        if "{DURACIÓN}" in h:
            card["html_default"] = h.replace("<strong>{DURACIÓN}</strong>", esc(mv.group(1)))
            card["html_declared"] = h.replace("<strong>{DURACIÓN}</strong>", esc(mdecl.group(1).replace("N días", "5 días")))
            card["html"] = card["html_default"]
        cards.append(card)
    CARDS[key] = {"aid": aid, "cards": cards}

PRV = {}
sp = doc("A10")
for m in re.finditer(r'^### (PRV-\d+) · ([^\n]+)\n(.*?)(?=^### |^## )', sp, re.M | re.S):
    PRV[m.group(1)] = [re.sub(r'\*\*', '', l[1:].strip()) for l in m.group(3).split("\n") if l.startswith(">")]
assert set(PRV) == {"PRV-0%d" % i for i in range(1, 9)}, sorted(PRV)

DATA = {"arts": ARTS, "screens": SCREENS, "cards": CARDS, "prv": PRV}
tpl = open(TPL, encoding="utf-8").read()
assert "/*__DATA__*/null" in tpl, "La plantilla no tiene el marcador /*__DATA__*/null"
out = tpl.replace("/*__DATA__*/null", json.dumps(DATA, ensure_ascii=False))

# Solo la v2: textos de la app de ella (borrador, fuera del paquete de JUA-16). Cada bloque: {"es": [...], "ca": [...]}; «|» separa variantes.
if "/*__SUG__*/null" in out:
    sug_doc = open(os.path.join(ED, "app-ella-sugerencias-v0.1.0.md"), encoding="utf-8").read()
    SUG = {}
    for m in re.finditer(r'^### (SUG-\d+) · [^\n]+\n(.*?)(?=^### |^## )', sug_doc, re.M | re.S):
        langs = {k.lower(): [x.strip() for x in v.split("|")] for k, v in re.findall(r'^> (ES|CA): ([^\n]+)', m.group(2), re.M)}
        assert set(langs) == {"es", "ca"}, m.group(1)
        SUG[m.group(1)] = langs
    assert set(SUG) == {"SUG-0%d" % i for i in range(1, 10)}, sorted(SUG)
    out = out.replace("/*__SUG__*/null", json.dumps(SUG, ensure_ascii=False))

open(OUT, "w", encoding="utf-8").write(out)
print("ok", OUT, os.path.getsize(OUT), "bytes")
