/* Enfermare — taxonomia do conteúdo de Enfermagem.

   Fonte primária: Anexo III do ENARE multiprofissional (idêntico em 2024/25, 2025/26 e 2026/27):
   12 tópicos de conhecimentos comuns (SUS) e 40 de Enfermagem; e o Anexo VII do Edital nº 3 da
   EBSERH 2024 (FGV), Políticas Públicas de Saúde (26 itens) e Grupo 4 Enfermagem (42 itens). As
   provas de título (ABENTI, SOBECC, SOBEST, ABEn) não publicam caderno: entram pelas áreas de
   especialidade. Normas vigentes em out/2026 em docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md.

   `peso` = incidência esperada numa prova de 100 questões (soma 100). ids curtos, sem hífen
   (o valida_leituras.py casa a área com \w+). */

window.TAXONOMIA=[
{"id":"sus","nome":"SUS: legislação e políticas de saúde","matriz":"Conhecimentos comuns","peso":8,"sub":[
 "Constituição Federal e o direito à saúde","Lei 8.080/1990 e Decreto 7.508/2011","Lei 8.142/1990 e controle social",
 "Política Nacional de Atenção Básica","Redes de Atenção à Saúde","Política Nacional de Humanização",
 "Financiamento e gestão do SUS","Políticas de equidade e populações vulneráveis","Educação permanente em saúde"]},

{"id":"coletiva","nome":"Epidemiologia e vigilância em saúde","matriz":"Conhecimentos comuns","peso":6,"sub":[
 "Indicadores de saúde","Vigilância epidemiológica e notificação compulsória","Investigação de surtos",
 "Vigilância sanitária, ambiental e do trabalhador","Saúde do trabalhador","Sistemas de informação em saúde","Estudos epidemiológicos"]},

{"id":"transmissiveis","nome":"Doenças transmissíveis e IST","matriz":"Saúde coletiva","peso":6,"sub":[
 "Tuberculose","Hanseníase","HIV e aids","Sífilis e outras IST","Hepatites virais",
 "Arboviroses","Doenças imunopreveníveis e emergentes"]},

{"id":"imuniza","nome":"Imunização","matriz":"Saúde coletiva","peso":4,"sub":[
 "Calendário nacional de vacinação","Rede de frio e conservação","Técnica de aplicação",
 "Eventos supostamente atribuíveis à vacinação","Imunobiológicos especiais (CRIE)"]},

{"id":"etica","nome":"Ética, bioética e legislação profissional","matriz":"Exercício profissional","peso":6,"sub":[
 "Lei do exercício profissional e decreto regulamentador","Código de Ética dos Profissionais de Enfermagem",
 "Resoluções do COFEN","Responsabilidade civil, penal e ética","Bioética e direitos do paciente",
 "Registro e documentação de enfermagem"]},

{"id":"sae","nome":"Processo de Enfermagem e SAE","matriz":"Exercício profissional","peso":6,"sub":[
 "Etapas do Processo de Enfermagem","Diagnósticos de enfermagem (NANDA-I)","Resultados (NOC) e intervenções (NIC)",
 "CIPE","Teorias de enfermagem","Consulta de enfermagem"]},

{"id":"fundamentos","nome":"Fundamentos e semiologia","matriz":"Cuidado","peso":5,"sub":[
 "Sinais vitais e exame físico","Higiene, conforto e mobilização","Oxigenoterapia e vias aéreas",
 "Sondagens gástrica, enteral e vesical","Punção venosa e terapia infusional","Coleta de exames",
 "Eliminações e balanço hídrico","Cateteres, sondas e dispositivos"]},

{"id":"farmaco","nome":"Farmacologia e cálculo de medicações","matriz":"Cuidado","peso":6,"sub":[
 "Vias de administração","Cálculo de dose e diluição","Gotejamento e bomba de infusão",
 "Insulinas e anticoagulantes","Medicamentos de alta vigilância","Interações e reações adversas"]},

{"id":"seguranca","nome":"Segurança do paciente e controle de infecção","matriz":"Cuidado","peso":6,"sub":[
 "Metas internacionais e PNSP","Higiene das mãos","Precauções padrão e específicas",
 "Infecções relacionadas à assistência","Biossegurança e NR-32","Notificação de incidentes",
 "Prevenção de quedas e de lesão por pressão"]},

{"id":"feridas","nome":"Feridas, curativos e estomas","matriz":"Cuidado","peso":4,"sub":[
 "Fisiologia da cicatrização","Lesão por pressão","Coberturas e curativos","Pé diabético e úlceras vasculares",
 "Queimaduras","Estomias e cuidados"]},

{"id":"adulto","nome":"Saúde do adulto: clínica","matriz":"Cuidado","peso":7,"sub":[
 "Hipertensão e doenças cardiovasculares","Diabetes mellitus","Doenças respiratórias",
 "Doença renal e diálise","Doenças neurológicas","Oncologia e quimioterapia","Hemoterapia e transfusão",
 "Distúrbios hidroeletrolíticos","Saúde do homem"]},

{"id":"cirurgica","nome":"Centro cirúrgico, CME e perioperatório","matriz":"Cuidado","peso":5,"sub":[
 "Sistematização da assistência perioperatória","Cirurgia segura","Recuperação pós-anestésica",
 "Central de material e esterilização","Pré e pós-operatório na enfermaria","Anestesia e posicionamento"]},

{"id":"uti","nome":"Terapia intensiva","matriz":"Especialidades","peso":6,"sub":[
 "Ventilação mecânica","Monitorização hemodinâmica","Drogas vasoativas e sedação","Sepse e choque",
 "Prevenção de pneumonia e infecção de cateter","Paciente neurocrítico","Doação de órgãos e transplante","Cuidados de fim de vida"]},

{"id":"urgencia","nome":"Urgência e emergência","matriz":"Especialidades","peso":6,"sub":[
 "Parada cardiorrespiratória","Atendimento ao trauma","Classificação de risco","Atendimento pré-hospitalar",
 "Intoxicações e acidentes","Acidentes por animais peçonhentos","Emergências clínicas"]},

{"id":"mulher","nome":"Saúde da mulher e obstetrícia","matriz":"Ciclos de vida","peso":6,"sub":[
 "Pré-natal","Parto e nascimento","Puerpério e aleitamento","Emergências obstétricas",
 "Planejamento reprodutivo","Rastreamento do câncer de colo e de mama","Violência contra a mulher"]},

{"id":"crianca","nome":"Saúde da criança e do adolescente","matriz":"Ciclos de vida","peso":5,"sub":[
 "Crescimento e desenvolvimento","Recém-nascido e reanimação neonatal","Aleitamento e alimentação",
 "AIDPI e doenças prevalentes","Criança hospitalizada","Adolescente"]},

{"id":"mental","nome":"Saúde mental","matriz":"Ciclos de vida","peso":3,"sub":[
 "Rede de Atenção Psicossocial","Lei 10.216/2001 e reforma psiquiátrica","Transtornos mentais e psicofármacos",
 "Crise, suicídio e contenção","Álcool e outras drogas"]},

{"id":"idoso","nome":"Saúde do idoso","matriz":"Ciclos de vida","peso":2,"sub":[
 "Envelhecimento e avaliação multidimensional","Quedas e fragilidade","Demências e delirium",
 "Polifarmácia","Cuidados paliativos"]},

{"id":"gestao","nome":"Gestão, educação e pesquisa","matriz":"Gestão","peso":3,"sub":[
 "Dimensionamento de pessoal","Liderança e trabalho em equipe","Qualidade, acreditação e indicadores",
 "Educação em saúde","Auditoria, custos e recursos materiais","Pesquisa e prática baseada em evidências"]}
];

