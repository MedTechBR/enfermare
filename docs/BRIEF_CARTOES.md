# Brief — cartões de repetição espaçada do Enfermare (14/10/2026)

Cartões SM-2: frente `a` (pergunta curta e precisa), verso `b` (resposta em 1 a 3 frases com o número,
critério, prazo ou artigo, e a norma ou diretriz COM ANO que sustenta). `tema` = id de `taxonomia.js`.
Cartão sem âncora vira boato. Leia `taxonomia.js` e a seção E de `docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md`
(normas vigentes e o que mudou). Os textos de normas já baixados estão em `provas-reais/txt/` (Parecer
Normativo COFEN 01/2024, Instrução Normativa do calendário vacinal 2026, Portaria GM/MS 11.211/2026, editais).

Regras: o que cai em prova (artigos da Lei 7.498/1986 e do Decreto 94.406/1987, Código de Ética 564/2017,
etapas da Res. COFEN 736/2024, prazos e parâmetros, calendário vacinal, notificação, metas de segurança,
estágios de lesão por pressão, fórmulas de gotejamento, valores de referência). Um fato por cartão. Sem
travessão, sem emoji, sem markdown. Nenhum número de memória; sem confirmar, não faça o cartão. Não copie texto
de livro nem definição da NANDA-I. Cota: no máximo 4 buscas web no total.

Saída: SÓ `docs/cartoes_<slug>.json` (lista de `{"tema","a","b"}`), na quantidade e nas áreas pedidas.
Antes de terminar: `python3 -c "import json,re,sys;d=json.load(open(sys.argv[1]));t=set(re.findall(r'\"id\":\"(\w+)\"',open('taxonomia.js').read()));assert all(x['tema'] in t and re.search(r'(19|20)\d\d',x['b']) and '—' not in x['a']+x['b'] for x in d);print(len(d))" docs/cartoes_<slug>.json`
Relatório final: quantos por área e o que ficou duvidoso.
