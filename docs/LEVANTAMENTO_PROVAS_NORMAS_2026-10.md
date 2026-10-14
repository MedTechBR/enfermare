# Enfermare: levantamento de provas e normas (Enfermagem, Brasil)

Data da pesquisa: 14/10/2026. Usei 24 buscas web (WebSearch) e nenhum WebFetch. O resto foi `curl` direto nos sites oficiais e listagens públicas.
Pasta: `/private/tmp/claude-501/-Users-matheusparente/ec2755d2-48ad-44c0-8d8b-1814d4570645/scratchpad/enf-provas/`
- `pdf/`: 41 PDFs baixados
- `txt/`: texto extraído (`pdftotext -layout` em `.txt`, modo simples em `.raw`)
- `txt/enare_enf_topicos_2026.txt`: os 40 tópicos de Enfermagem do ENARE, já limpos

Legenda: **[oficial]** = documento da banca ou do órgão; **[secundária]** = cursinho, blog ou notícia (não usar como fonte primária).

---

## A) ENARE: Residência em Área Profissional da Saúde, Enfermagem

### A.1 Estrutura nas 3 edições (confirmada nos editais e cadernos baixados)

| | 2024/2025 | 2025/2026 | 2026/2027 |
|---|---|---|---|
| Banca | FGV | FGV | FGV |
| Edital | Edital nº 2/2024 (multi/uni), retificado em 01/10/2024 | Edital nº 04/2025 | Edital nº 04/2026 (29/05/2026) |
| Data da prova | 20/10/2024, 14h–19h | 19/10/2025 | 13/09/2026 (tarde) |
| Questões | 100, com 5 alternativas (A–E) | 100, com 5 alternativas | 100, com 5 alternativas |
| Divisão | 20 de Competências comuns + 80 de Competências específicas | 20 gerais + 80 específicas | 20 Competências Gerais (no caderno: "Conhecimentos Gerais", q1–20) + 80 Específicas (q21–100) |
| Duração | 5 h | 5 h | 5 h |
| Corte | mínimo de 40 pontos para ir à 2ª etapa | mínimo de 40% de acertos | **mínimo de 50% de acertos** (item 9.6) |
| Nota final | objetiva = 90% + **análise curricular = 10%** (2ª etapa, classificatória) | só a objetiva | só a objetiva, convertida para escala 0–1000 (item 11.2) |
| Tipos de caderno publicados | 2 (Tipo 1 e 2) | 4 | 4 |
| Questões anuladas (Enfermagem, gabarito definitivo) | **9** por tipo (Tipo 1: 1, 27, 37, 41, 52, 58, 59, 71, 99) | **1** por tipo (Tipo 1: q46) | **0** |