/* Cenário — onde o cuidado acontece muda a conduta certa. */
window.CENARIOS=[
 {"id":"aps","nome":"Atenção primária"},
 {"id":"enf","nome":"Enfermaria"},
 {"id":"emg","nome":"Urgência e pré-hospitalar"},
 {"id":"cc","nome":"Centro cirúrgico e CME"},
 {"id":"uti","nome":"UTI"},
 {"id":"ger","nome":"Gestão e vigilância"}
];

/* Competência — o que a questão cobra de você. */
window.COMPETENCIAS=[
 {"id":"aval","nome":"Avaliação e diagnóstico de enfermagem"},
 {"id":"cuid","nome":"Intervenção e cuidado"},
 {"id":"tec","nome":"Procedimento e técnica"},
 {"id":"calc","nome":"Medicação e cálculo"},
 {"id":"norma","nome":"Legislação, ética e normas"}
];

/* Nível de profundidade. Os `id` seguem os do ClínicaMed (o código do app os referencia). */
window.NIVEIS=[
 {"id":"r1","nome":"Essencial","desc":"O que o enfermeiro não pode errar no plantão e na unidade básica."},
 {"id":"r2","nome":"Intermediário","desc":"Conduta e raciocínio de nível de concurso e residência."},
 {"id":"r3","nome":"Avançado","desc":"Nuance de norma e de diretriz; profundidade de especialista."},
 {"id":"tit","nome":"Nível prova de título","desc":"Caso completo de especialidade, no formato das provas de título."}
];
