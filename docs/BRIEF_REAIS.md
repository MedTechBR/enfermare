# Brief — questões de prova real para o Enfermare (14/10/2026)

Você recebe um lote de questões extraídas VERBATIM de cadernos oficiais públicos de Enfermagem (ENARE
multiprofissional/FGV, concurso EBSERH 2024/FGV, residências da UFPA, UNICAMP e HCPA). O gabarito (`gab`,
índice 0-based) é o OFICIAL DEFINITIVO e já foi conferido contra o PDF. Seu trabalho: triar e escrever os
campos editoriais. O app é de estudo de ENFERMAGEM (residência, concursos, título de especialista).
Leia antes `taxonomia.js` e a seção E de `docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md` (normas vigentes em
out/2026 e o que mudou; textos de normas já baixados em `provas-reais/txt/`).

## 1. Triagem — INCLUIR ou DESCARTAR
Quase tudo entra, inclusive SUS, políticas públicas, bioética, NR 32 e pesquisa. DESCARTE (registre o motivo) só:
- o gabarito oficial contraria a norma ou diretriz VIGENTE hoje (out/2026) de um jeito que ensinaria errado.
  Diga qual norma e o que mudou. ATENÇÃO: questão que cita a Res. 358/2009, a Res. 543/2017 ou a Rede Cegonha
  NÃO é descartada só por isso se o gabarito continua correto no conteúdo; explique no `coment` a norma nova
  (736/2024; 743/2024 + Parecer Normativo 01/2024; Rede Alyne, Portaria 5.350/2024);
- texto truncado/embaralhado ou dependente de figura ausente;
- mais de uma resposta defensável.
Na dúvida razoável sobre o gabarito, MANTENHA (é o oficial) e explique a controvérsia no `coment`.

## 2. Campos de cada questão incluída
- `q` e `alts`: COPIE EXATAMENTE. Única exceção: artefato evidente de extração (hífen de quebra, espaço
  duplo). Nunca reescreva. `gab`: NUNCA altere.
- `tema`: um id de `taxonomia.js`. Use `sub` EXATO da lista daquela área (o mais próximo).
  Dicas: Lei 8.080/8.142, PNAB, RAS, humanização, equidade, educação permanente → sus; indicadores,
  vigilância, notificação, saúde do trabalhador → coletiva; TB, hanseníase, HIV, IST, hepatites, arboviroses →
  transmissiveis; vacinas e rede de frio → imuniza; Lei 7.498, Decreto 94.406, Código de Ética, resoluções
  COFEN, bioética → etica; SAE, PE, NANDA/NIC/NOC, teorias → sae; NR 32, PNSP, IRAS, precauções, resíduos →
  seguranca; CME, centro cirúrgico, SRPA, perioperatório → cirurgica; dimensionamento, liderança, qualidade,
  auditoria, pesquisa → gestao.
- `cenario`: aps, enf, emg, cc, uti, ger. `comp`: aval (avaliação e diagnóstico de enfermagem), cuid
  (intervenção e cuidado), tec (procedimento e técnica), calc (medicação e cálculo), norma (legislação, ética,
  normas). `nivel`: r1, r2, r3 (residência e concurso costumam ser r1/r2; especialidade fina, r3).
- `base`: norma, manual ou diretriz que sustenta a resposta, com NÚMERO e ANO (4 dígitos), versão VIGENTE.
  Ex.: "Lei 8.080/1990, art. 7º", "Resolução COFEN 564/2017, art. 36", "Portaria GM/MS 2.436/2017 (PNAB)",
  "Instrução Normativa do Calendário Nacional de Vacinação 2026 (PNI/MS)", "RDC ANVISA 15/2012".
  Não invente número nem ano: em dúvida, confira.
- `coment`: 150 a 800 caracteres, explica POR QUE a oficial está certa e o raciocínio, citando o artigo,
  critério ou número decisivo e a fonte. Tom de manual, frases diretas.
- `porAlt`: uma frase por alternativa, na MESMA ordem de `alts`, cada uma com mais de 20 caracteres. A da
  correta começa com "Correta: ". As demais dizem por que estão erradas.
- `fonte`: copie o objeto recebido. Remova o campo `id` (ele só serve ao relatório).

Escrita (coment e porAlt): **sem travessão (—, –)**; sem emoji; sem "é importante ressaltar"; sem markdown.
Rigor: número, prazo, dose, artigo só conferidos (fonte + ano). Nada de memória.

## 3. Saída
Escreva DOIS arquivos (e só eles):
1. `lotes-questoes/leva<NNN>-reais-<sufixo>.json`: lista das incluídas com as chaves
   q, alts, gab, tema, sub, cenario, comp, nivel, base, coment, porAlt, fonte (nesta ordem).
2. `provas-reais/relatorios/<sufixo>.json`: `{"incluidas": N, "descartadas": [{"id":..., "motivo":...}], "discutiveis": [{"id":..., "porque":...}]}`.

Antes de terminar rode e corrija o que falhar:
`python3 -c "import json,re;t=open('taxonomia.js').read();d=json.load(open('<arquivo da leva>'));assert all(len(x['porAlt'])==len(x['alts']) and x['porAlt'][x['gab']].startswith('Correta: ') and 150<=len(x['coment'])<=800 and re.search(r'(19|20)\d\d',x['base']) and '\"'+x['sub']+'\"' in t and '—' not in x['coment']+''.join(x['porAlt']) for x in d);print(len(d))"`
Não edite banco.js, leituras nem outros arquivos. Não rode monta_banco.py.
Cota: no máximo 5 buscas web (WebSearch + WebFetch) no lote inteiro; prefira os textos já baixados.
Resumo final: incluídas, descartadas por motivo, e todo gabarito oficial que você achou discutível mas manteve.
