# Enfermare — plataforma de estudo de Enfermagem

Criado em 14/10/2026 a pedido do Matheus: "uma outra plataforma de estudos, semelhante às nossas outras, mas
voltada para enfermagem". Nome escolhido por ele entre opções (Enfermagem + ENARE). É um **fork do CirurgiaMed**
(`~/Documents/Claude/cirurgiamed/`), que é fork do ClínicaMed: mesma arquitetura, camada viva, motor de conta
(mtsync), erratas (mterrata), sinalização (mtsinal), defesas. **Leia o CLAUDE.md do ClínicaMed e o do
CirurgiaMed** para o que é comum (chave por conteúdo, Fisher-Yates, viés de tamanho, `bump.py`, `.nojekyll`,
`servir.py` com charset, escrita sem cara de IA, formato das leituras, erratas). Aqui fica só o que é PRÓPRIO.

## Público e linha de produto (decisão dele, 14/10/2026)
- Três públicos no mesmo banco: **residência multiprofissional em Enfermagem** (ENARE/FGV e residências de
  universidades), **concursos de enfermeiro** (EBSERH/FGV) e **título de especialista** (ABENTI, SOBECC,
  SOBEST, ABEn). Técnico de enfermagem ficou FORA.
- **Separado, com login**: conta MedTech e sync automático como os apps de estudo. Desde 14/10/2026 (pedido dele:
  "inclua ele no MedTech na linha multi, junto com os 3 aplicativos de farmácia", "coloque mesmo preço dos outros")
  está **à venda na linha MedTech Multi** da vitrine (`medtech-multi.html`, com FarmaUTI, Banca ENARE Farmácia e SOS
  Farmácia): produto `enfermare` no `planos.json` com `publico:"enfermagem"`, R$ 49,90/mês ou R$ 397/ano, checkout
  Mercado Pago. Internamente segue a linha `provas` (retorno do pagamento e portal `provas.html`), como os de farmácia.
  Não pôr cross-link para apps médicos dentro do app.

## Provas (conferidas na fonte em 14/10/2026; URLs em docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md)
- **ENARE multiprofissional, Enfermagem** (FGV): 100 q, 5 alternativas, 5 h; q1–20 conhecimentos gerais
  (SUS) e q21–100 Enfermagem. Corte: 40 pontos (2024/25), 40% (2025/26), **50% (Edital 04/2026)**. Conteúdo
  programático (Anexo III) idêntico nas três edições. Cadernos públicos → questões reais.
- **EBSERH 2024** (FGV, prova 16/03/2025): 60 q (10 Português, 5 Legislação EBSERH, 15 Políticas, 30
  específicas), 4 h, mínimo 30 pontos; um caderno para os 31 cargos de Enfermeiro. Só q16–60 entram no app.
  EBSERH 2023 (IBFC, Edital 03 Assistencial): 37 cadernos de Enfermeiro e gabarito definitivo no servidor
  oficial `fs.ibfc.org.br` (URLs em `provas-reais/relatorios/extracao_ebserh_antigos.md`); q21–30 (SUS) comuns aos
  37 cargos = uma cópia com `fonte.tb`; q41–60 específicas. EBSERH 2019: só gabarito preliminar público (fora).
- Residências com caderno público: UFPA 2025 (50 q, A–E), UNICAMP 2026 (40 q A–D por programa; parte geral
  comum aos três; Saúde Mental = mesmas 40 do Adulto e Idoso), HCPA 2025 (40 q A–D; gabarito em imagem,
  lido por OCR visual duas vezes).
- **Títulos**: nenhuma sociedade publica caderno → questão de título é AUTORAL. ABENTI Edital 02/2026: 80 q
  A–D, 4 h, sem voltar, 60%; 2ª fase prática com 3 casos clínicos (14/11/2026).

## Normas que o banco precisa refletir (out/2026)
Res. COFEN 736/2024 (Processo de Enfermagem; revogou a 358/2009; 1ª etapa agora "Avaliação"), 564/2017
(Código de Ética, vigente), 743/2024 revogou a 543/2017 (dimensionamento → Parecer Normativo 01/2024), 801/2026
(prescrição), NANDA-I 13ª ed. 2024–2026, Rede Alyne (Port. 5.350/2024, ex-Rede Cegonha), calendário vacinal
2026 (IN do PNI), notificação compulsória (Port. 11.211/2026), PNAB 2.436/2017 + eMulti 635/2023, NPIAP 2016 +
International Guideline 2025, AHA 2025. O Anexo III do ENARE ainda diz "SAE": ensinar as duas nomenclaturas.

