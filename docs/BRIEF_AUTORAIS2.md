# Adendo ao BRIEF_AUTORAIS.md: escala (14/10/2026)

Leia primeiro `docs/BRIEF_AUTORAIS.md` inteiro: tudo lá vale, com as mudanças abaixo. O Matheus aprovou a
amostra e mandou escalar. Agora é volume COM rigor.

## Não repetir o banco
Antes de escrever, veja o que já existe nas suas áreas (o banco tem ~510 questões, 472 de provas reais):
```
python3 -c "
import json,re,sys
b=json.loads(re.sub(r'^window.BANCO=|;\s*$','',open('banco.js').read()))
T=set(sys.argv[1:])
for q in b:
  if q['tema'] in T: print(q['tema'],'|',q.get('sub',''),'|',q['q'][:110].replace(chr(10),' '))
" AREA1 AREA2
```
Cubra os `sub` da área de forma ampla, dando prioridade aos subtemas com menos questões. Nunca o mesmo
caso com outra roupa, nem paráfrase de questão real.

## Fontes (cota de busca web baixa: no máximo 3 no trabalho inteiro)
As leituras do próprio app já foram escritas com as normas conferidas em out/2026: use-as como fonte e
conferência (`leituras/*.html`; leia as da sua área). Os textos de normas baixados estão em `provas-reais/txt/`
(calendário vacinal 2026, Portaria 11.211/2026, Parecer Normativo COFEN 01/2024, editais). As leituras do
ClínicaMed (`~/Documents/Claude/clinicamed/leituras/`) e do FlashMed (`~/Documents/Claude/flashmed/leituras/`)
também foram conferidas e servem para o conteúdo clínico (não copie frases). Pontos já fixados nesta
sessão: Surviving Sepsis Campaign **2026** (antimicrobiano idealmente na 1ª hora no choque; noradrenalina
periférica; PAM 65), AHA **2025** (pós-parada SpO2 90 a 98%; compressões 100 a 120/min, 5 a 6 cm), Diretriz
Brasileira de Hipertensão **2025** (aposentou "urgência hipertensiva"), GOLD **2026**, NANDA-I 13ª ed.
2024–2026 (use só títulos que aparecem nas leituras ou nos cadernos do ENARE 2025/2026), reanimação neonatal
da SBP **2026**. Sem fonte confirmada, não faça a questão sobre aquele ponto.

## Alternativas mais enxutas
A amostra saiu com alternativas longas demais (média de 23 palavras). Alvo agora: 6 a 16 palavras por
alternativa, enunciado de 40 a 90 palavras. Distratores entre 85% e 115% do tamanho da correta; correta a
mais longa em 18 a 26% das questões. Use também alternativas curtas de conceito (um termo, um prazo, uma
dose), como a FGV faz.

## Formato e operação
- Escreva em partes de 10 questões, acrescentando ao arquivo. Rode o verificador do BRIEF_AUTORAIS no fim
  (ele aceita alternativas curtas; a regra de 85–115% vale igual).
- Distribua os níveis: ~35% r1, ~40% r2, ~20% r3, ~5% tit. Em `uti` e `urgencia`, as de nível `tit` têm 4
  alternativas (formato ABENTI).
- Distribua `gab` entre todas as posições (nenhuma acima de 30%).
- Escreva SÓ o seu arquivo de leva. Não edite banco.js; não rode monta_banco.py.
