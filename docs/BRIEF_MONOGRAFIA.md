# Brief para escrever uma leitura (monografia) do Enfermare (versão 14/10/2026)

Enfermare é a plataforma de estudo de **Enfermagem** do MedTech (`~/Documents/Claude/enfermare/`, irá ao ar
em medtechbr.com.br/enfermare/). É irmã do ClínicaMed e do CirurgiaMed e herda deles a arquitetura e o
formato das leituras. Público: enfermeiro que presta a **residência multiprofissional** (ENARE/FGV e
residências de universidades), **concursos de enfermeiro** (EBSERH e secretarias) e **título de especialista**
(ABENTI, SOBECC, SOBEST, ABEn). O dono é o Matheus, médico, que exige textos de **nível monografia**,
comparáveis à norma e à diretriz, não resumo de cursinho.

## Modelos (só leitura, NÃO edite nada lá)
Leia antes de escrever, em `~/Documents/Claude/clinicamed/leituras/`: `choque.html` (monografia de diretriz),
`parada-cardiaca.html` (monografia com fluxogramas). Copie a estrutura e o cabeçalho. O CSS/JS das leituras
já existe aqui em `leituras/_leitura.css` e `leituras/_leitura.js`.

## Fontes
Normas e diretrizes PRIMÁRIAS vigentes em outubro de 2026, conferidas na fonte (nome + número + ano). O
levantamento já feito está em `docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md` (leia a seção E inteira: Res. COFEN
736/2024 do Processo de Enfermagem, 564/2017 ética, 743/2024 + Parecer Normativo 01/2024 do dimensionamento,
801/2026 prescrição, NANDA-I 13ª ed. 2024–2026, Rede Alyne, calendário vacinal 2026, Portaria 11.211/2026 de
notificação, PNAB 2.436/2017 e eMulti 635/2023, NPIAP 2016 + International Guideline 2025, AHA 2025, Política
Nacional de Cuidados Paliativos 2024, e a lista de resoluções COFEN 2023–2026). Textos já baixados e extraídos
em `provas-reais/txt/` (Parecer Normativo 01/2024, IN do calendário 2026, Portaria 11.211/2026, editais e o
conteúdo programático do ENARE e da EBSERH). Para o resto: legislação no planalto.gov.br e bvsms.saude.gov.br,
resoluções no cofen.gov.br, manuais e cadernos do Ministério da Saúde e da ANVISA, diretrizes de sociedades.
**Nunca escreva número, dose, prazo, corte ou classificação de memória.** Se não confirmou, não escreva o
número e anote "a conferir" no relatório. Quando uma norma substituiu outra que ainda aparece em prova (358/2009
→ 736/2024; Rede Cegonha → Rede Alyne; 543/2017 → 743/2024), ensine as duas e diga o que mudou.
Livros de enfermagem (Potter, Brunner, NANDA-I, NIC/NOC) têm direito autoral: não copie texto nem lista
(ex.: características definidoras da NANDA-I). Pode citar o título do diagnóstico e o raciocínio.

## Regras de conteúdo
1. **Tamanho:** 4.000–6.000 palavras. Conte com `sed 's/<[^>]*>/ /g' arquivo.html | wc -w`.
2. **Abra com a base:** a primeira seção depois do sumário é "Visão geral", que explica o tema do zero para
   quem chega sem base (o público é amplo, do recém-formado ao especialista). Depois aprofunde.