## O que mudou em relação ao CirurgiaMed
- Identidade: framboesa **#B0306A** (escuro #F4A6CB), ícone de gota de soro com cruz (`gera_icones.py`).
  Prefixo `ef_`, caches `ef-vN`/`ef-fontes-v1`/`ef-livros-v1`, IndexedDB `ef-db`, app id `enfermare` no mtsync,
  mtsinal e mterrata, porta local 8741 (teste com Firebase falso: 8742).
- Taxonomia: 19 áreas a partir do Anexo III do ENARE e do Anexo VII da EBSERH (ids: sus, coletiva,
  transmissiveis, imuniza, etica, sae, fundamentos, farmaco, seguranca, feridas, adulto, cirurgica, uti,
  urgencia, mulher, crianca, mental, idoso, gestao). `matriz:"Conhecimentos comuns"` (sus, coletiva) define o
  bloco de gerais do simulado. Cenários aps/enf/emg/cc/uti/ger; competências aval/cuid/tec/calc/norma.
- Simulado: `enare` (100 q, 5 h, 20 gerais primeiro + 80, corte 50%), `ebserh` (45 q, 3 h, 15 + 30, 50%),
  `abenti` (80 q, 4 h, sem voltar, 60%, só áreas do paciente crítico), `integra` (caderno real inteiro na
  ordem de `fonte.n`, ~3 min/questão), `livre`. Nota = % de acertos (régua dos cortes dos editais).
- Aba **Casos** (ex-Prática, `pratica.js`): Processo de Enfermagem em etapas, espelho C/H/A = avaliação e
  raciocínio diagnóstico / intervenção e técnica / segurança, ética e registro; 5,0 por caso.
- Turma desligada (sem função de backend `enfermare`). Sinalização e erratas precisam de `enfermare` na lista
  `APPS` de `MedTech/backend/functions/sinal.js` e deploy (ele roda o `.command`).

## Estado em 14/10/2026 (ef-v15)
4.194 questões (3.366 de prova real), 25 leituras, 292 cartões, 16 casos. Fontes reais além de ENARE/EBSERH 2024/
residências: EBSERH 2023 IBFC (37 cargos; caderno na íntegra = 10 de SUS comuns via `fonte.tb` + específicas),
militares (EsFCEx 2020/2024, EAOAP 2026, Marinha CP-CSM 2021–2025), IBADE/FGV municipais, HE Presidente Prudente
2014. Cerca de 10% das reais foram descartadas na triagem (gabarito que ensina norma revogada ou duas respostas);
motivos em `provas-reais/relatorios/*.json`. Pendências de conferência em `provas-reais/REVISAR.txt`.

## Fluxo de publicação
`bash docs/publica.sh "msg"` (para no primeiro erro). Lotes em escrita: um nome por linha em
`lotes-questoes/EM_ANDAMENTO.txt` (fora do banco e do commit). Leitura sem `_entradas_<nome>.json` fica fora do
índice e do commit. Cartões/casos: novo arquivo SEMPRE no fim de ORDEM_CARTOES/ORDEM_CASOS (SM-2 por índice).

## Teste local
`bash docs/prepara_teste.sh <scratchpad>/teste-ef` (cópia com `fake-firebase.js` e sem SW) e o preview
`enfermare-teste` (porta 8742) do `~/.claude/launch.json`; no console:
`await __fake.auth.signInWithEmailAndPassword('x@exemplo.com')`.

## Briefs dos redatores (docs/)
BRIEF_EXTRACAO (cadernos → `provas-reais/cand_*.json`), BRIEF_REAIS (triagem e comentário → leva1NN),
BRIEF_AUTORAIS (amostra → leva3NN), BRIEF_MONOGRAFIA (leituras), BRIEF_CASOS (`docs/casos_novos.json` →
pratica.js), BRIEF_CARTOES (`docs/cartoes_*.json` → flash.js; SM-2 por índice: só acrescentar no fim).
