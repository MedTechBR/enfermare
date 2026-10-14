#!/usr/bin/env python3
"""Ícones do Enfermare: gota de soro com cruz, na cor da marca (#B0306A), sobre papel claro.
   Gera icons/icon-180.png, icon-192.png, icon-512.png e icon-maskable-512.png.
   Quadrado cheio, sem canto transparente (o macOS emoldura ícone 'any' com transparência)."""
import math
from PIL import Image, ImageDraw

MARCA = (176, 48, 106, 255)
BRANCO = (255, 255, 255, 255)
PAPEL = (250, 250, 248, 255)

def icone(tam, maskable=False):
    S = 4 * tam                                  # desenha grande e reduz (antisserrilhado)
    im = Image.new("RGBA", (S, S), PAPEL)
    d = ImageDraw.Draw(im)
    esc = (0.56 if maskable else 0.80) * S / 24  # o desenho mora numa grade de 24
    off = (S - 24 * esc) / 2
    P = lambda x, y: (off + x * esc, off + y * esc)
    # gota: círculo de raio 7 em (12,14.7) + triângulo da ponta (12,2.6) até os pontos de tangência
    cx, cy, r = 12, 14.7, 7
    cos_t = r / (cy - 2.6); sin_t = math.sqrt(1 - cos_t**2)
    t1, t2 = (cx - r*sin_t, cy - r*cos_t), (cx + r*sin_t, cy - r*cos_t)
    d.polygon([P(12, 2.6), P(*t1), P(*t2)], fill=MARCA)
    a, b = P(cx - r, cy - r), P(cx + r, cy + r)
    d.ellipse([a, b], fill=MARCA)
    w = round(2.2 * esc)
    d.line([P(12, 11.4), P(12, 18.0)], fill=BRANCO, width=w)
    d.line([P(8.7, 14.7), P(15.3, 14.7)], fill=BRANCO, width=w)
    return im.resize((tam, tam), Image.LANCZOS).convert("RGB")

for tam in (180, 192, 512):
    icone(tam).save(f"icons/icon-{tam}.png")
icone(512, maskable=True).save("icons/icon-maskable-512.png")
print("ícones gerados")