3. **Enfermagem de verdade:** o foco é o que o enfermeiro avalia, decide e faz, o que é privativo dele, o que
   é do técnico, como registrar, e o que a norma exige. Mostre como a banca cobra (FGV gosta de "assinale a
   correta" sobre artigo de lei e de conduta de enfermagem em caso clínico).
4. Classificação de evidência ou força de recomendação só **transcrita da fonte**, em `table.rec`.
5. Português do Brasil, prosa técnica e direta.
6. **Escrita (o Matheus reprova "cara de IA"):** sem travessão (— ou –) em prosa, título e legenda; sem emoji;
   sem "é importante ressaltar / vale destacar / neste contexto / não é X, é Y"; sem frase-aforismo de
   fechamento; títulos e h2 são **substantivos** ("Etapas do Processo de Enfermagem", não "Etapas: o coração
   do cuidado"); o dek diz o que o texto cobre e por qual fonte. Negrito com parcimônia.

## Estrutura do HTML
```html
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Título</title>
<link rel="stylesheet" href="_leitura.css?v=1"><script src="_leitura.js?v=1"></script>
<div class="wrap">
<p class="kicker">Área · NN min · Fonte ANO · monografia</p>
<h1>Título</h1>
<p class="dek">O que o texto cobre e por qual fonte.</p>
<nav class="toc"><b>Sumário</b><ol><li><a href="#id">Seção</a></li>…</ol></nav>
<h2 id="visao">Visão geral</h2>
…
<h2 id="armadilhas">Erros frequentes</h2>
<h2 id="autoteste">Perguntas de revisão</h2>
<a class="vaiQuestoes" href="../index.html?area=AREA#questoes">Treinar questões de …</a>
<footer><b>Fontes primárias</b><ol><li>Citação completa com número, ano e URL.</li></ol></footer>
</div>
```
h2 **sem numeração**, todo h2 com id e no sumário na mesma ordem e texto. Componentes (em `_leitura.css`):
`table.rec`, `table.criterio`, `div.rolagem>table`, `div.cx chave|armadilha|fonte|nota`, `div.ancora`
(Questão-âncora com `<details>`), `div.compara`, `div.dose`, `ol.passos`, `<details><summary>` no autoteste.

**Fluxogramas (mínimo 2):**
```html
<div class="fluxo"><div class="leg"><b>Fluxograma 1</b>Legenda curta</div>
<pre class="mermaid">
flowchart TD
  A["Rótulo entre aspas"] --> B{"Pergunta?"}
  B -->|"sim"| C["Ação"]
</pre></div>
```
Rótulos entre aspas, `<br/>` para quebra, sem parênteses ou vírgula fora das aspas, `flowchart TD`, no máximo
3 nós lado a lado.

**Figuras:** nunca copie imagem de livro, manual, PDF ou web (direito autoral; app público e pago). Esquema
simples pode ser **SVG inline** desenhado por você: fonte `-apple-system,system-ui,sans-serif`, cores
`var(--ink)`, `var(--ink2)`, `var(--brand)`, `var(--linha)`, `var(--ok)`, `var(--err)`; texto de SVG não quebra
linha: quebre à mão e confira que nada vaza do viewBox.

## Operação
- **Escreva por seções:** crie o arquivo com cabeçalho + primeira seção e acrescente uma seção por vez
  (até ~900 palavras por acréscimo). Nunca um Write gigante.
- **Cota: no máximo 6 buscas web (WebSearch + WebFetch somados)** para a leitura inteira. Prefira os textos já
  baixados e fontes oficiais conhecidas.
- Rascunhos só em `/private/tmp/claude-501/-Users-matheusparente/ec2755d2-48ad-44c0-8d8b-1814d4570645/scratchpad/mono-<slug>/`.
- Escreva SÓ `leituras/<slug>.html` e `leituras/_entradas_<slug>.json`:
  `[{"f":"<slug>.html","tipo":"Res. COFEN 736/2024 · monografia","area":"sae","min":60,"t":"Título","s":"Resumo de duas a quatro linhas, igual ao dek."}]`
  `min` = palavras ÷ 80. `area` é um id de `taxonomia.js`.
- Ao fim: `python3 valida_leituras.py` (0 erros no seu arquivo).
- **Não toque** em `leituras.js`, `index.html`, `CLAUDE.md`, `sw.js`, `banco.js`, nem em nada de outros apps.
  Não rode `bump.py`, não faça commit nem push.
- Relatório final curto: arquivo, palavras, fluxogramas, fontes usadas com ano, e tudo que ficou "a conferir".
