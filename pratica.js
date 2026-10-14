/* Casos de Processo de Enfermagem (Res. COFEN 736/2024), em etapas, com espelho C/H/A de 5,0. GERADO por
   monta_extras.py a partir de docs/casos_*.json: não editar à mão. Brief: docs/BRIEF_CASOS.md. */
window.PRATICA=[
 {
  "id": "caso-avc-disfagia-sne",
  "titulo": "AVC isquêmico com disfagia e sonda nasoenteral na enfermaria",
  "area": "adulto",
  "cenario": "enf",
  "tempo": 20,
  "abertura": "Enfermaria de clínica médica, segundo dia de internação. Sr. A., 78 anos, AVC isquêmico no território da artéria cerebral média esquerda, sem trombólise porque chegou fora da janela. Hemiparesia direita e afasia de expressão. No teste da fonoaudióloga, tossiu e ficou com voz molhada ao tomar água, e a dieta oral foi suspensa. Prescrição médica: dieta enteral por sonda nasoenteral, a passar hoje. PA 158/88 mmHg, FC 84 bpm regular, temperatura 36,8 °C, SpO2 95% em ar ambiente, glicemia capilar 182 mg/dL. Usa fralda. Você é o enfermeiro do plantão. Faça a avaliação e diga o que prioriza.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Faça a avaliação de enfermagem dirigida: o que examina e pergunta, que escalas aplica e que dados ainda faltam antes de passar a sonda.",
    "entrega": "Acordado, obedece a ordens simples, não forma frases. Sem prótese dentária. Narinas pérvias, sem história de trauma de face ou cirurgia nasal. Plaquetas e coagulograma normais. Abdome flácido, ruídos presentes. Braden 13. Pele íntegra, com área avermelhada que embranquece à pressão na região sacral. A filha, presente e aflita, quer dar suco 'para ele não passar fome'."
   },
   {
    "n": 2,
    "tarefa": "Formule os diagnósticos de enfermagem prioritários com o raciocínio. Diga quem passa a sonda, como, e o que precisa acontecer antes da primeira dieta.",
    "entrega": "Você passou a sonda às cegas, na primeira tentativa, sem tosse persistente nem queda de saturação, e fixou no nariz. A radiografia mostra a ponta da sonda abaixo do diafragma, no estômago, sem trajeto pela via aérea. O médico libera a dieta em bomba de infusão contínua."
   },
   {
    "n": 3,
    "tarefa": "Escreva a prescrição de enfermagem para as próximas 24 horas: dieta, sonda, medicação pela sonda, pele, mobilidade, comunicação e família. Diga o que delega ao técnico.",
    "entrega": "Na madrugada, o técnico avisa que o paciente tossiu muito durante o banho no leito, feito com a cabeceira abaixada e a dieta correndo, e que a marca da sonda na narina está 6 cm mais para fora do que o registrado. SpO2 92%, FR 24 irpm, roncos na base direita."
   },
   {
    "n": 4,
    "tarefa": "Diga o que faz agora, o que comunica e como registra.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Faz a avaliação dirigida antes do procedimento: nível de consciência e capacidade de seguir ordens, deglutição e tosse, narinas, risco de sangramento, abdome e pele",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Prioriza Deglutição prejudicada e Risco de aspiração (NANDA-I, 2024-2026), ligando a tosse e a voz molhada no teste à suspensão da via oral",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Identifica também Comunicação verbal prejudicada e Risco de lesão por pressão no adulto (NANDA-I, 2024-2026), lendo a hiperemia que embranquece como alerta, e não como lesão",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Passa a sonda pessoalmente, porque a inserção de sonda nasoenteral é privativa do enfermeiro, e solicita a radiografia de confirmação (Res. COFEN 619/2019)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Não inicia dieta nem medicação pela sonda antes da confirmação radiológica e não usa a ausculta com insuflação de ar como prova de posição",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Mantém a cabeceira elevada a 30 a 45 graus durante a dieta e pausa a bomba antes de qualquer cuidado que exija abaixar a cabeceira (ANVISA, Medidas de Prevenção de IRAS, 2017)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Marca e registra o comprimento externo da sonda, confere a marca a cada turno, lava a sonda com água antes e depois de cada medicação e não mistura medicamento com a dieta",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Diante da tosse com sonda deslocada: para a dieta, eleva a cabeceira, aspira se preciso, avalia a respiração, não empurra de volta a sonda e pede avaliação médica e nova radiografia",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Orienta a filha a não oferecer nada pela boca até nova avaliação da fonoaudiologia e explica o motivo em linguagem simples",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Delega ao técnico a higiene, a mudança de decúbito e a vigilância da bomba, com instrução do que comunicar, e mantém para si a avaliação, o diagnóstico e a prescrição de enfermagem (Lei 7.498/1986; Res. COFEN 736/2024)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Registra a passagem (calibre, narina, marca, tentativas, intercorrências), o deslocamento e a suspeita de broncoaspiração, e notifica o incidente ao núcleo de segurança do paciente",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "caso-sepse-vm-noradrenalina",
  "titulo": "Choque séptico em ventilação mecânica com noradrenalina",
  "area": "uti",
  "cenario": "uti",
  "tempo": 25,
  "abertura": "Estação de UTI adulto, no formato da prova prática do título da ABENTI: caso simulado, tarefas com tempo marcado e foco na decisão do enfermeiro. Admissão. Sra. M., 64 anos, 70 kg, pneumonia comunitária grave, intubada no pronto-socorro há 2 horas. Em ventilação mecânica, sedada com fentanil e midazolam em bomba. A noradrenalina foi iniciada em veia periférica do antebraço. Chega com PA 84/46 mmHg (PAM 59), FC 118 bpm, temperatura 38,6 °C, SpO2 91% com FiO2 de 60%, lactato de 4,1 mmol/L no pronto-socorro e diurese de 20 mL na última hora pela sonda vesical. Não há registro de coleta de hemoculturas, e o antibiótico prescrito ainda não foi feito. Responda cada tarefa no tempo.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga suas ações nos primeiros 15 minutos da admissão, em ordem de prioridade, e o que pede ou comunica ao médico plantonista.",
    "entrega": "Hemoculturas colhidas em dois sítios e antibiótico iniciado. Cateter venoso central em jugular interna direita, com posição confirmada. O médico prescreve meta de PAM de 65 mmHg ou mais e passa a noradrenalina para o cateter central: solução com 16 mg em 250 mL, bomba a 15 mL/h. RASS de menos 5. Cabeceira a 15 graus. Pressão do cuff medida em 16 cmH2O; o protocolo da unidade pede 25 a 30 cmH2O."
   },
   {
    "n": 2,
    "tarefa": "Calcule a dose de noradrenalina em mcg/kg/min e diga os cuidados com a infusão e com a passagem do acesso periférico para o central.",
    "entrega": "Dose conferida pela farmacêutica. Seis horas depois: PAM 68 mmHg com a mesma vazão, lactato de 2,3 mmol/L, diurese de 45 mL/h, SpO2 95% com FiO2 de 40%. Secreção traqueal espessa e amarelada. RASS de menos 5; a equipe médica discute o despertar."
   },
   {
    "n": 3,
    "tarefa": "Formule os diagnósticos de enfermagem e a prescrição de enfermagem para prevenir pneumonia associada à ventilação, lesão por pressão e infecção do cateter.",
    "entrega": "No dia seguinte, na janela de despertar, a paciente abre os olhos ao chamado, segue ordens simples e leva a mão direita ao tubo. A filha pergunta se a mãe vai ficar amarrada."
   },
   {
    "n": 4,
    "tarefa": "Conduza a situação: segurança do tubo, avaliação de sedação e delirium, decisão sobre contenção e conversa com a filha.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Reconhece choque séptico (hipotensão com vasopressor e lactato elevado) e garante as hemoculturas antes do antibiótico sem atrasá-lo, comunicando ao médico o atraso encontrado",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Monitoriza a pressão de forma contínua (sugere ao médico a pressão arterial invasiva), mede a diurese a cada hora e repete o lactato conforme a prescrição",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Com noradrenalina em veia periférica: inspeciona o sítio com frequência à procura de extravasamento e cobra o acesso central, sem interromper a infusão na troca",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Calcula a dose: 16 mg em 250 mL dão 64 mcg/mL; 15 mL/h equivalem a 960 mcg/h, 16 mcg/min e cerca de 0,23 mcg/kg/min para 70 kg",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Infunde em bomba, em via exclusiva do cateter central, sem bolus nem lavagem da via, troca a seringa ou a bolsa sem pausa, rotula e faz dupla checagem; titula só dentro da meta e da faixa prescritas",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Formula Troca de gases prejudicada, Desobstrução ineficaz de vias aéreas e Risco de infecção (NANDA-I, 2024-2026), e trata a instabilidade hemodinâmica como problema colaborativo, vigiado com o médico",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Prescreve a prevenção de pneumonia associada à ventilação: cabeceira de 30 a 45 graus, cuff na faixa do protocolo, higiene oral, aspiração só quando indicada e sem instilar soro, condensado drenado para longe do paciente e participação no despertar diário (ANVISA, Medidas de Prevenção de IRAS, 2017)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Previne lesão por pressão (Braden na admissão, superfície de redistribuição, reposicionamento programado) e cuida do cateter central com curativo íntegro e fricção do conector com antisséptico antes de cada acesso",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Avalia a sedação pela RASS e o delirium pelo CAM-ICU na janela de despertar e leva o resultado ao médico para ajuste da analgesia e da sedação",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Trata a contenção mecânica como último recurso, depois de fixação segura do tubo, orientação e presença da equipe; se usada, segue a Res. COFEN 746/2024 e o protocolo, com registro do motivo, do tipo, do tempo e das reavaliações",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Explica à filha o motivo e o caráter temporário de qualquer contenção e a convida a ajudar na orientação da mãe",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "caso-lesao-pressao",
  "titulo": "Lesão por pressão sacral e em calcâneo no paciente acamado",
  "area": "feridas",
  "cenario": "enf",
  "tempo": 20,
  "abertura": "Enfermaria de clínica médica. Sra. J., 86 anos, demência avançada, acamada há 3 meses, internada há 5 dias por pneumonia aspirativa. Come por via oral com ajuda e aceita metade das refeições. Incontinência urinária e fecal, usa fralda. Na transferência do pronto-socorro, ninguém registrou o estado da pele. Hoje, no banho, o técnico chama você por causa de 'duas feridas'. Avalie e planeje o cuidado.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como examina as lesões e a paciente e o que precisa saber para classificar e planejar.",
    "entrega": "Região sacral: lesão de 4 cm por 3 cm, perda de pele em espessura total, com tecido de granulação e esfacelo amarelo em parte do leito, sem osso, tendão ou músculo visíveis, bordas regulares, exsudato seroso moderado, sem odor, pele ao redor macerada. Calcâneo direito: área de 3 cm por 3 cm de pele intacta, vermelho-escura, que não embranquece, fria, com flictena de conteúdo sanguinolento. Braden 10. Geme e franze a testa quando é virada. Albumina 2,6 g/dL."
   },
   {
    "n": 2,
    "tarefa": "Classifique as duas lesões, justifique e formule os diagnósticos de enfermagem.",
    "entrega": "A coordenação pede o plano de cuidados da paciente e a decisão sobre o curativo de cada lesão."
   },
   {
    "n": 3,
    "tarefa": "Prescreva os cuidados: redistribuição de pressão, pele, umidade, nutrição, dor e curativo de cada lesão. Diga o que cabe a quem.",
    "entrega": "Uma semana depois, a lesão sacral tem mais granulação e menos esfacelo. No calcâneo, a flictena rompeu e deixou uma escara seca, aderida, sem flutuação, eritema ou secreção. Um colega sugere desbridar a escara do calcâneo."
   },
   {
    "n": 4,
    "tarefa": "Decida sobre a escara do calcâneo e diga como classifica agora, o que registra e o que notifica.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Examina toda a pele, mede as lesões e descreve leito, bordas, exsudato, odor, pele ao redor e dor, e aplica a escala de Braden",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Classifica a lesão sacral como lesão por pressão estágio 3: perda de pele em espessura total, com esfacelo que não oculta a profundidade e sem osso, tendão ou músculo expostos (NPIAP, 2016)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Classifica o calcâneo como lesão por pressão tissular profunda: pele intacta vermelho-escura que não embranquece, com flictena sanguinolenta (NPIAP, 2016)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Formula Lesão por pressão no adulto e Dor aguda (NANDA-I, 2024-2026), relacionando a lesão à imobilidade, à umidade e ao estado nutricional",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Instala superfície de redistribuição de pressão, reposiciona em horários prescritos e deixa os calcanhares flutuantes, com apoio ao longo da panturrilha e nunca no calcanhar",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Maneja a umidade: limpeza suave após cada eliminação, produto de barreira, troca precoce da fralda e proteção da pele macerada ao redor da lesão sacral",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Na lesão sacral: limpeza com soro fisiológico, cobertura que controla o exsudato e mantém o leito úmido, e desbridamento do esfacelo por método autolítico ou instrumental conservador, dentro da competência e do protocolo (Res. COFEN 787/2025)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Mantém intacta a escara seca, estável e aderida do calcâneo, sem desbridar nem amolecer, e a reavalia todo dia à procura de flutuação, eritema ou secreção (NPIAP, 2016)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Reclassifica o calcâneo como lesão por pressão não classificável quando a escara passa a ocultar a profundidade (NPIAP, 2016)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Pede avaliação da nutricionista e leva ao médico a dor e o risco nutricional, para analgesia antes dos curativos e suporte nutricional",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Delega ao técnico o reposicionamento, a higiene e a proteção dos calcanhares com o plano escrito, e mantém com o enfermeiro a avaliação, a classificação e a escolha da cobertura (Res. COFEN 736/2024)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Registra classificação, medidas e evolução conforme o protocolo e notifica as lesões ao núcleo de segurança do paciente como incidente relacionado à assistência (RDC ANVISA 36/2013)",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "caso-prenatal-hipertensao",
  "titulo": "Pressão alta na consulta de pré-natal de 30 semanas",
  "area": "mulher",
  "cenario": "aps",
  "tempo": 20,
  "abertura": "Unidade básica de saúde, consulta de pré-natal de enfermagem. Sra. L., 24 anos, primigesta, 30 semanas pela ultrassonografia de 11 semanas, pré-natal de risco habitual até aqui, seis consultas. Na triagem, o técnico registrou PA de 150/100 mmHg. Ela diz que está bem, só com 'os pés inchados'. Ganhou 2,5 kg em 2 semanas. Conduza a consulta.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como confirma a medida da pressão e o que pergunta e examina nesta consulta.",
    "entrega": "Nova aferição, sentada, após repouso, com manguito adequado ao braço: 148/98 mmHg. Nega cefaleia, alteração visual e dor epigástrica. Movimentos fetais presentes, batimentos cardíacos fetais de 142 bpm, altura uterina de 29 cm. Edema de pernas e mãos. Fita urinária com proteína 2+. Na caderneta, não há registro de dTpa nem da vacina contra o vírus sincicial respiratório."
   },
   {
    "n": 2,
    "tarefa": "Diga o que esses dados significam, formule os diagnósticos de enfermagem e decida o que acontece com o pré-natal dela hoje.",
    "entrega": "Enquanto você discute o caso com o médico da equipe, a gestante refere cefaleia que começou agora e 'pontos brilhantes' na visão. PA de 164/112 mmHg."
   },
   {
    "n": 3,
    "tarefa": "Diga o que faz agora, quem aciona e como ela é transferida.",
    "entrega": "Ela foi transferida para a maternidade de referência e internada. Dez dias depois, volta à unidade após o parto, com a filha, para a consulta puerperal."
   },
   {
    "n": 4,
    "tarefa": "Diga os pontos da consulta puerperal e do seguimento dessa mulher na atenção primária.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Repete a aferição com técnica correta (repouso, posição sentada, manguito adequado, braço na altura do coração) antes de concluir",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Reconhece hipertensão depois da 20ª semana com proteinúria como suspeita de pré-eclâmpsia, que tira a gestante do risco habitual (MS, Manual de Gestação de Alto Risco, 2022)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Pergunta e examina sinais de gravidade: cefaleia, alteração visual, dor epigástrica ou no hipocôndrio direito, náuseas e vômitos, redução dos movimentos fetais e sangramento",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Formula Risco de binômio mãe-feto perturbado e Ansiedade (NANDA-I, 2024-2026), explicando o raciocínio",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Discute no mesmo dia com o médico da equipe e encaminha para avaliação na maternidade ou no pré-natal de alto risco conforme a regulação local, sem marcar retorno de rotina, e mantém o acompanhamento compartilhado pela unidade (Rede Alyne, Port. GM/MS 5.350/2024)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Ainda antes da piora, confere a caderneta e aplica ou garante a dTpa (a partir da 20ª semana, uma dose por gestação) e a vacina contra o VSR (a partir da 28ª semana, dose única por gestação) (MS, Instrução Normativa do Calendário Nacional de Vacinação, 2026)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Reconhece PA de 160/110 mmHg ou mais com cefaleia e escotomas como pré-eclâmpsia com sinais de gravidade e risco de eclâmpsia (MS, Manual de Gestação de Alto Risco, 2022)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Na urgência: decúbito lateral esquerdo, ambiente calmo, acesso venoso, PA e batimentos fetais seriados, médico ao lado e transporte de urgência acionado, com a maternidade avisada",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Sabe que sulfato de magnésio e anti-hipertensivo são prescrição médica; a enfermagem prepara e administra conforme a prescrição e vigia reflexos, frequência respiratória e diurese",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "No puerpério: mede a PA, orienta sinais de alarme, faz planejamento reprodutivo, apoia o aleitamento e registra a pré-eclâmpsia como risco cardiovascular futuro",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Registra no prontuário e na caderneta a PA, a proteinúria, a conduta e o destino, e explica à gestante e ao acompanhante o que está acontecendo",
    "peso": 0.5
   }
  ]
 },
 {
  "id": "caso-lactente-diarreia",
  "titulo": "Lactente com diarreia e desidratação na unidade básica",
  "area": "crianca",
  "cenario": "aps",
  "tempo": 20,
  "abertura": "Unidade básica de saúde, demanda espontânea. Lactente de 9 meses, 8,2 kg no último registro da caderneta, há 3 semanas, trazido pela mãe por diarreia líquida há 2 dias, de 6 a 8 evacuações por dia, sem sangue, e dois vômitos hoje. Mama no peito e come papa. A mãe diz que ele está 'mais choroso' e que molhou pouca fralda desde a manhã. Você faz o acolhimento e a consulta de enfermagem.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como avalia o estado de hidratação e o que mais pergunta e examina.",
    "entrega": "Peso hoje 7,8 kg. Irritado, olhos fundos, chora sem lágrimas, bebe água com avidez, a prega cutânea desaparece lentamente, pulso rápido e fino. Temperatura 37,8 °C. Sem sangue nas fezes, sem sinais de desnutrição grave. Na caderneta, a vacina rotavírus não foi aplicada; as demais estão em dia."
   },
   {
    "n": 2,
    "tarefa": "Classifique, formule os diagnósticos de enfermagem e diga o plano de hidratação, com volume e tempo.",
    "entrega": "Plano iniciado com soro de reidratação oral em copo e colher. Duas horas depois, vomitou duas vezes, segue irritado, com olhos fundos e sem diurese."
   },
   {
    "n": 3,
    "tarefa": "Reavalie e diga o que faz agora e quem aciona.",
    "entrega": "Com a reidratação por sonda nasogástrica, no fim do período a criança está alerta, com lágrimas, a prega desaparece rápido e ela urinou. Peso 8,1 kg. A mãe pergunta o que fazer em casa e se ele ainda pode tomar a vacina."
   },
   {
    "n": 4,
    "tarefa": "Faça as orientações de alta e o plano de seguimento, incluindo a vacina.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Avalia a hidratação pelos sinais do quadro do Ministério da Saúde (estado geral, olhos, lágrimas, sede, prega, pulso) e pesa a criança, comparando com o peso anterior (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Classifica como com desidratação (dois ou mais sinais, nenhum de gravidade) e indica o Plano B, feito na unidade (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Investiga sinais de perigo e de outras causas: sangue nas fezes, diarreia por mais de 14 dias, desnutrição grave e febre (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Formula Volume de líquidos inadequado, Diarreia e Risco de desequilíbrio eletrolítico (NANDA-I, 2024-2026)",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Calcula o soro de reidratação oral do Plano B: 50 a 100 mL/kg em 4 a 6 horas, de 390 a 780 mL para 7,8 kg, em pequenos volumes com copo ou colher, sem suspender o peito (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Reavalia durante o plano; se continua desidratado, indica a reidratação por sonda nasogástrica (gastróclise), e se surgir sinal de desidratação grave aciona o médico para o Plano C venoso (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Reconhece o limite: hidratação venosa e antibiótico são prescrição médica; o zinco é prescrito pelo médico ou pelo enfermeiro dentro de protocolo do programa de saúde (Lei 7.498/1986, art. 11; Res. COFEN 801/2026)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Orienta o Plano A em casa: de 50 a 100 mL de líquido ou soro após cada evacuação para menores de 1 ano, aleitamento e alimentação mantidos e zinco 20 mg uma vez ao dia por 10 a 14 dias para maiores de 6 meses (MS, cartaz Manejo do paciente com diarreia, versão de 2013)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Ensina os sinais de perigo para voltar na hora (piora da diarreia, vômitos repetidos, muita sede, recusa alimentar, sangue nas fezes, pouca urina) e marca reavaliação",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Adia a vacina rotavírus até a resolução do quadro e agenda a 1ª dose até 11 meses e 29 dias de idade, com a 2ª dose 60 dias depois e até 23 meses e 29 dias (MS, Instrução Normativa do Calendário Nacional de Vacinação, 2026)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Registra peso, classificação, plano, volumes, reavaliações e orientações no prontuário e na caderneta",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-rpa-pos-operatorio",
  "titulo": "Pós-operatório imediato na recuperação pós-anestésica",
  "area": "cirurgica",
  "cenario": "cc",
  "tempo": 15,
  "abertura": "Sala de recuperação pós-anestésica. Sr. R., 58 anos, 92 kg, colecistectomia videolaparoscópica sob anestesia geral, com 1 hora e 40 minutos de cirurgia. Hipertenso, com apneia obstrutiva do sono. Chega da sala com máscara de oxigênio, sonolento, despertando ao chamado. O anestesista passa o caso e volta para a sala 3. Você recebe o paciente.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como recebe o paciente: o que confere na passagem do caso, o que monitoriza e como faz a primeira avaliação.",
    "entrega": "SpO2 90% com máscara a 5 L/min, FR 10 irpm, roncos na inspiração, desperta ao chamado e volta a dormir. PA 168/96 mmHg, FC 96 bpm. Temperatura 35,4 °C, com tremores. Ao despertar, refere dor 8 em 10 no ombro direito e no abdome. Curativos secos. Recebeu opioide no intraoperatório."
   },
   {
    "n": 2,
    "tarefa": "Priorize os problemas, diga o que faz em sequência e o que comunica ao anestesista.",
    "entrega": "Com elevação da mandíbula, cabeceira elevada e estímulo, os roncos param e a SpO2 sobe para 96%. O anestesista avalia e prescreve analgésico e antiemético. Depois do aquecimento ativo, a temperatura é de 36,2 °C. Uma hora depois, o paciente está acordado, orientado, move os quatro membros, PA 138/84 mmHg, SpO2 95% com cateter nasal, sem náusea, dor 3 em 10."
   },
   {
    "n": 3,
    "tarefa": "Diga como avalia a condição de alta da recuperação, quem decide e o que precisa constar na passagem para a enfermaria.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "A",
    "item": "Recebe a passagem estruturada do anestesista e do circulante: cirurgia, anestesia, fármacos e opioides, intercorrências, perdas, comorbidades como a apneia do sono, alergias e prescrição",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Instala oximetria, cardioscopia, pressão arterial e temperatura e avalia via aérea, respiração, circulação, consciência, dor e curativos na chegada",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Prioriza a via aérea: reconhece hipoventilação e obstrução por efeito residual de anestésico e opioide em paciente com apneia do sono e formula Padrão respiratório ineficaz (NANDA-I, 2024-2026)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Desobstrui com elevação da mandíbula, eleva a cabeceira, estimula, mantém oxigênio e chama o anestesista, deixando à mão material de via aérea e o antagonista para uso conforme prescrição",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Identifica Hipotermia e Dor aguda (NANDA-I, 2024-2026), ligando os tremores ao aumento do consumo de oxigênio e a dor no ombro ao gás do pneumoperitônio",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Aquece ativamente com manta de ar forçado aquecido e reavalia a temperatura até a normalização",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Mede a dor com escala numérica, administra a analgesia prescrita e reavalia a dor e o nível de sedação depois do opioide",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Aplica de forma seriada o índice de Aldrete e Kroulik modificado (atividade, respiração, circulação, consciência e saturação, de 0 a 2 cada) e registra os escores (Parecer CRM-PR 2.806/2020)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Sabe que a alta da recuperação é decisão do médico anestesista; o enfermeiro aplica a escala e comunica o resultado (Res. CFM 2.174/2017)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Passa o paciente à enfermaria com a cirurgia, as intercorrências na recuperação, a analgesia e seus horários, o risco de depressão respiratória por apneia do sono e opioide e o que vigiar",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Registra na ficha da recuperação horários, sinais vitais, escores, intervenções e respostas",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-caps-suicidio",
  "titulo": "Crise com ideação suicida no acolhimento do CAPS",
  "area": "mental",
  "cenario": "aps",
  "tempo": 20,
  "abertura": "CAPS II, acolhimento de porta aberta. Sr. P., 34 anos, chega sozinho, encaminhado pela unidade básica depois de uma consulta por 'nervoso'. Diz que perdeu o emprego há 2 meses, que a esposa saiu de casa com os filhos na semana passada e que 'não vê mais sentido'. Bebe todos os dias desde então. Está choroso, colaborativo, sem sinais de intoxicação agora. Você faz o acolhimento.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como conduz a conversa: o que pergunta sobre o risco de suicídio, como pergunta e o que observa.",
    "entrega": "Ele conta que pensa em morrer todos os dias e que anteontem à noite amarrou uma corda no quintal e tentou se enforcar; a corda soltou. Há uma escoriação no pescoço, e ele não procurou atendimento. Tem plano de 'terminar no fim de semana'. Há 5 anos tomou comprimidos e foi atendido no pronto-socorro. Agora mora sozinho. O irmão é a pessoa em quem confia. Aceita ficar no serviço e diz que não quer ser internado 'à força'."
   },
   {
    "n": 2,
    "tarefa": "Avalie o risco, formule os diagnósticos de enfermagem e decida, com a equipe, o projeto imediato de cuidado.",
    "entrega": "A equipe decide pelo acolhimento no leito do CAPS III de referência, com retorno ao CAPS II no seguimento. Antes da transferência, ele pede para ir sozinho ao banheiro e fica agitado quando um vigilante comenta que 'isso é falta de Deus'."
   },
   {
    "n": 3,
    "tarefa": "Diga o que faz em relação à segurança no serviço, à comunicação, ao irmão, ao registro e à notificação.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Acolhe em local reservado, com escuta sem julgamento, e pergunta de forma direta sobre ideação, plano, meios, tentativas e fatores de proteção, sabendo que perguntar não induz o comportamento",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Classifica o risco como alto: tentativa recente por método de alta letalidade, plano com data, acesso ao meio, tentativa anterior, perdas recentes, uso de álcool e isolamento",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Formula Risco de comportamento suicida e Desesperança (NANDA-I, 2024-2026), com o uso de álcool como fator associado",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Pede avaliação médica da escoriação cervical e dos sinais de lesão por enforcamento no mesmo atendimento",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Não deixa o usuário sozinho, nem no banheiro, retira objetos com potencial de lesão e organiza observação contínua até a transferência, usando desescalada verbal na agitação",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Constrói com ele um plano de segurança: sinais de alerta, estratégias próprias, pessoas e serviços a acionar (CAPS, SAMU, CVV) e retirada da corda e de outros meios, com a ajuda do irmão",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Prioriza o cuidado em liberdade, com acolhimento em leito de CAPS III dentro da Rede de Atenção Psicossocial, e sabe que internação involuntária é decisão médica comunicada ao Ministério Público (Lei 10.216/2001; Port. GM/MS 3.088/2011)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Notifica a tentativa de suicídio na ficha de violência interpessoal e autoprovocada, com notificação imediata, em até 24 horas, à secretaria municipal de saúde (Port. GM/MS 11.211/2026; Lei 13.819/2019)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Intervém junto ao vigilante sem expor o usuário, corrige a abordagem estigmatizante e preserva o sigilo das informações (Res. COFEN 564/2017)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Contata o irmão com o consentimento do usuário e o inclui no plano e no acompanhamento",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Reavalia o risco a cada contato e em cada transição de cuidado e registra a avaliação no prontuário e no projeto terapêutico singular",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-erro-potassio",
  "titulo": "Erro de medicação com cloreto de potássio na enfermaria",
  "area": "seguranca",
  "cenario": "enf",
  "tempo": 25,
  "abertura": "Enfermaria de clínica médica, plantão da tarde. Sra. C., 71 anos, doença renal crônica não dialítica, internada por diarreia com hipopotassemia (potássio de 2,9 mEq/L pela manhã). Prescrição médica: cloreto de potássio 19,1% 10 mL em soro fisiológico 0,9% 500 mL, em 8 horas, em bomba de infusão. Às 15h, o técnico avisa que a bolsa instalada às 14h acabou e que a paciente se queixa de fraqueza e de 'coração batendo estranho'. Na bancada, há duas ampolas vazias de KCl 19,1%. O rótulo da bolsa não diz o que foi adicionado. A bomba estava em uso em outro leito, e o soro correu por gravidade. Você é o enfermeiro responsável pelo setor.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga o que faz com a paciente agora, em ordem, e quem chama.",
    "entrega": "FC 52 bpm irregular, PA 104/60 mmHg, consciente. O eletrocardiograma à beira do leito mostra ondas T apiculadas e QRS alargado. O médico prescreve gluconato de cálcio, insulina regular com glicose e nova dosagem de potássio, que vem em 6,8 mEq/L. A paciente é transferida estável para a UTI."
   },
   {
    "n": 2,
    "tarefa": "O técnico, chorando, conta que usou duas ampolas porque 'a outra bolsa tinha sido assim' e pede que você não conte a ninguém. Diga como conduz a conversa com ele, com a paciente e a família e com a chefia.",
    "entrega": "A filha da paciente chega e pergunta por que a mãe foi para a UTI."
   },
   {
    "n": 3,
    "tarefa": "Diga como notifica e o que deve constar no registro do prontuário.",
    "entrega": "O núcleo de segurança do paciente abre a análise do incidente e convida você para o grupo."
   },
   {
    "n": 4,
    "tarefa": "Descreva como analisar o incidente e que barreiras propor para que ele não se repita.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Interrompe a infusão na hora, mantém o acesso venoso, chama o médico, instala monitorização cardíaca e faz sinais vitais e eletrocardiograma",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Reconhece hiperpotassemia por erro de dose e de velocidade (20 mL em 1 hora, por gravidade, em vez de 10 mL em 8 horas, em bomba) em paciente com doença renal crônica e liga a bradicardia e o eletrocardiograma ao erro",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Formula Risco de débito cardíaco diminuído e Risco de desequilíbrio eletrolítico (NANDA-I, 2024-2026) e trata a hiperpotassemia como problema colaborativo",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Administra os medicamentos de urgência prescritos com dupla checagem e guarda a bolsa, o equipo e as ampolas para a análise",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Não aceita esconder o erro: acolhe o técnico sem culpar, explica que relatar protege o paciente e o profissional e comunica a chefia (Res. COFEN 564/2017)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Participa, com o médico, da comunicação aberta do incidente à paciente e à filha: o que aconteceu, o que foi feito e o que será feito, sem apontar culpados",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Notifica o incidente ao núcleo de segurança do paciente do hospital, que o notifica ao Sistema Nacional de Vigilância Sanitária pelo Notivisa (RDC ANVISA 36/2013)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Registra no prontuário, de forma objetiva, fatos, horários, sinais, condutas e comunicações, sem juízo de culpa e sem alterar registros anteriores",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Conduz a análise de causa raiz com abordagem sistêmica e não punitiva, buscando os fatores do processo (bomba indisponível, rótulo incompleto, preparo de memória, falta de dupla checagem), e não só o erro individual",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Propõe barreiras: tirar o KCl concentrado do estoque da unidade ou usar solução pronta, dupla checagem independente dos medicamentos de alta vigilância, bomba de infusão obrigatória, rótulo completo e capacitação da equipe (MS, Protocolo de segurança na prescrição, uso e administração de medicamentos, 2013)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Reconhece a responsabilidade do enfermeiro pela supervisão do técnico na administração de medicamentos e o direito do técnico a apoio e capacitação (Lei 7.498/1986)",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-cetoacidose-ps",
  "titulo": "Cetoacidose diabética no pronto-socorro",
  "area": "adulto",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Pronto-socorro de hospital geral, acolhimento com classificação de risco. Sr. R., 34 anos, 70 kg, diabetes tipo 1 há 15 anos, chega com a esposa. Há dois dias tem vômitos e diarreia e, como não conseguia comer, deixou de aplicar a insulina basal e a das refeições. Refere sede intensa, urina muito e tem dor abdominal difusa. Está sonolento, mas abre os olhos e responde ao chamado. Respiração profunda e rápida, hálito cetônico, mucosas secas. FR 32 irpm, FC 124 bpm, PA 92/58 mmHg, temperatura 37,2 °C, SpO2 97% em ar ambiente. Glicemia capilar de 486 mg/dL. Você é o enfermeiro da classificação e, em seguida, da sala de emergência.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Classifique o risco e diga o que faz nos primeiros 15 minutos, antes de haver prescrição, e o que comunica ao médico.",
    "entrega": "Paciente na sala de emergência. O médico prescreve soro fisiológico 0,9% 1.000 mL na primeira hora e pede exames. Resultados: pH venoso 7,12, bicarbonato 9 mmol/L, beta-hidroxibutirato 5,8 mmol/L, potássio 3,2 mmol/L, sódio 131 mmol/L, creatinina 1,6 mg/dL. Urinou 40 mL desde a chegada. O residente pede que você 'já instale a insulina' enquanto ele termina a prescrição."
   },
   {
    "n": 2,
    "tarefa": "Interprete os exames, diga o que responde ao residente sobre a insulina e formule os diagnósticos de enfermagem prioritários com o raciocínio.",
    "entrega": "O médico prescreve cloreto de potássio 19,1% 7,8 mL em 500 mL de soro fisiológico 0,9%, em 2 horas, em bomba. Depois da reposição, o potássio vem em 4,1 mmol/L. Nova prescrição: manter potássio no soro e insulina regular 100 unidades em 100 mL de soro fisiológico 0,9%, em bomba, a 0,1 unidade/kg/h, com glicemia capilar de hora em hora."
   },
   {
    "n": 3,
    "tarefa": "Confira a reposição de potássio que foi feita e calcule a vazão da insulina. Diga como prepara, confere e monitoriza a infusão e o que delega ao técnico.",
    "entrega": "Seis horas depois: glicemia capilar de 232 mg/dL, pH 7,24, bicarbonato 14 mmol/L, beta-hidroxibutirato 2,1 mmol/L, PA 118/72 mmHg, FC 96 bpm, mais desperto. O técnico avisa que vai desligar a bomba de insulina 'porque a glicemia já está quase normal'. A esposa pergunta como evitar que isso se repita."
   },
   {
    "n": 4,
    "tarefa": "Diga o que faz com a bomba e com o soro, o que precisa acontecer antes de desligar a insulina venosa e o que orienta ao paciente e à esposa para casa.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Classifica no mínimo como laranja (muito urgente) pela alteração aguda do nível de consciência e, com os sinais de choque, como vermelho, levando o paciente direto à sala de emergência; a classificação é privativa do enfermeiro (Sistema Manchester; Res. COFEN 661/2021)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Na sala de emergência, monitoriza, punciona acesso venoso calibroso, colhe os exames pedidos (gasometria venosa, eletrólitos, cetonemia, função renal), inicia o balanço hídrico com medida da diurese e comunica o médico de imediato",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Confirma cetoacidose pelos três critérios (diabetes conhecido ou glicemia de 200 mg/dL ou mais; beta-hidroxibutirato de 3,0 mmol/L ou mais; pH abaixo de 7,3 e/ou bicarbonato abaixo de 18 mmol/L) e reconhece o quadro grave (consenso ADA, EASD, JBDS, AACE e DTS, 2024)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Não instala insulina sem prescrição escrita e alerta que, com potássio de 3,2 mmol/L, a insulina fica adiada até a reposição, porque abaixo de 3,5 mmol/L ela empurra o potássio para dentro da célula e agrava a hipopotassemia (consenso de 2024)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Formula como prioritário Volume de líquidos inadequado relacionado à diurese osmótica, evidenciado por mucosas secas, hipotensão e taquicardia; explica que a respiração de Kussmaul é compensação da acidose e não sustenta diagnóstico respiratório (NANDA-I, 2024-2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Confere o potássio: 7,8 mL de KCl 19,1% (2,56 mEq/mL) dão 20 mEq em 500 mL, cerca de 40 mEq/L a 10 mEq/h, dentro dos limites de concentração em veia periférica e de velocidade, diluído, em bomba e nunca em bolus (bula Halex Istar; Protocolo 295 HC-UFMG, 2021)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Calcula a insulina: 100 unidades em 100 mL dão 1 unidade/mL; 0,1 unidade/kg/h para 70 kg são 7 unidades/h, ou 7 mL/h, em bomba e via exclusiva, com rótulo completo e dupla checagem independente por ser medicamento de alta vigilância (Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos, MS/ANVISA, 2013)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Monitoriza glicemia capilar a cada 1 a 2 horas, eletrólitos, cetona e pH venoso a cada 4 horas, nível de consciência e balanço hídrico, e comunica na hora piora do sensório, cefaleia ou bradicardia com hipertensão, sinais de edema cerebral (consenso de 2024)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Delega ao técnico, sob sua supervisão, a glicemia capilar, os sinais vitais e o controle de diurese com registro; mantém consigo o preparo, a programação da bomba e a decisão de comunicar, e não permite que a infusão seja desligada sem prescrição (Lei 7.498/1986, art. 15)",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Com glicemia abaixo de 250 mg/dL e acidose ainda presente, não desliga a bomba: pede ao médico glicose a 5 ou 10% no soro e redução da vazão, e só aceita suspender a insulina venosa com a crise resolvida (cetonemia abaixo de 0,6 mmol/L com pH de 7,3 ou mais ou bicarbonato de 18 mmol/L ou mais), paciente comendo e 1 a 2 horas de sobreposição com a basal subcutânea (consenso de 2024)",
    "peso": 0.6
   },
   {
    "eixo": "A",
    "item": "Registra Comportamentos ineficazes de manutenção da saúde (NANDA-I, 2024-2026) e orienta paciente e esposa: no diabetes tipo 1 a insulina basal não se suspende por falta de apetite, e vômitos persistentes ou impossibilidade de comer pedem contato com a equipe ou o serviço de saúde (ADA, 2026)",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-prematuro-utin",
  "titulo": "Recém-nascido prematuro de 30 semanas na UTI neonatal",
  "area": "crianca",
  "cenario": "uti",
  "tempo": 20,
  "abertura": "UTI neonatal. Você recebe da sala de parto, em incubadora de transporte, o recém-nascido de M., com 30 semanas de idade gestacional e 1.350 g, nascido de parto vaginal há 40 minutos. Precisou de ventilação com pressão positiva por máscara no primeiro minuto e chega em CPAP nasal, com fração de oxigênio de 40%, acompanhado pela pediatra. Na chegada: temperatura axilar de 35,6 °C, FR 72 irpm, gemido expiratório, tiragem subcostal e batimento de asa do nariz, SpO2 87%, FC 168 bpm. Está sem pulseira de identificação, que ficou na sala de parto. A mãe continua no centro obstétrico.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga, em ordem, o que faz nos primeiros 30 minutos da admissão, o que é seu, o que pede ao técnico e o que comunica ao médico.",
    "entrega": "Bebê identificado, aquecido na incubadora e monitorizado. Uma hora depois: temperatura axilar de 36,6 °C, glicemia capilar de 62 mg/dL, SpO2 91% no CPAP. A equipe médica administra surfactante e passa cateter venoso umbilical para soro com glicose. Estão prescritos vitamina K, vacina hepatite B e dieta mínima com leite materno ordenhado por sonda orogástrica, assim que houver leite."
   },
   {
    "n": 2,
    "tarefa": "Formule os diagnósticos de enfermagem prioritários com o raciocínio e escreva a prescrição de enfermagem das primeiras 24 horas.",
    "entrega": "No segundo dia, o técnico precisa colher sangue por punção de calcanhar e trocar a fixação da sonda. O bebê chora, faz careta e a saturação oscila durante a manipulação. A mãe chega à unidade numa cadeira de rodas e pergunta se pode ficar e se um dia vai conseguir amamentar."
   },
   {
    "n": 3,
    "tarefa": "Diga como avalia e alivia a dor nos procedimentos e como acolhe a mãe: permanência, contato com o bebê e produção de leite.",
    "entrega": "No terceiro dia, o hemograma mostra anemia, e a equipe médica prescreve concentrado de hemácias para a tarde. O teste do pezinho ainda não foi colhido. A BCG não foi aplicada."
   },
   {
    "n": 4,
    "tarefa": "Diga o que faz antes e durante a transfusão em relação à triagem neonatal, às vacinas e à segurança, e como registra.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "H",
    "item": "Trata a hipotermia como prioridade: incubadora aquecida, touca, ambiente sem correntes de ar e temperatura axilar seriada até a faixa de 36,5 a 37,5 °C, lembrando que abaixo de 36 °C o prematuro tem mais mortalidade (SBP, 2026)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Identifica o recém-nascido antes de qualquer procedimento, com pulseira de preferência no tornozelo contendo no mínimo o nome da mãe e o número do prontuário, conferida com a sala de parto (Protocolo de identificação do paciente, MS/ANVISA/Fiocruz, 2013)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Reconhece desconforto respiratório com hipoxemia apesar do CPAP, comunica o médico de imediato e verifica o sistema: prongas bem posicionadas, narinas pérvias e parâmetros conforme a prescrição médica",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Assume pessoalmente a admissão e os cuidados diretos ao recém-nascido grave, privativos do enfermeiro, com o técnico assistindo sob supervisão em sinais vitais, registro e apoio aos procedimentos; surfactante, cateter umbilical e parâmetros ventilatórios são da equipe médica (Lei 7.498/1986, art. 11, I; Decreto 94.406/1987, art. 10)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Formula Troca de gases prejudicada como prioridade (hipoxemia pelo pulmão imaturo), Risco de infecção (prematuridade, cateter umbilical, procedimentos invasivos) e Risco de amamentação ineficaz (separação da mãe e imaturidade da sucção), sustentando os de risco com fatores de risco e não com sinais (NANDA-I, 2024-2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Prescreve cuidados com cateter umbilical e sonda orogástrica (fixação, conferência da posição antes de cada dieta, manuseio asséptico das conexões) e higiene das mãos nos cinco momentos por toda a equipe (Protocolo de higiene das mãos, MS/ANVISA/Fiocruz, 2013)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Confere e administra vitamina K e a primeira dose da hepatite B, esta nas primeiras 12 horas de vida, com registro, e mantém a BCG adiada até o bebê atingir 2.000 g (IN do Calendário Nacional de Vacinação, 2026)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Avalia a dor por escala neonatal comportamental e fisiológica, como a NIPS, antes, durante e depois dos procedimentos, e registra o escore",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Alivia a dor sem fármaco com sucção não nutritiva e, quando possível, contato pele a pele com a mãe durante o procedimento, agrupa os procedimentos e comunica dor persistente ao médico, garantindo o direito de não sentir dor quando houver meio de evitá-la (Res. CONANDA 41/1995)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Garante à mãe permanência em tempo integral na unidade neonatal, sem horário de visita, e acesso livre ao bebê (ECA, art. 12), e incentiva o contato pele a pele assim que ele estiver estável",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Ensina a ordenha manual (mãos lavadas, massagem circular, polegar acima e indicador abaixo da aréola) e encaminha o leite pelo fluxo de coleta da instituição para a dieta por sonda (Caderno de Atenção Básica 23, MS, 2015)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Colhe o teste do pezinho antes de instalar o concentrado de hemácias, porque o sangue transfundido prejudica a eletroforese de hemoglobina; na transfusão, confere à beira do leito a identificação do bebê com a bolsa e a etiqueta, fica ao lado nos primeiros 10 minutos e registra início, fim e intercorrências (Portaria GM/MS 11.685/2026)",
    "peso": 0.6
   }
  ]
 },
 {
  "id": "caso-hemorragia-pos-parto",
  "titulo": "Hemorragia pós-parto no puerpério imediato",
  "area": "mulher",
  "cenario": "enf",
  "tempo": 20,
  "abertura": "Maternidade, alojamento conjunto, 50 minutos depois de um parto vaginal. Sra. L., 31 anos, terceiro parto, trabalho de parto de 14 horas com ocitocina, recém-nascido de 4.100 g. Recebeu ocitocina 10 UI intramuscular logo após o nascimento. Pressão arterial normal em todo o pré-natal. O bebê está no colo do companheiro. A técnica de enfermagem chama você: lençol e absorvente estão encharcados de sangue, com coágulos, e Sra. L. diz que está tonta. FC 112 bpm, PA 100/64 mmHg, pele fria, útero amolecido, palpado acima da cicatriz umbilical, bexiga palpável.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga o que faz nos primeiros 10 minutos, em ordem, quem chama e o que deixa pronto para a equipe médica.",
    "entrega": "A equipe médica chega. Foram feitas ocitocina venosa em bolus lento, infusão de ocitocina em soro e ácido tranexâmico. O sangramento diminui, mas não para. Vinte minutos depois: FC 126 bpm, PA 84/52 mmHg, perda medida pelo peso das compressas de 1.300 mL. O útero volta a amolecer entre as massagens. O médico prescreve metilergometrina e misoprostol e pede dois concentrados de hemácias."
   },
   {
    "n": 2,
    "tarefa": "Calcule e interprete o índice de choque nos dois momentos, diga o que confere antes dos uterotônicos de segunda linha e como instala e vigia a transfusão.",
    "entrega": "O útero fica firme e o sangramento cede. Depois das duas bolsas: FC 98 bpm, PA 108/66 mmHg, diurese presente. Sra. L. pede para ver o bebê e diz que tem medo de morrer e de não conseguir amamentar."
   },
   {
    "n": 3,
    "tarefa": "Formule os diagnósticos de enfermagem e a prescrição de enfermagem para as próximas 12 horas, dizendo o que cabe à técnica.",
    "entrega": "Na passagem de plantão, a colega do turno seguinte pergunta o que aconteceu. Na folha da primeira hora após o parto há uma única pressão arterial anotada."
   },
   {
    "n": 4,
    "tarefa": "Diga o que registra agora, o que passa na passagem de plantão e o que propõe para a vigilância do quarto período na unidade.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Reconhece hemorragia pós-parto pela perda com instabilidade e pelo útero amolecido e aponta o tônus (atonia, causa de cerca de 70% dos casos) como causa provável, sem deixar de avaliar trauma, tecido e trombina (OPAS, 2018)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Pede ajuda e aciona a equipe médica, inicia massagem uterina, punciona dois acessos venosos calibrosos, colhe exames e reserva de sangue, esvazia a bexiga, mede a perda pelo peso das compressas e aquece a paciente (OPAS, 2018)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Prepara e administra o prescrito pelo protocolo: ocitocina 5 UI venosa lenta seguida de 20 a 40 UI em 500 mL de soro fisiológico a 250 mL/h e ácido tranexâmico 1 g venoso em 10 minutos, dentro de 3 horas do parto (OPAS, 2018; OMS, FIGO e ICM, 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Calcula o índice de choque, 112 ÷ 100 = 1,1 e depois 126 ÷ 84 = 1,5, e reconhece que 0,9 ou mais indica risco de transfusão e 1,4 ou mais pede terapêutica agressiva e protocolo de transfusão maciça, antes mesmo da hipotensão franca (OPAS, 2018)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Antes da metilergometrina 0,2 mg intramuscular confere que não há hipertensão, sua contraindicação, e prepara o misoprostol 800 mcg por via retal prescrito (OPAS, 2018)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Na transfusão, confere à beira do leito nome completo, dados da bolsa e etiqueta de compatibilidade, afere sinais vitais até 60 minutos antes, fica ao lado nos primeiros 10 minutos, usa equipo próprio sem medicamento na mesma via e registra início, fim e intercorrências (Portaria GM/MS 11.685/2026)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Com a paciente estabilizada, formula Risco de sangramento e Risco de choque (fatores: atonia recente, perda volumosa, trabalho de parto prolongado com ocitocina, bebê grande) e Risco de amamentação ineficaz (separação e fadiga), explicando por que agora são diagnósticos de risco (NANDA-I, 2024-2026)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Prescreve vigilância próxima do globo de segurança de Pinard, do sangramento, da pressão, do pulso e da diurese, em intervalos escritos na prescrição, e orienta a técnica a executar, registrar e chamar o enfermeiro diante de útero amolecido, sangramento ou tontura",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Leva o bebê ao contato pele a pele e apoia a primeira mamada assim que a mãe estiver estável, com a ajuda do acompanhante de livre escolha, e responde ao medo com informação clara sobre o que aconteceu (Portaria GM/MS 5.350/2024, Rede Alyne)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Registra em ordem cronológica, com data, hora e identificação, a perda medida, os sinais vitais, os índices de choque, os fármacos, as bolsas e as comunicações, sem rasura nem espaço em branco, e passa o caso de forma estruturada no plantão (Res. COFEN 514/2016)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Propõe para a unidade estratificação de risco na admissão e a cada reavaliação, vigilância padronizada do quarto período e medida da perda por coletor calibrado ou pesagem, porque a estimativa visual subestima o sangramento (OPAS, 2018, estratégia Zero Morte Materna por Hemorragia; OMS, FIGO e ICM, 2025)",
    "peso": 0.5
   }
  ]
 },
 {
  "id": "caso-delirium-queda-idoso",
  "titulo": "Delirium no pós-operatório e risco de queda no idoso",
  "area": "idoso",
  "cenario": "enf",
  "tempo": 20,
  "abertura": "Enfermaria de ortopedia, plantão noturno. Sr. A., 81 anos, segundo dia de pós-operatório de artroplastia de quadril por fratura após queda em casa. Segundo a filha, antes da internação era independente, lia jornal e cuidava das próprias contas. Usa óculos e aparelho auditivo, que ficaram numa sacola no armário. Prescritos: dipirona, tramadol, enoxaparina profilática e 'diazepam 10 mg se necessário'. A sonda vesical foi retirada às 14h. À 1h, o técnico chama você: o paciente arrancou o acesso venoso, tenta sair da cama pela grade, diz que precisa ir para o trabalho e não reconhece onde está. O técnico pergunta se pode amarrar e dar o diazepam.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como avalia o paciente agora, que causas procura e o que responde ao técnico.",
    "entrega": "SpO2 94% em ar ambiente, glicemia capilar de 128 mg/dL, FC 96 bpm, PA 150/84 mmHg, temperatura 37,3 °C. Geme ao mexer a perna operada. Não urinou desde a retirada da sonda e tem globo vesical palpável. Alterna sonolência e agitação e não consegue dizer os meses do ano de trás para frente. O médico plantonista prescreve cateterismo vesical de alívio e analgesia, suspende o diazepam e pede exames."
   },
   {
    "n": 2,
    "tarefa": "Formule os diagnósticos de enfermagem prioritários com o raciocínio e escreva a prescrição de enfermagem para tratar o delirium e prevenir queda sem contenção.",
    "entrega": "Saíram 700 mL de urina. Ele fica mais calmo, mas segue desorientado. Às 4h, o técnico o encontra sentado no chão ao lado da cama, com a grade elevada. Está acordado, reclama de dor no quadril operado e tem um corte pequeno na testa."
   },
   {
    "n": 3,
    "tarefa": "Diga o que faz depois da queda, antes de levantá-lo, e como registra e notifica o incidente.",
    "entrega": "Radiografia sem luxação da prótese; avaliação médica sem sinal de trauma craniano grave. De manhã, a filha chega irritada e exige que o pai fique amarrado à noite e com remédio para dormir."
   },
   {
    "n": 4,
    "tarefa": "Conduza a conversa com a filha e diga o que muda no plano até a alta.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Trata a confusão súbita como emergência e procura a causa antes de sedar: oxigenação, glicemia, sinais vitais, dor, retenção urinária, constipação e fármacos como o tramadol e o benzodiazepínico (NICE CG103, 2023)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Aplica o CAM ou o 4AT e conclui delirium (início agudo e curso flutuante com desatenção, mais pensamento desorganizado ou alteração do nível de consciência), comunicando o médico",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Não cumpre o 'diazepam se necessário': prescrição sem condição de uso pede esclarecimento, e benzodiazepínico no idoso piora o delirium e aumenta o risco de queda; solicita ao médico a revisão (Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos, MS/ANVISA, 2013; critérios de Beers, AGS, 2023)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Não autoriza contenção de rotina: ela só cabe como único meio de prevenir dano imediato ou iminente, sob supervisão direta do enfermeiro, com monitoramento e registro de razões, duração, avaliações e eventos adversos (Res. COFEN 746/2024)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Formula Confusão aguda como prioritária (mudança súbita e flutuante, com causa orgânica identificável), além de Dor aguda e Mobilidade física prejudicada, e liga a confusão aos fatores que a enfermagem modifica: dor, retenção urinária, privação sensorial e sono (NANDA-I, 2024-2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Prescreve a prevenção não farmacológica do delirium: óculos e aparelho auditivo, orientação com relógio e calendário, família presente, hidratação, controle de evacuação e diurese, dor tratada, sono sem procedimento noturno e mobilização precoce, com o técnico executando e registrando o comportamento (NICE CG103, 2023; HELP, Inouye, 1999)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Prescreve a prevenção de queda pelos fatores do próprio paciente, sem depender só de escore: ida programada ao banheiro, ajuda para levantar à noite, cama baixa e travada, campainha e andador ao alcance, calçado fechado; registra a escala de Morse usada na instituição (World Falls Guidelines, 2022; NICE NG249, 2025)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Depois da queda, examina antes de levantar (consciência, dor e deformidade no quadril operado, sinais vitais, glicemia), levanta com ajuda, comunica o médico e, por estar em enoxaparina, estende a vigilância neurológica pelo risco de hematoma tardio (World Falls Guidelines, 2022)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Registra a queda com hora, achados, condutas e comunicações e a notifica ao núcleo de segurança do paciente; com lesão, é evento adverso, que o núcleo notifica à vigilância sanitária (Protocolo de prevenção de quedas, MS/ANVISA/Fiocruz, 2013; RDC ANVISA 36/2013)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Acolhe a filha, explica que amarrar e sedar aumentam delirium, queda e perda de função, e a convida a ficar como acompanhante, direito da pessoa idosa internada, e a ajudar na reorientação (Estatuto da Pessoa Idosa, art. 16)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Na alta, faz a conciliação medicamentosa, garante que hipnótico e antipsicótico usados na internação não sigam para casa sem indicação e orienta a prevenção de quedas no domicílio",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "caso-tuberculose-adesao",
  "titulo": "Tuberculose pulmonar com baixa adesão ao tratamento na UBS",
  "area": "transmissiveis",
  "cenario": "aps",
  "tempo": 20,
  "abertura": "Unidade básica com equipe de Saúde da Família. Sr. J., 42 anos, pedreiro, tem tuberculose pulmonar confirmada por teste rápido molecular, sem resistência à rifampicina, notificada há 6 semanas. Começou o esquema básico com 49 kg: 3 comprimidos de dose fixa combinada por dia, autoadministrados, com retirada quinzenal na farmácia. O teste de HIV não consta no prontuário. Faltou ao retorno do primeiro mês e à baciloscopia de controle. A agente comunitária conta que ele está há 12 dias sem tomar os comprimidos. Veio hoje porque a esposa insistiu. Mora com a esposa, de 39 anos, o filho, de 3 anos, e a mãe, de 68 anos.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Conduza a consulta de enfermagem: o que pergunta, examina e mede, e que pendências do tratamento identifica.",
    "entrega": "Ele conta que parou porque a urina ficou cor de laranja e achou que estava 'estragando o rim', e porque sente enjoo de manhã. Tem vergonha de que os colegas da obra saibam e passou a comer longe da família. Sem icterícia, sem lesão de pele, sem alteração da visão. Pesa hoje 54 kg. Tosse menos. Aceita colher escarro e fazer o teste rápido de HIV, que é não reagente."
   },
   {
    "n": 2,
    "tarefa": "Formule os diagnósticos de enfermagem com o raciocínio e monte com ele o plano de tratamento: dose, tomada observada e manejo dos efeitos.",
    "entrega": "Ele aceita o tratamento diretamente observado na unidade às 6h30, antes da obra, de segunda a sexta. Na visita domiciliar: a esposa não tem sintomas; o filho de 3 anos está bem; a mãe tosse há 3 semanas e perdeu peso."
   },
   {
    "n": 3,
    "tarefa": "Diga como avalia cada contato e o que faz com cada um.",
    "entrega": "A prova tuberculínica da esposa mede 8 mm e a radiografia de tórax dela é normal. O escarro da mãe é positivo no teste rápido molecular. No fim do segundo mês, a baciloscopia de controle do Sr. J. ainda é positiva. O encarregado da obra telefona para a unidade perguntando se ele 'tem a doença'."
   },
   {
    "n": 4,
    "tarefa": "Diga o que muda no tratamento do Sr. J., o que faz com a esposa e com a mãe e como responde ao encarregado.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Busca sem julgamento as causas da interrupção (crença sobre a urina, náusea, horário de trabalho, estigma) e pesquisa reações maiores que obrigariam suspender e referenciar: icterícia, exantema, alteração visual (Manual de Recomendações para o Controle da Tuberculose, MS, 2019)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Identifica as pendências: teste de HIV não feito, que é exigido no início, baciloscopia mensal de controle perdida, contatos não avaliados e dose desatualizada para o peso atual (MS, 2019)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Revisa a dose pelo peso: com 54 kg são 4 comprimidos de RHZE na fase intensiva, e não 3, ajustados pelo protocolo do programa ou com o médico da equipe; a prescrição de medicamentos do programa pelo enfermeiro depende de protocolo (MS, 2019; Lei 7.498/1986, art. 11, II, c; Res. COFEN 801/2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Explica que a urina alaranjada é efeito esperado da rifampicina e que náusea é reação menor, manejada sem suspender o tratamento, e colhe a baciloscopia de controle (MS, 2019)",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Formula Comportamentos ineficazes de manutenção da saúde, relacionado à crença equivocada sobre o remédio, aos efeitos adversos e ao conflito com o horário de trabalho, e Conexão social inadequada, relacionada ao estigma (NANDA-I, 2024-2026); reconhece que 12 dias sem tomar ainda não configuram abandono, que exige interrupção por 30 dias consecutivos ou mais (MS, 2019)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Pactua o tratamento diretamente observado em horário compatível com a obra, no mínimo 3 vezes por semana para contar como TDO (24 doses na fase intensiva), registrando cada dose observada; supervisão só por familiar não conta (MS, 2019)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Avalia todos os contatos: a mãe, sintomática respiratória, colhe escarro; a esposa, assintomática, faz prova tuberculínica; o filho menor de 5 anos é prioridade e vai à avaliação com o médico da equipe; pergunta também pelos colegas de obra, que são contatos (MS, 2019)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Na esposa, com prova tuberculínica de 5 mm ou mais e radiografia normal, afasta doença ativa e indica tratamento da infecção latente, de preferência 3HP (isoniazida e rifapentina uma vez por semana, 12 doses) (MS, 2019; Nota Informativa 15/2024-CGTM/DATHI/SVSA/MS)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Notifica a mãe como caso novo no Sinan (notificação semanal), oferece teste de HIV, pede cultura com teste de sensibilidade e inicia o tratamento com TDO (Portaria GM/MS 11.211/2026; MS, 2019)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Com baciloscopia positiva no fim do 2º mês, pede cultura com teste de sensibilidade e prolonga a fase intensiva por mais 30 dias, com o médico da equipe (MS, 2019)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Não confirma nem nega o diagnóstico ao encarregado: o sigilo só se quebra nas hipóteses do Código de Ética, e contar no trabalho é decisão do paciente; conversa com ele sobre isso e sobre a avaliação dos colegas como contatos (Res. COFEN 564/2017, art. 52)",
    "peso": 0.5
   }
  ]
 },
 {
  "id": "caso-politrauma-xabcde",
  "titulo": "Politraumatizado na sala de emergência pela sequência xABCDE",
  "area": "urgencia",
  "cenario": "emg",
  "tempo": 25,
  "abertura": "Estação de sala de emergência no formato da prova prática do título da ABENTI: caso simulado, tarefas com tempo marcado, dois avaliadores com formulário de checagem e foco na decisão do enfermeiro (Edital ABENTI 02/2026, item 13). Hospital de referência em trauma. O SAMU traz Sr. P., 27 anos, motociclista, colisão contra carro há 40 minutos, em prancha e com colar cervical. Ferimento na face medial da coxa direita com sangramento em jato que encharcou o curativo compressivo. Respira com esforço: FR 34 irpm, SpO2 88% com máscara não reinalante. FC 132 bpm, PA 98/78 mmHg, pele fria e pálida, enchimento capilar de 4 segundos. Abre os olhos ao chamado, está confuso e localiza a dor. Você é o enfermeiro da sala de emergência e recebe o paciente com a equipe médica. Responda cada tarefa no tempo.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Em 3 minutos: diga na ordem do xABCDE o que faz ou prepara nos primeiros minutos, começando pelo que mata primeiro.",
    "entrega": "Torniquete aplicado na raiz da coxa às 10h12; o sangramento parou e o pulso pedioso desapareceu. Via aérea pérvia, colar mantido. Murmúrio vesicular abolido à direita, hipertimpanismo, traqueia desviada para a esquerda, jugulares túrgidas. SpO2 84%."
   },
   {
    "n": 2,
    "tarefa": "Em 3 minutos: diga o que reconhece no tórax, o que prepara e o que faz na circulação.",
    "entrega": "O médico descomprime e drena o tórax; SpO2 sobe para 94%. Dois acessos calibrosos, amostra para tipagem colhida, primeiro concentrado de hemácias chegando. Pelve estável. Às 10h25, o nível de consciência cai: abre os olhos só à dor, fala palavras inapropriadas e faz flexão anormal à dor; pupila direita dilatada e sem reação à luz, esquerda reagente. Glicemia capilar de 142 mg/dL."
   },
   {
    "n": 3,
    "tarefa": "Em 3 minutos: calcule o Glasgow e o Glasgow-P, diga o que muda na via aérea e na meta de pressão e complete o D e o E.",
    "entrega": "Paciente intubado pelo médico. Na exposição: sangue no meato uretral e equimose periorbitária bilateral. Temperatura de 35,4 °C. O médico pede sonda vesical e sonda gástrica antes da tomografia."
   },
   {
    "n": 4,
    "tarefa": "Em 4 minutos: diga o que faz com as sondas, formule os diagnósticos de enfermagem prioritários e diga o que registra e passa na transferência para a tomografia e o centro cirúrgico.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Começa pelo x: reconhece a hemorragia externa exsanguinante como a primeira ameaça, a ser controlada antes da via aérea (ATLS, 11ª ed., 2025)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Aplica ou prepara o torniquete proximal à lesão, apertado até parar o sangramento e o pulso distal, e anota o horário; torniquete frouxo só bloqueia o retorno venoso e aumenta o sangramento (ATLS, 2025)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Mantém estabilização manual da coluna cervical em toda manobra de via aérea e aspira se preciso; a aspiração do paciente grave na emergência é privativa do enfermeiro (Res. COFEN 557/2017)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "Reconhece pneumotórax hipertensivo pelo exame (murmúrio abolido, hipertimpanismo, traqueia desviada, jugulares túrgidas, hipoxemia) e prepara na hora o material da descompressão, que é do médico, sem esperar radiografia (ATLS, 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Reconhece choque hemorrágico com sistólica ainda preservada pela taquicardia, pele fria, enchimento lento e pressão de pulso estreita, lembrando que a sistólica só cai quando cerca de um terço da volemia foi perdido (ATLS, 2025)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Na circulação: dois acessos calibrosos, amostra para tipagem, hemoderivados precoces e aquecidos, restrição de cristaloide e ácido tranexâmico 1 g em 10 minutos e 1 g em 8 horas, por estar dentro de 3 horas do trauma (ATLS, 2025)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Calcula Glasgow 8 (ocular 2, verbal 3, motor 3) e Glasgow-P 7 (uma pupila sem reação), reconhece TCE grave com sinal de herniação, comunica na hora, prepara a via aérea definitiva e passa a defender PAM de 80 mmHg ou mais, no lugar da hipotensão permissiva (ATLS, 2025; diretriz europeia de sangramento no trauma, 2023)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "No D e no E: glicemia capilar, exposição completa, rolamento em bloco para ver o dorso e aquecimento logo em seguida, com fluidos aquecidos, porque a hipotermia agrava a coagulopatia (ATLS, 2025)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Não passa sonda vesical às cegas com sangue no meato nem sonda gástrica pelo nariz com equimose periorbitária; comunica o médico e, se indicada, a sonda gástrica vai pela boca (ATLS, 2025)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Formula Troca de gases prejudicada (pneumotórax), Perfusão tissular periférica ineficaz (choque hemorrágico) e Perfusão cerebral ineficaz (TCE com sinais de hipertensão intracraniana), em ordem de prioridade pelo que ameaça a vida em cada momento (NANDA-I, 2024-2026)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Registra com horários o torniquete, os fármacos, as bolsas, os Glasgow seriados e as pupilas, passa o caso de forma estruturada e acompanha o paciente grave no transporte, cuidado direto privativo do enfermeiro (Lei 7.498/1986, art. 11, I)",
    "peso": 0.4
   }
  ]
 },
 {
  "id": "caso-noradrenalina-insulina-uti",
  "titulo": "Noradrenalina e insulina em bomba com dupla checagem na UTI",
  "area": "farmaco",
  "cenario": "uti",
  "tempo": 25,
  "abertura": "Estação de UTI adulto no formato da prova prática do título da ABENTI: caso simulado, tarefas com tempo marcado, dois avaliadores com formulário de checagem e foco na decisão do enfermeiro (Edital ABENTI 02/2026, item 13). Sr. T., 58 anos, 75 kg, terceiro dia de choque séptico de foco abdominal, em ventilação mecânica, sem diabetes prévio. Prescrição médica do dia: noradrenalina 0,12 mcg/kg/min, solução de 2 ampolas de hemitartarato de norepinefrina 2 mg/mL (4 mL cada) em 242 mL de glicose 5%, em bomba, meta de PAM de 65 mmHg ou mais, titular entre 0,05 e 0,3 mcg/kg/min; e 'insulina regular 100U em SF 0,9% 100 mL, correr 4U/h, glicemia capilar de 1/1 h'. A glicemia capilar das 8h foi de 236 mg/dL. Dieta enteral contínua. Você assume o leito com uma técnica de enfermagem. Responda cada tarefa no tempo.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Em 4 minutos: calcule a concentração e a vazão da noradrenalina e da insulina, aponte o que na prescrição precisa ser esclarecido antes de iniciar e diga como faz a dupla checagem.",
    "entrega": "A farmácia confirma que a dose está prescrita em norepinefrina base, e a prescrição da insulina é reescrita com a palavra unidades. Bombas programadas e conferidas. Às 11h, por restrição hídrica, chega a nova bolsa de noradrenalina com 4 ampolas em 234 mL, e a técnica se prepara para trocá-la mantendo a programação. PAM de 67 mmHg."
   },
   {
    "n": 2,
    "tarefa": "Em 3 minutos: diga a nova vazão e como faz a troca da bolsa sem expor o paciente a pico ou a queda de pressão.",
    "entrega": "Troca feita. Às 14h, a PAM invasiva marca 58 mmHg, com curva amortecida e uma bolha visível no sistema; o manguito no outro braço mede PAM de 70 mmHg. A glicemia capilar das 14h é de 58 mg/dL. O paciente está sedado, RASS de menos 4. A dieta enteral foi pausada às 12h para um exame, e ninguém avisou o médico."
   },
   {
    "n": 3,
    "tarefa": "Em 4 minutos: diga o que faz com a pressão antes de mexer na noradrenalina e o que faz com a glicemia agora.",
    "entrega": "Sistema arterial corrigido: PAM invasiva de 69 mmHg, sem mudar a vazão. Glicose venosa feita conforme o protocolo; glicemia 15 minutos depois de 112 mg/dL. A técnica pergunta se precisa registrar e notificar, já que 'deu tudo certo'."
   },
   {
    "n": 4,
    "tarefa": "Em 3 minutos: diga como registra, se e como notifica, o que comunica ao médico e o que propõe à unidade.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Calcula a noradrenalina: cada ampola de 4 mL tem 4 mg de norepinefrina base (8 mg do sal); 2 ampolas em 250 mL dão 32 mcg/mL de base; 0,12 × 75 = 9 mcg/min, ou 540 mcg/h, e 540 ÷ 32 = 16,9 mL/h (bula do hemitartarato de norepinefrina, Hipolabor)",
    "peso": 0.6
   },
   {
    "eixo": "A",
    "item": "Antes de iniciar, confirma com prescritor e farmácia se a dose está em base ou em sal, porque misturar as referências erra a dose pela metade ou pelo dobro, e pede que a insulina seja reescrita com unidades por extenso, já que 'U' pode levar a doses 10 ou 100 vezes maiores (Protocolo de Segurança na Prescrição, Uso e Administração de Medicamentos, MS/ANVISA, 2013)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Calcula a insulina: 100 unidades em 100 mL dão 1 unidade/mL, dentro da faixa de estabilidade da bula (0,05 a 1,0 unidade/mL), e 4 unidades/h correm a 4 mL/h; reconhece 236 mg/dL acima do alvo de 140 a 180 mg/dL do paciente crítico (bula Novolin R; ADA, 2026)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Faz dupla checagem independente: a técnica recebe só prescrição, frasco e bomba e refaz a conta sem ver a sua; conferem à beira do leito paciente, medicamento, via, concentração e programação e registram as duas checagens (Protocolo MS/ANVISA, 2013)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Na troca para 16 mg em 250 mL (64 mcg/mL), recalcula antes de conectar, 540 ÷ 64 = 8,4 mL/h, porque manter 16,9 mL/h dobraria a dose; troca com a bolsa nova já preparada, sem parar a infusão, em via exclusiva, e reavalia a PAM logo depois (Protocolo MS/ANVISA, 2013; ENARE 2026/27, questão 60)",
    "peso": 0.5
   },
   {
    "eixo": "C",
    "item": "Diante da PAM baixa, confere primeiro se a medida é confiável (bolha, curva amortecida, transdutor no eixo flebostático, zero) e compara com o manguito antes de subir a noradrenalina; titula só dentro da faixa prescrita e comunica se a dose escalar (SSC, 2026)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Trata a glicemia de 58 mg/dL no paciente sedado sem nada pela boca: interrompe a insulina conforme o protocolo, faz a glicose venosa do protocolo, de preferência a 10 ou 20% e não a 50%, repete a glicemia em 10 a 15 minutos e mantém glicemia seriada (ADA, 2026; JBDS, 2023)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Identifica a causa, insulina mantida com a dieta enteral pausada sem aviso ao prescritor, classifica a hipoglicemia como nível 1 (abaixo de 70 e a partir de 54 mg/dL) e comunica o médico para rever o esquema enquanto a dieta estiver suspensa (ADA, 2026)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Registra valor, sintomas, conduta, horários e glicemias de controle e notifica o incidente ao núcleo de segurança do paciente mesmo sem dano aparente, por envolver medicamento de alta vigilância; se houve dano, o núcleo notifica ao Notivisa (RDC ANVISA 36/2013)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Mostra o limite da atuação: preparo, programação e titulação das infusões de alta vigilância ficam com o enfermeiro; a técnica capacitada participa da conferência e da glicemia sob supervisão; dose fora da faixa prescrita é decisão médica (Parecer COREN-BA 09/2025; Lei 7.498/1986, art. 11)",
    "peso": 0.3
   },
   {
    "eixo": "H",
    "item": "Propõe à unidade concentrações padronizadas de noradrenalina e insulina, rótulo com a concentração final, aviso obrigatório ao prescritor quando a dieta é pausada com insulina em curso e dupla checagem em toda troca de bolsa (Protocolo MS/ANVISA, 2013)",
    "peso": 0.3
   }
  ]
 },
 {
  "id": "caso-surto-diarreia-creche",
  "titulo": "Surto de diarreia em creche com investigação e notificação",
  "area": "coletiva",
  "cenario": "ger",
  "tempo": 20,
  "abertura": "Vigilância epidemiológica municipal, segunda-feira de manhã. A diretora de uma creche telefona: desde quarta-feira, 9 crianças e 1 educadora tiveram diarreia, algumas com vômitos e febre, e uma criança de 1 ano foi internada ontem com desidratação. A creche atende 64 crianças em 3 turmas (berçário com 18 crianças de 6 meses a 1 ano e meio, maternal I com 22 e maternal II com 24) e tem 12 funcionários. Todos comem a comida da cozinha da creche, e a água é da rede pública. Você é a enfermeira da vigilância responsável pela investigação.",
  "etapas": [
   {
    "n": 1,
    "tarefa": "Diga como confirma que é um surto, que definição de caso usa e o que faz e comunica ainda hoje.",
    "entrega": "Visita no mesmo dia, com busca ativa pela lista de presença e por telefone às famílias: 15 crianças e 2 educadoras do berçário doentes. Por turma: berçário, 12 casos em 18 crianças; maternal I, 2 em 22; maternal II, 1 em 24. Os casos começam na quarta, voltam a subir no domingo e na segunda, e não há caso entre os funcionários da cozinha. O fraldário fica ao lado do lactário, não tem pia, o mesmo pano limpa o trocador e a bancada das mamadeiras, e as educadoras usam só gel alcoólico entre as trocas."
   },
   {
    "n": 2,
    "tarefa": "Calcule as taxas de ataque por turma e a geral das crianças, descreva a curva e formule a hipótese de fonte e de modo de transmissão.",
    "entrega": "Fezes de 6 crianças enviadas ao laboratório de referência: rotavírus em 4. Nas Cadernetas do berçário, 7 das 12 crianças doentes não têm as duas doses da vacina rotavírus; duas delas, de 9 meses, nunca receberam nenhuma dose, e uma de 1 ano e 2 meses também nunca recebeu. A diretora pergunta se as crianças doentes não deveriam tomar antibiótico e antidiarreico."
   },
   {
    "n": 3,
    "tarefa": "Diga as medidas de controle na creche, o que faz com a vacinação e o que orienta às famílias das crianças doentes em casa.",
    "entrega": "Duas semanas depois, não há caso novo há 10 dias. A secretaria pede o relatório, e um jornal local liga pedindo o nome da criança internada."
   },
   {
    "n": 4,
    "tarefa": "Diga como encerra a investigação, o que vai no relatório, para quem volta a informação e como responde ao jornal.",
    "entrega": "Encerramento do caso."
   }
  ],
  "espelho": [
   {
    "eixo": "C",
    "item": "Confirma o surto (casos acima do esperado num espaço delimitado e ligados entre si) e cria definição de caso com tempo, lugar e pessoa, por exemplo três ou mais evacuações amolecidas em 24 horas desde a quarta-feira em criança ou funcionário da creche (MS, Manejo do paciente com diarreia, 2023)",
    "peso": 0.5
   },
   {
    "eixo": "A",
    "item": "Comunica o surto como evento de saúde pública em até 24 horas, pelo meio mais rápido, às esferas indicadas na lista, e o registra no Sinan sem esperar o agente; reconhece que a creche, instituição de cuidado coletivo, também deve comunicar (PRC 4/2017, Anexo V, com a lista da Portaria GM/MS 11.211/2026)",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Faz busca ativa com a lista de presença e contato com as famílias, entrevista com roteiro padronizado e coleta de fezes dos casos recentes para o laboratório de referência antes de concluir",
    "peso": 0.4
   },
   {
    "eixo": "C",
    "item": "Calcula as taxas de ataque: berçário 12 ÷ 18 = 67%, maternal I 2 ÷ 22 = 9%, maternal II 1 ÷ 24 = 4% e geral das crianças 15 ÷ 64 = 23%; o risco no berçário é cerca de dez vezes o das outras turmas juntas (67% contra 3 ÷ 46 = 6,5%)",
    "peso": 0.6
   },
   {
    "eixo": "C",
    "item": "Lê a curva com casos que voltam a subir dias depois, concentrados no berçário de fraldas e sem caso na cozinha, como transmissão de pessoa a pessoa, e não como fonte comum pontual de alimento, e liga a hipótese ao fraldário sem pia e ao pano compartilhado com o lactário",
    "peso": 0.5
   },
   {
    "eixo": "H",
    "item": "Propõe as medidas: pia no fraldário e higiene das mãos com água e sabonete depois de cada troca de fralda e antes de preparar mamadeiras, porque há exposição a excreções e o gel não remove sujidade; fraldário separado do lactário; limpeza e desinfecção do trocador e das superfícies com material exclusivo; capacitação das educadoras (Protocolo de higiene das mãos, MS/ANVISA/Fiocruz, 2013; RDC ANVISA 42/2010)",
    "peso": 0.6
   },
   {
    "eixo": "H",
    "item": "Atualiza a vacina rotavírus dentro das janelas (1ª dose de 1 mês e 15 dias a 11 meses e 29 dias; 2ª de 3 meses e 15 dias a 23 meses e 29 dias): as crianças de 9 meses ainda podem iniciar o esquema, a de 1 ano e 2 meses não, e quem está com gastroenterite aguda tem a dose adiada até melhorar (IN do Calendário Nacional de Vacinação, 2026)",
    "peso": 0.4
   },
   {
    "eixo": "H",
    "item": "Orienta as famílias pelo plano A: soro de reidratação oral depois de cada evacuação (50 a 100 mL abaixo de 1 ano; 100 a 200 mL de 1 a 10 anos), alimentação mantida sem diluir o leite, zinco por 10 a 14 dias e retorno se piorar, se houver sangue, vômitos repetidos, pouca diurese ou recusa (MS, Manejo do paciente com diarreia, 2023)",
    "peso": 0.4
   },
   {
    "eixo": "A",
    "item": "Responde à diretora que antidiarreico não se usa e que antibiótico só cabe, por decisão médica, na disenteria com estado geral comprometido e na cólera grave (MS, Manejo do paciente com diarreia, 2023)",
    "peso": 0.3
   },
   {
    "eixo": "C",
    "item": "No plano de enfermagem, usa Diarreia para as crianças acompanhadas em casa e Volume de líquidos inadequado para a criança internada com desidratação, e deixa claro que o diagnóstico do grupo vem da análise epidemiológica (NANDA-I, 2024-2026)",
    "peso": 0.3
   },
   {
    "eixo": "A",
    "item": "Encerra a investigação com relatório (definição de caso, curva, taxas de ataque, agente, hipótese, medidas e resultado), devolve a informação à creche, às famílias e às unidades de saúde, encerra no Sinan e não fornece nomes ao jornal, porque as autoridades garantem o sigilo das informações pessoais (PRC 4/2017, Anexo V, art. 7º)",
    "peso": 0.5
   }
  ]
 }
];