Fontes oficiais:
- 2024/25: edital retificado, itens 12.1–12.6 e 13.1 ([PDF](https://www.gov.br/hubrasil/pt-br/ensino-e-pesquisa/exame-nacional-de-residencia-enare/edicoes-anteriores/2024-2025/anexos-residencia-multi-e-uniprofissional/4-edital-retificado_enare_res_mult_uni_01-10-24.pdf)).
- 2025/26: Edital 04/2025, itens 9.3–9.6 ([PDF](https://storage.googleapis.com/website-enare-2025/assets/docs/cand-multi/edital-04-residencia-multi.pdf)).
- 2026/27: Edital 04/2026, itens 9.3–9.7 e 11.2 ([PDF](https://enare2026.conhecimento.fgv.br/docs/36fa57ca8c68805fad82fce1d233592a.pdf?v=bf2fe672)).
- Datas: confirmadas no cabeçalho de cada gabarito definitivo.

O resultado preliminar 2026/27 saiu em 13/10/2026 ([página de publicações FGV](https://enare2026.conhecimento.fgv.br/publicacoes/)).
- O Estratégia publicou um gabarito extraoficial em 13/09/2026 [secundária]. Não usar: o oficial já está publicado.
- Portal oficial do ENARE (HU Brasil): https://www.gov.br/hubrasil/pt-br/ensino-e-pesquisa/exame-nacional-de-residencia-enare

### A.2 Conteúdo programático (Anexo III): idêntico em 2024/25, 2025/26 e 2026/27

Comparei os três anexos com `diff`. Só há diferenças de pontuação.
- Anexo III 2026/27: [PDF](https://enare2026.conhecimento.fgv.br/docs/36fa57ca8c6880cbb9cdca4ab9636daf.pdf?v=363f342b)
- Anexo III 2025/26: [PDF](https://storage.googleapis.com/website-enare-2025/assets/docs/cand-multi/anexo-03-conhecimentos.pdf)
- Anexo III 2024/25: [PDF](https://www.gov.br/hubrasil/pt-br/ensino-e-pesquisa/exame-nacional-de-residencia-enare/edicoes-anteriores/2024-2025/anexos-residencia-multi-e-uniprofissional/anexo-iii-cha_enare_24_25_res_mult_uni_v-sgpos-09-07-2024.pdf)

**1. Conhecimentos básicos (comuns a todas as profissões)**
- 1.1 História das políticas de saúde no Brasil e a Reforma Sanitária brasileira.
- 1.2 SUS: princípios, diretrizes e legislações estruturantes (Lei 8.080/1990, Lei 8.142/1990 e Decreto 7.508/2011); organização e funcionamento; controle social.
- 1.3 Redes de Atenção à Saúde.
- 1.4 Inclusão de grupos vulnerabilizados na saúde: crianças e adolescentes, idosos, LGBTQIA+, pessoas com deficiência, pessoas em situação de rua, povos originários, população negra, comunidades quilombolas e demais minorias sociais.
- 1.5 Estratégia Saúde da Família e Política Nacional de Atenção Básica.
- 1.6 Política Nacional de Educação Permanente em Saúde (Portaria GM/MS 198/2004 e alterações).
- 1.7 Política Nacional de Humanização.
- 1.8 Política Nacional de Vigilância em Saúde.
- 1.9 Bioética.
- 1.10 Programa Nacional de Segurança do Paciente.
- 1.11 Trabalho em equipe multidisciplinar.
- 1.12 NR 32: Segurança e Saúde no Trabalho em Serviços de Saúde (Portaria 485, de 11/11/2005).

**5. Enfermagem (específicos)**
- 5.1 Ética e bioética em enfermagem: aspectos éticos e legais do exercício profissional.
- 5.2 O processo de trabalho em saúde e em Enfermagem: SAE (etapas da SAE, classificação e taxonomia dos diagnósticos NANDA e intervenções NIC).
- 5.3 Semiologia geral e dos sistemas, adulta e pediátrica.
- 5.4 Fundamentos de Enfermagem.
- 5.5 Biossegurança nas ações de enfermagem.
- 5.6 Central de Material e Esterilização: métodos, técnicas e soluções nos processos de limpeza, preparo, desinfecção, esterilização e estocagem; manuseio de materiais estéreis e controle da esterilização.
- 5.7 Sistematização da Assistência de Enfermagem e Processo de Enfermagem.
- 5.8 Ações de Enfermagem na prevenção e no controle de infecção relacionada à assistência à saúde.
- 5.9 Administração aplicada à enfermagem.
- 5.10 Cuidados e riscos ao adulto, idoso e criança em uso de medicamentos.
- 5.11 Imunizações.
- 5.12 Cuidados de enfermagem à criança e ao adolescente, à mulher, ao adulto e ao idoso, ao homem e ao trabalhador.
- 5.13 Indicações, contraindicações e cuidados com cateteres, sondas e ostomias: tubo orotraqueal, traqueostomia, gastrostomia, sonda enteral, sonda vesical, cateter venoso central, portocath, eletroconvulsoterapia.
- 5.14 Cuidados no pré, trans e pós-operatório (adulto, idoso e criança), analisando os fatores de risco à vida.
- 5.15 Ações de enfermagem nas urgências e emergências.
- 5.16 Assistência de enfermagem na puericultura.
- 5.17 Assistência ao cliente em tratamento clínico e cirúrgico.
- 5.18 Assistência aos portadores de alterações nos sistemas renal, neurológico e musculoesquelético.
- 5.19 Assistência aos pacientes cirúrgicos (pré, trans e pós-operatório, sala de recuperação pós-anestésica).
- 5.20 Assistência ao cliente em estado grave.
- 5.21 Assistência nas emergências neurológicas e cardiovasculares.
- 5.22 Assistência nos choques anafilático, hipovolêmico, séptico, cardiogênico e neurogênico.
- 5.23 Assistência nos traumas (TCE, torácico, abdominal e politrauma).
- 5.24 Principais drogas e soluções usadas em terapia intensiva.
- 5.25 Cuidados ao paciente em UTI ou semi-intensiva.
- 5.26 Assistência à criança, ao adolescente, à mulher e ao idoso.
- 5.27 Ciclo gravídico-puerperal: diagnóstico de gravidez, modificações maternas, consulta pré-natal, idade gestacional e DPP, aleitamento materno.
- 5.28 Doenças mentais na pessoa idosa (depressão, demência, delirium); doenças comuns na pessoa idosa (Parkinson e Alzheimer).
- 5.29 Síndromes geriátricas (incapacidade cognitiva, instabilidade postural, imobilidade, incontinências, iatrogenias).
- 5.30 Emergências geriátricas.
- 5.31 Saúde mental.
- 5.32 Pesquisa em Enfermagem e prática baseada em evidências.
- 5.33 Segurança do paciente e do trabalhador.
- 5.34 Manejo clínico de acidentes por animais peçonhentos.
- 5.35 Conhecimentos fundamentais: PNAISM, anatomia do sistema reprodutor feminino.
- 5.36 Fisiologia do organismo materno, adaptação gravídica.
- 5.37 Atenção pré-natal de baixo risco.
- 5.38 Política de humanização do parto e nascimento.
- 5.39 Habilidades e atitudes das DCN do curso de graduação em Enfermagem passíveis de avaliação em prova teórica.
- 5.40 Habilidades e atitudes em procedimentos básicos de Enfermagem: sondagens, curativos, administração de medicamentos e oxigenoterapia.

O Anexo III ainda diz "SAE" e "NANDA/NIC". A Res. COFEN 736/2024 (seção E) usa "Processo de Enfermagem", com a etapa "Avaliação" no lugar de "Histórico/Coleta". As questões de 2026 já cobram a Res. 736 (vi isso no caderno do HCPA 2025, seção C). Convém ensinar as duas nomenclaturas.

### A.3 URLs diretas dos cadernos e gabaritos de Enfermagem (todos baixados)

**2026/2027** (base `https://enare2026.conhecimento.fgv.br`; a lista está no JSON embutido da [página Provas](https://enare2026.conhecimento.fgv.br/provas/))
- Tipo 1: `/docs/32fa57ca8c688163a8a1fc59633648bb.pdf?v=6bdd1eb7`
- Tipo 2: `/docs/32fa57ca8c6881088f55c67f5e95507c.pdf?v=9a750f39`
- Tipo 3: `/docs/32fa57ca8c688100acd8f02fa7b4d7f6.pdf?v=bb166dec`
- Tipo 4: `/docs/32fa57ca8c6881238157e5121b2e9cd4.pdf?v=99a43687`
- Gabarito definitivo multi (todas as profissões e tipos): `/docs/32fa57ca8c68815597a3e7f90baee852-definitivo.pdf?v=caa07b1d`
- Gabarito preliminar: `/docs/32fa57ca8c68815597a3e7f90baee852-preliminar.pdf?v=7d6348a2`

**2025/2026** (bucket público do Google Cloud Storage, listável: `https://storage.googleapis.com/website-enare-2025?prefix=assets/provas/`)
- `https://storage.googleapis.com/website-enare-2025/assets/provas/res-multi/multi-enfermagem-cns004-tipo-{1,2,3,4}.pdf`
- Gabarito definitivo: `https://storage.googleapis.com/website-enare-2025/assets/provas/gabaritos/enare2025-multiprofissional-gabaritos-definitivos.pdf`
- Também existe `enare2025-multiprofissional-gabaritos-prelimiares.pdf` (grafia da FGV). Os cadernos médicos ficam em `.../provas/res-med/` (é o caminho "res-med/pre-req" que você lembrava).

**2024/2025** (página da FGV: https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos-multiuni.html)
- Tipo 1: `https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/multiuni/Provas/ENFERMAGEM%20(ENFERMT01)%20-%20Tipo%201.pdf`
- Tipo 2: `.../Provas/ENFERMAGEM%20(ENFERMT02)%20-%20Tipo%202.pdf`
- Gabarito definitivo: `https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/multiuni/ENARE2024%20Gabarito%20Definitivo%20-%20Multi_Uniprofissional.pdf`

Os 10 cadernos ENARE baixados têm texto extraível, e o script encontrou as 100 questões e as 100 alternativas (E) em cada um. O caderno 2026 Tipo 1 tem 2 imagens grandes (provavelmente figura de questão); os de 2024 e 2025 não têm nenhuma.

Os gabaritos definitivos também têm texto, em grade "número / letra"; `*` marca questão anulada. Atenção: a ordem das questões muda entre os tipos. Para o banco, use só o Tipo 1 e o gabarito do Tipo 1.

---

## B) EBSERH: Enfermeiro

### B.1 Concurso nacional mais recente com prova: EBSERH 2024 (Concurso 01/2024), banca FGV
Página FGV: https://conhecimento.fgv.br/concursos/ebserh24/3 (Edital nº 03, Área Assistencial).

**Estrutura** ([Edital nº 03 retificado, item 10.1.2](https://conhecimento.fgv.br/sites/default/files/concursos/edital-no-3-area-assistencial-13.02.2025_completo.pdf)):
- Prova aplicada em **16/03/2025**, com 60 questões de 5 alternativas e duração de 4 h.
- Composição:

| Bloco | Disciplina | Questões | Pontos por questão |
|---|---|---|---|
| Básicos | Língua Portuguesa | 10 | 0,4 |
| Básicos | Legislação EBSERH | 5 | 1,0 |
| Básicos | Políticas Públicas de Saúde e Educação | 15 | 1,0 |
| Específicos | Conhecimentos Específicos | 30 | 1,2 |

- Total de 60 pontos; aprova quem fizer no mínimo 30.
- Ordem no caderno: LP q1–10, Legislação q11–15, Políticas q16–30, Específicos q31–60.
- Há prova de títulos depois da objetiva.
- **Um único caderno, o "Grupo 4 – Enfermagem", vale para os 31 cargos de Enfermeiro**: assistencial, UTI adulto/neo/ped, centro cirúrgico, obstetrícia, estomaterapia, nefrologia, oncologia, hemodinâmica, perfusionista, vigilância etc. A lista está na capa do caderno.

**Conteúdo programático** (Anexo VII do mesmo edital):
- Legislação EBSERH: Lei 12.550/2011, Regimento Interno (188ª reunião do CA, 21/10/2024), Código de Ética e Conduta 2ª ed. (2020), Estatuto Social (AGO de 17/04/2024), Regulamento de Pessoal, Norma Operacional de Controle Disciplinar (17/01/2023).
- Políticas Públicas de Saúde e Educação (26 itens):
  - história do SUS e Reforma Sanitária; controle social; CF/88 arts. 194–200;
  - Lei 8.080/90, Lei 8.142/90, Decreto 7.508/2011, LC 141/2012;
  - determinantes sociais; sistemas de informação; ESF/PNAB; RAS;
  - RDC 63/2011; RDC 36/2013; NR 32;
  - Res. CNS 453/2012, 553/2017 e 330/2003;
  - PNSI da População Negra (Port. 992/2009); PNSI LGBT (Port. 2.836/2011);
  - Port. GM/MS 230/2023 (Equidade de Gênero e Raça); Port. GM/MS 1.526/2023 (PNAISPD/RCPD);
  - PNHOSP; HumanizaSUS; PNVS; PNEPS (Port. 198/2004); PNSP; bioética.
- Grupo 4 Enfermagem, 42 itens:
  - SUS e planejamento; vigilância epidemiológica e PNI; modalidades assistenciais (hospital-dia, atenção domiciliar, ESF);
  - teorias e processo de enfermagem e taxonomias diagnósticas;
  - saúde mental (unidades, CAPS, comunicação terapêutica, psicofarmacologia); gerontologia;
  - oncologia (QT, RT, cirurgia); procedimentos técnicos; perioperatório;
  - alterações cardiovascular, digestiva, endócrina, renal, reprodutiva, tegumentar, neurológica e musculoesquelética;
  - saúde da mulher; gestante, parturiente e puérpera; RN; climatério; criança sadia;
  - urgência e emergência (SBV, PCR, politrauma, paciente crítico, distúrbios hidroeletrolíticos e ácido-básicos, VM, diálise, insuficiência hepática); avaliação de consciência no coma;
  - doação e transplante; violência, drogas e intoxicações;
  - gerenciamento (dimensionamento, recrutamento, educação continuada, liderança); qualidade; custos, auditoria e acreditação;
  - métodos diagnósticos; agravos relacionados ao trabalho;
  - resíduos (RDC 222/2018 e Cadernos de Hotelaria EBSERH, Portaria-SEI 142/2019); pesquisa;
  - CME e validação da esterilização; biossegurança; precauções padrão e por transmissão; controle de infecção;
  - Código de Ética.
  - O texto completo está em `txt/ebserh2024_edital3_assistencial.txt`, linhas 6591–6630.

**Cadernos e gabarito (baixados):**
- `https://conhecimento.fgv.br/sites/default/files/concursos/grupo-4-enfermageme3cnsgp04-tipo-{1,2,3,4}.pdf`: 60 questões, texto extraível, sem imagens.
- Gabarito definitivo: https://conhecimento.fgv.br/sites/default/files/concursos/ebserrhassistencial2024_gabarito_definitivo.pdf
  - Seção "Grupo - Enfermagem - TIPO 1..4", 1 questão anulada por tipo (q36 no Tipo 1).
  - O mesmo PDF traz Técnico em Enfermagem (Grupo 15), útil se o app abrir para nível técnico.
- Edital nº 1, de 18/12/2024: https://conhecimento.fgv.br/sites/default/files/concursos/edital-no-1-de-18-de-dezembro-de-2024-edital-no-1-de-18-de-dezembro-de-2024-.pdf

O próprio edital (item 10.1.6) diz que o caderno "ficará disponível somente no prazo recursal". Mesmo assim, em 14/10/2026 os PDFs continuam no ar. Convém guardar cópia própria.

### B.2 EBSERH 2023 (Concurso 01/2023), banca IBFC: **não consegui os cadernos**
- Prova de Enfermeiro em 17/12/2023, segundo fonte secundária.
- Houve retificação do gabarito definitivo de Enfermeiro – Saúde do Trabalhador, q59 → D (Edital nº 20, de 07/02/2024), segundo PDF reproduzido pelo [Estratégia](https://med.estrategia.com/portal/wp-content/uploads/2024/02/edital-EBSERH_info_sobre-dibulgacao-gab_def.result_definito.pdf) [secundária].
- O site www.ibfc.org.br responde 403. No portal `concursos.ibfc.org.br/informacoes/NNN/` varri os IDs 330–470 e nenhum é EBSERH; alguns IDs redirecionam para "Inscrições Abertas" e podem ser o concurso, que foi retirado do ar.
- O edital da área assistencial só aparece em espelho: [direcaoconcursos](https://cdn.direcaoconcursos.com.br/uploads/2023/10/Edital-EBSERH-area-assistencial.pdf) [secundária].
- Conclusão: não há fonte oficial pública para os cadernos IBFC 2023. Se o app quiser esse ano, terá de vir de acervo de terceiros (QConcursos, PCI), com a ressalva de direitos.

### B.3 Depois de 2024
- Em 2026 a EBSERH (agora "HU Brasil") contratou o Instituto AOCP para **processos seletivos simplificados sem prova objetiva**, só com análise curricular. Isso vem de fontes secundárias ([Direção Concursos](https://www.direcaoconcursos.com.br/noticias/pss-ebserh-banca-definida-2026)).
- A FGV publicou edital de 2026 só para a área médica.
- Não encontrei concurso nacional novo, com prova, para Enfermeiro.

---

## C) Residências de universidade/hospital com caderno público (4 exemplos, todos baixados)

| Instituição / ano | Formato | Caderno | Gabarito | Texto? |
|---|---|---|---|---|
| **UFPA (CEPS), Residência Multiprofissional 2025** (prova em 17/11/2024) | 50 questões, 5 alternativas: 15 SUS + 35 específicas; 2 questões NULAS no definitivo | [PROVA DE ENFERMAGEM.pdf](https://www.ceps.ufpa.br/images/conteudo/residencia/Multiprofissional%202025/provas%20gabaritos/PROVA%20DE%20ENFERMAGEM.pdf) (o diretório é listável; também há "PROVA ENFERMAGEM OBSTETRICA.pdf") | [Definitivo](https://www.ceps.ufpa.br/images/conteudo/residencia/Multiprofissional%202025/provas%20gabaritos/definitivo/GABARITO%20DEFINITIVO%20DE%20ENFERMAGEM.pdf) | Sim, nos dois |
| **HCPA (executado pela FUNDMED), Multiprofissional 2025** | 40 questões, **4 alternativas (A–D)**, 3 h; o caderno de Enfermagem ocupa as págs. 1–10 de um PDF de 88 págs. com todas as profissões | [Caderno](https://fundmed.org.br/website/wp-content/uploads/2025/04/HCPA-PROCESSO-SELETIVO-PARA-RESIDENCIA-MULTIPROFISSIONAL-2025-1o-EDITAL.pdf) | [Gabarito](https://fundmed.org.br/website/wp-content/uploads/2025/04/HCPA-GABARITO-MULTI-2025-1o-EDITAL.pdf) | Caderno sim; **gabarito é imagem** (3 págs., sem texto, precisa de OCR) |
| **UNICAMP (COREMU/FCM/COMVEST), Multiprofissional 2026** | Por programa: 40 questões, **4 alternativas** + 3 dissertativas, 4 h | [Criança e Adolescente](https://portal.fcm.unicamp.br/wp-content/uploads/sites/58/2025/11/11-ENFERMAGEM-%E2%80%93-PROGRAMA-EM-SAUDE-1.pdf), [Adulto e Idoso](https://portal.fcm.unicamp.br/wp-content/uploads/sites/58/2025/11/21-ENFERMAGEM-%E2%80%93-PROGRAMA-EM-SAUDE.pdf), [Saúde Mental](https://portal.fcm.unicamp.br/wp-content/uploads/sites/58/2025/11/31-ENFERMAGEM-%E2%80%93-PROGRAMA-EM-SAUDE-MENTAL.pdf) | [Gabarito de 13/11/2025, com anulações](https://portal.fcm.unicamp.br/wp-content/uploads/sites/58/2025/11/Gabarito-provas-objetivas-2026-1.pdf); a versão de 09/11 (`...-2026.pdf`) é anterior aos recursos | Sim |
| **HCFMUSP (HCX Fmusp), Multiprofissional 2026** (prova em 02/11/2025) | 30 questões, A–E (Enfermagem, opções 001/003/013/019/027/030) + prova dissertativa | **Caderno não encontrado** (a busca na biblioteca de mídia do site não acha) | [Edital de gabaritos](https://hcxfmusp.org.br/portal/wp-content/uploads/2025/11/Edital-de-Divulgacao-dos-Gabaritos-das-Provas-Objetivas-.pdf), aparentemente o gabarito preliminar | Sim |

Não encontrei:
- **SES-DF (FEPECS)**: só o edital 2026 [secundária, QConcursos]; o IADES aparece como banca só da residência médica.
- **UNIFESP** e **USP/FUVEST**: a residência multiprofissional do HCFMUSP é feita pelo próprio HCX, não pela FUVEST.

Outros com material oficial que apareceram na busca e não baixei:
- UFPA 2026: `.../Multiprofissional%202026/provas%20gabaritos/GabaritoDefinitivo/Gabarito%20Definitivo_Enfermagem.pdf`
- NUCEPE/UESPI (Edital 36)
- PUC-Campinas: [ENFERMAGEM-INTENSIVISMO.pdf](https://www.puc-campinas.edu.br/wp-content/uploads/2026/02/ENFERMAGEM-INTENSIVISMO.pdf)
- HU-UEPG, UNICENTRO e Fiocruz Brasília
- FUNDMED também publica HCPA 2022–2024 e UFCSPA 2022–2025 ([lista](https://fundmed.org.br/residencias/))

Atenção para o banco: o formato varia entre bancas (4 ou 5 alternativas; 30 a 100 questões). Vale guardar `n_alternativas` por questão.

---

## D) Títulos de especialista em Enfermagem

**Base legal:**
- Res. COFEN 581/2018 continua vigente. Foi alterada pelas Res. 610/2019 e 625/2020 e por decisões: 065/2021, 120/2021, 263/2023 (Podiatria Clínica), 264/2023 e 21/2024 (História da Enfermagem) ([COFEN](https://www.cofen.gov.br/resolucao-cofen-no-581-2018/)).
- Ela fixa o rol de especialidades e o registro de títulos de pós-graduação e de sociedades.
- A Res. COFEN 813/2026 regulamenta a atuação em Podiatria clínica.
- O cadastro obrigatório do título de Enfermagem Obstétrica (IES ou ABENFO) vem da Res. COFEN 0439/2012 ([COFEN](https://www.cofen.gov.br/resolucao-cofen-no-04392012)).

| Sociedade / título | Formato da prova (edital vigente) | Publica caderno? |
|---|---|---|
| **ABENTI**: TENTI-AD, TENTI-PED, TENTI-NEO (Terapia Intensiva) | **Edital 02/2026** (31/08/2026). 1ª fase teórica **on-line (eduCAT), 80 questões com 4 alternativas, 4 h, eliminatória, mínimo de 60%**, sem voltar a questões anteriores, em 10/10/2026. 2ª fase prática presencial: 3 casos clínicos simulados em estações, em 14/11/2026, no CBMI, Recife. Aprovação com média ≥ 7,0. Requisitos de 2–3 anos de atuação em UTI. Houve também um Edital 01/2026 (março). [Edital 02/2026](https://abenti.org.br/wp-content/uploads/2026/08/2026-EDITAL-02-TENTI-AD-PED-NEO.pdf) · [página](https://abenti.org.br/enfermagem-prova-ti-2026-2/) · [editais anteriores desde 2010](https://abenti.org.br/editais-de-certificacao/) | **Não.** O caderno fica disponível para o candidato só das 14h às 15h do dia da prova, na plataforma (item 17.1). |
| **SOBECC**: Especialista em Enfermagem Perioperatória (CC/RA/CME) | Análise documental + prova escrita/objetiva **on-line**. O edital vigente fica em área restrita ([página oficial](https://www.sobecc.org.br/-titulacao-sobecc.php)). Revalidação 2023: 70 pontos mínimos, 5 anos de bloco operatório, taxa de R$ 420 ([PDF](https://sobecc.org.br/down/revalidacao-titulo-especialista_2023.pdf)). Número de questões **não confirmado**: um site comercial fala em 80–100 questões e 4 h [secundária, não confiável]. | Não encontrei caderno público |
| **SOBEST**: TiSOBEST (Estomaterapia) | **Edital 2026–2027**. 1ª fase: memorial documentado (máx. 60 pontos; ≥ 50 dispensa as provas; 21–49 vai às provas). 2ª fase: prova escrita (máx. 40 pontos). 3ª fase: prova de habilidades clínicas (≥ 50% dos itens). Aprovação com ≥ 60 na soma. Provas durante o XVI Congresso Brasileiro de Estomaterapia, em Recife. **O edital traz datas internas conflitantes (15 e 27/10)**. [Edital](https://sobest.com.br/wp-content/uploads/2026/06/Edital-TiSOBEST-2026-2027.pdf) | Não encontrei |
| **ABEn Nacional**: Enfermagem Gerontológica (Edital ABEn 02/2026) | Análise de currículo + prova escrita presencial: **20 objetivas (0,4 cada) + 1 estudo de caso (2,0)**, 3 h, em 09/11/2026, Brasília. Nota final = média (currículo + prova) ≥ 7. [Edital](https://abennacional.org.br/wp-content/uploads/2026/07/Edital-prova-de-titulo-enf-gerontologica-versao_fi_260630_061143-1.pdf). Há também edital de 2026 para **História da Enfermagem** ([PDF](https://abennacional.org.br/wp-content/uploads/2026/06/Edital_processo_Avaliativo_Historia_da_Enfermagem__260630_061558-1.pdf)). | Não |
| **ABENFO**: Enfermagem Obstétrica | Não encontrei edital de prova 2025/2026. O site abenfo.org.br respondeu 406. | Não |
| **SOBEN** (Nefrologia) / Urgência e Emergência | Não verifiquei: soben.org.br respondeu 403 e não sobrou cota de busca. A SOBENDE (Dermatologia) tem página de titulação: https://www.sobende.org.br/titulados | Não |

Conclusão para o produto: **nenhuma sociedade de título de Enfermagem publica caderno**. Para essa trilha, o banco precisa de questões autorais baseadas na bibliografia dos editais: a ABENTI traz bibliografia nos Anexos II–IV e a SOBEST em [Referências 2026](https://sobest.com.br/wp-content/uploads/2026/01/Referencias-bibliograficas_Edital-2026.pdf).

---

## E) Normas recentes que o banco precisa refletir

| Tema | Situação em out/2026 | Fonte |
|---|---|---|
| **Processo de Enfermagem** | **Res. COFEN 736, de 17/01/2024**, revoga expressamente a **358/2009**. São 5 etapas: **Avaliação** (no lugar de Histórico/Coleta), Diagnóstico, Planejamento (priorização, resultados, prescrição), Implementação (padrões de cuidado autônomos, interprofissionais e de programas de saúde) e Evolução. Diagnóstico e prescrição são privativos do enfermeiro (art. 6º), e a consulta de enfermagem segue as etapas do PE (art. 5º). | [COFEN](https://www.cofen.gov.br/resolucao-cofen-no-736-de-17-de-janeiro-de-2024/) |
| **Código de Ética** | Continua a **Res. COFEN 564/2017**: a página não mostra revogação, e a lista de resoluções 2023–out/2026 não traz código novo. Mudou o **Código de Processo Ético**, pela Res. 758/2024. A Res. 792/2025 regulamenta as **Comissões de Ética de Enfermagem**. | [564/2017](https://www.cofen.gov.br/resolucao-cofen-no-5642017/) |
| **Dimensionamento** | **Res. 543/2017 REVOGADA pela Res. COFEN 743, de 12/03/2024.** O tema passou ao **Parecer Normativo COFEN nº 1/2024**, que mantém os parâmetros: 4/6/10/10/18 h de enfermagem por paciente (mínimo, intermediário, alta dependência, semi-intensivo, intensivo) e percentuais de enfermeiros de 33/36/42/52% para intermediário, alta dependência, semi e intensivo. | [Res. 743](https://www.cofen.gov.br/resolucao-cofen-no-743-de-12-de-marco-de-2024/) · [PN 01/2024 (PDF, baixado)](https://www.cofen.gov.br/wp-content/uploads/2024/10/Parecer-Normativo-Cofen-no-01-2024.pdf) |
| **Prescrição de medicamentos pelo enfermeiro** | **Res. COFEN 801, de 14/01/2026**: diretrizes de prescrição, com base no art. 11, II, "c" da Lei 7.498/86; trata também de assinatura eletrônica de receitas (Lei 14.063/2020). | [COFEN](https://www.cofen.gov.br/resolucao-cofen-no-801-de-14-de-janeiro-de-2026/) |
| **NANDA-I** | Edição vigente: **13ª, 2024–2026** (Herdman, Kamitsuru, Takáo Lopes; Thieme): 277 diagnósticos, 56 novos. Não achei anúncio da edição 2027–2029. Não verifiquei a edição brasileira da Artmed. | [Thieme](https://lp.thieme.de/textbook/nanda.html) |
| **Rede Alyne** | **Portaria GM/MS 5.350, de 12/09/2024**, altera a PRC 3/2017. O art. 2º diz: "fica a Rede Cegonha transformada na Rede Alyne". O art. 4º revoga os dispositivos da Rede Cegonha no Anexo II da PRC 3. O financiamento está na Portaria 5.349/2024 (PRC 6). | [BVS MS](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2024/prt5350_13_09_2024.html) |
| **Calendário vacinal 2026** | **Instrução Normativa do Calendário Nacional de Vacinação 2026** (PNI; PDF gerado em 09/10/2026), com **21 vacinas**. Pontos-chave: **VSR recombinante na gestante**, dose única por gestação a partir de 28 semanas; **VPC20 substituindo VPC10**, com esquema de transição (1ª dose com VPC20 aos 2 meses, 2ª com VPC10 aos 4, reforço com VPC20 aos 12); **VIP em todas as doses** (2, 4, 6 meses; reforços aos 15 meses e 4 anos); **Men ACWY** no reforço; **HPV4 dose única** de 9 a 14 anos, com resgate de 15 a 19 anos; influenza trivalente; covid-19 (6 meses a <5 anos, gestantes, ≥ 60 anos); dengue. | [IN 2026 (PDF, baixado)](https://www.gov.br/saude/pt-br/vacinacao/publicacoes/instrucao-normativa-que-instrui-o-calendario-nacional-de-vacinacao-2026.pdf) · [calendário](https://www.gov.br/saude/pt-br/vacinacao/calendario) |
| **Notificação compulsória** | A lista nacional segue no Anexo 1 do Anexo V da PRC 4/2017. Última alteração: **Portaria GM/MS 11.211, de 13/05/2026** (DOU de 14/05/2026). Inclui **caxumba** e **febre do Oropouche**, remove a covid-19 como item isolado e muda nomenclaturas e periodicidades. Na PRC 5 (vigilância sentinela), inclui DI por *H. influenzae* e exclui SRAG. Antes dela: Port. 10.175/2026 (anomalias congênitas, notificação semanal) e Port. 6.734/2025 (esporotricose humana); essas duas só confirmei por fontes secundárias. | [Port. 11.211 (cópia do DOU, baixada)](https://prefeitura.sp.gov.br/documents/d/saude/portaria-gm_ms-n-11-211-de-13-de-maio-de-2026-portaria-gm_ms-n-11-211-de-13-de-maio-de-2026-dou-imprensa-nacional-pdf) · [10.175 (PBH)](https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/saude/2026/27-10-26-smsa-portaria-gm_ms-10175.pdf) |
| **PNAB** | Vigente: **Portaria 2.436/2017** (consolidada na PRC 2). Uma **revisão está em curso**: o MS prevê publicar a nova PNAB até o fim de 2026 ([CFF, 27/07/2026](https://site.cff.org.br/noticia/Noticias-gerais/27/07/2026/revisao-da-politica-nacional-de-atencao-basica-deve-fortalecer-atuacao-do-farmaceutico-no-sus); [CNS](https://www.gov.br/conselho-nacional-de-saude/pt-br/assuntos/noticias/eleicoes-2026/seminario-debate-politica-nacional-de-atencao-basica-a-saude)). Normas que já mudaram a APS: **Port. GM/MS 635/2023** (eMulti, que substitui o NASF) e **Port. GM/MS 3.493/2024** (novo cofinanciamento do Piso da APS). | [2.436](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html) · [635](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2023/prt0635_22_05_2023.html) · [3.493](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2024/prt3493_11_04_2024.html) |
| **Lesão por pressão** | A classificação NPIAP de 2016 continua sendo a usada. A **International Guideline (EPUAP/NPIAP/PPPIA), 4ª edição**, foi lançada on-line e gratuita a partir de 27/02/2025 como *living guideline* (GRADE), com seções publicadas aos poucos. Não achei mudança de estadiamento. No Brasil, a **Res. COFEN 787/2025** regulamenta a atuação da enfermagem em lesões cutâneas. | [internationalguideline.com](https://internationalguideline.com/2025) · [NPIAP](https://npiap.com/page/InternationalGuidelines) · [Res. 787](https://www.cofen.gov.br/resolucao-cofen-no-787-de-21-de-agosto-de-2025/) |
| **PCR/RCP** | **Diretrizes AHA 2025** de RCP e ACE: cadeia de sobrevivência única para todas as idades e locais, fim do termo "rescue breaths", engasgo com 5 golpes nas costas alternados com 5 compressões abdominais, ênfase em naloxona. A data exata de publicação diverge entre fontes (out ou nov/2025). | [Highlights AHA 2025](https://cpr.heart.org/-/media/CPR-Files/2025-documents-for-cpr-heart-edits-posting/Resuscitation-Science/252500_Hghlghts_2025ECCGuidelines.pdf) |
| **Cuidados paliativos** | **Port. GM/MS 3.681, de 07/05/2024**: institui a Política Nacional de Cuidados Paliativos (altera a PRC 2). | [BVS](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2024/prt3681_22_05_2024.html) |

**Outras resoluções COFEN de 2023–2026 com impacto em prova** (todas no [portal COFEN](https://www.cofen.gov.br/)):
- 731/2023: sutura simples pelo enfermeiro.
- 734/2023: cuidado e educação em Diabetes.
- 735/2024: enfermeiro navegador e enfermeiro clínico especialista.
- 737/2024: parto domiciliar planejado; Anexo II alterado pela 786/2025.
- 739/2024: PICS.
- 741/2024: bancos de leite humano.
- 746/2024: **contenção mecânica**.
- 754/2024: prontuário eletrônico.
- 766/2024: atenção domiciliar.
- 776/2025: sobreaviso.
- 779/2025: revoga a 280/2003, que proibia o profissional de enfermagem de auxiliar procedimentos cirúrgicos.
- 782/2025: **nova ART**; revoga a 727/2023.
- 788/2025: concentrados sanguíneos autólogos.
- 795/2025: **atuação da enfermagem na vacinação**.
- 802/2026: atualiza o anexo do planejamento familiar (Res. 690/2022).
- 803/2026: atualiza a reabilitação (Res. 728/2023).
- 805/2026: enfermagem em instituições de ensino.
- 806/2026: enfermeiro perfusionista.
- 809/2026: Avaliação de Tecnologias em Saúde.
- 813/2026: podiatria clínica.

---

## Inventário dos PDFs baixados (`pdf/`)

Todos têm texto extraível, exceto o gabarito do HCPA (imagem). "Questões" foi conferido com script (numeração contínua 1..N e contagem das alternativas).

| Arquivo | Págs. | Questões | Observação |
|---|---|---|---|
| enare2026_enf_tipo1..4.pdf | 32/32/32/28 | 100 cada (20+80), A–E | 2026/27; 0 anuladas |
| enare2026_multi_gab_definitivo.pdf / _preliminar.pdf | 19 / 22 | — | todas as profissões e tipos |
| enare2026_edital04_multi.pdf / enare2026_anexoIII_conteudo.pdf | 61 / 20 | — | edital e conteúdo |
| enare2025_enf_tipo1..4.pdf | 24 cada | 100 cada, A–E | 2025/26; 1 anulada por tipo |
| enare2025_multi_gab_definitivo.pdf, enare2025_edital04_multi.pdf, enare2025_anexoIII_conteudo.pdf | 22 / 49 / 19 | — | |
| enare2024_enf_tipo1..2.pdf | 20 cada | 100 cada, A–E | 2024/25; 9 anuladas por tipo |
| enare2024_multi_gab_definitivo.pdf, enare2024_edital_multi_retificado.pdf, enare2024_anexoIII_conteudo.pdf | 15 / 33 / 14 | — | |
| ebserh2024_enfermeiro_grupo4_tipo1..4.pdf | 16 cada | 60 cada, A–E | FGV, 16/03/2025; 1 anulada por tipo |
| ebserh2024_assist_gab_definitivo.pdf, ebserh2024_edital3_assistencial.pdf | 23 / 121 | — | |
| ufpa2025_multi_prova_enf.pdf / ufpa2025_multi_gab_def_enf.pdf | 25 / 1 | 50 (15 SUS + 35), A–E | 2 nulas |
| hcpa2025_multi_prova.pdf / hcpa2025_multi_gabarito.pdf | 88 (Enf. nas págs. 1–10) / 3 | 40, A–D | **gabarito sem texto (OCR)** |
| unicamp2026_enf_programa_saude.pdf / _adulto_idoso.pdf / _saude_mental.pdf | 23 / 22 / 20 | 40 cada, A–D (+3 dissertativas) | |
| unicamp2026_multi_gabarito_13nov2025.pdf | 17 | — | versão com anulações |
| hcfmusp2026_multi_gabaritos.pdf | 5 | 30 (só gabarito) | caderno não encontrado |
| abenti2026_edital02_tenti.pdf, sobest2026_edital_tisobest_2026-2027.pdf, aben2026_edital_titulo_gerontologica.pdf | 24 / 4 / 16 | — | títulos |
| cofen_parecer_normativo_01-2024_dimensionamento.pdf, ms_instrucao_normativa_calendario_vacinacao_2026.pdf, portaria_gm_ms_11211_2026_lista_notificacao.pdf | 35 / 60 / 5 | — | normas |

**Total de questões reais de Enfermagem com gabarito oficial:**
- ENARE: 300 únicas (3 × 100, contando só o Tipo 1).
- EBSERH 2024: 60.
- UFPA: 50.
- HCPA: 40 (gabarito precisa de OCR).
- UNICAMP: 120 (3 × 40).
- Total ≈ **570** questões objetivas, antes de tirar as anuladas (9 + 1 + 0 no ENARE, 1 na EBSERH, 2 na UFPA, mais as anulações da UNICAMP no PDF de 13/11).
- HCFMUSP tem só o gabarito.

## O que não achei, sem rodeios
- Cadernos IBFC da EBSERH 2023: o site oficial está fora do ar ou bloqueado.
- Caderno do HCFMUSP 2026, caderno da SES-DF, provas da UNIFESP e da USP via FUVEST.
- Formato atual (número de questões) da prova SOBECC; editais ABENFO e SOBEN; título de urgência e emergência.
- Texto oficial das Portarias 6.734/2025 e 10.175/2026: só vi em fontes secundárias ou em cópia de prefeitura.
- Edição brasileira da NANDA-I 2024–2026 e anúncio da 2027–2029.
- Data exata de publicação das diretrizes AHA 2025.
