#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Monta banco.js a partir de lotes-questoes/leva*.json (ordem alfabética) e valida.

Enfermare. Ver CLAUDE.md: banco.js é gerado, a fonte é a leva.

banco.js é GERADO — não editar à mão. Para mexer numa questão, edite a leva
correspondente e rode: python3 monta_banco.py
"""
import glob, json, os, subprocess, sys

RAIZ = os.path.dirname(os.path.abspath(__file__))

def main():
    banco = []
    # lotes ainda em escrita por redatores ficam de fora: um nome por linha em lotes-questoes/EM_ANDAMENTO.txt
    pend = os.path.join(RAIZ, "lotes-questoes", "EM_ANDAMENTO.txt")
    fora = set(open(pend, encoding="utf-8").read().split()) if os.path.exists(pend) else set()
    for arq in sorted(glob.glob(os.path.join(RAIZ, "lotes-questoes", "leva*.json"))):
        if os.path.basename(arq) in fora:
            print(f"  {os.path.basename(arq)}: em andamento, fora do banco"); continue
        leva = json.load(open(arq, encoding="utf-8"))
        print(f"  {os.path.basename(arq)}: {len(leva)} questões")
        banco.extend(leva)
    with open(os.path.join(RAIZ, "banco.js"), "w", encoding="utf-8") as f:
        f.write("window.BANCO=")
        json.dump(banco, f, ensure_ascii=False, indent=0)
        f.write(";\n")
    print(f"banco.js gerado: {len(banco)} questões\n")
    r = subprocess.run([sys.executable, os.path.join(RAIZ, "valida_banco.py")])
    sys.exit(r.returncode)

if __name__ == "__main__":
    main()
