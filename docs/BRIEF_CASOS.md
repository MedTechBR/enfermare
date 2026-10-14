# Brief — Casos de Processo de Enfermagem (aba "Casos", `pratica.js`) — 14/10/2026

A aba reproduz o raciocínio do Processo de Enfermagem (Res. COFEN 736/2024: Avaliação, Diagnóstico,
Planejamento, Implementação, Evolução) num caso que chega por etapas, e também serve à 2ª fase PRÁTICA da
ABENTI (3 casos clínicos simulados em estação) e ao estudo de caso da prova da ABEn. O aluno lê a abertura,
escreve o que faria em cada etapa, recebe os dados seguintes e, no fim, escreve o plano e se corrige por um
espelho com pesos. Leia antes `taxonomia.js` e a seção E de `docs/LEVANTAMENTO_PROVAS_NORMAS_2026-10.md`.
Veja o formato num exemplo do CirurgiaMed (só leitura): `~/Documents/Claude/cirurgiamed/pratica.js`.

## Formato de cada caso (objeto JSON; chaves nesta ordem)
`id` ("caso-<slug>"), `titulo` (substantivo, sem dois-pontos), `area` (id de taxonomia.js), `cenario`
(aps, enf, emg, cc, uti, ger), `tempo` (minutos sugeridos: 15 a 25), `abertura` (setor, paciente, dados
iniciais e o que se pede), `etapas` (3 a 5 objetos `{n, tarefa, entrega}`: `tarefa` = o que o aluno deve dizer
naquela etapa; `entrega` = os dados que chegam DEPOIS que ele cumpre a etapa; a última `entrega` pode ser
"Encerramento do caso."), `espelho` (8 a 12 itens `{eixo, item, peso}`).
- `eixo`: C = avaliação e raciocínio diagnóstico; H = intervenção e técnica; A = segurança, ética e registro.
  Use os três eixos. Pesos em décimos; a soma dos pesos de cada caso é EXATAMENTE 5,0.
- Cada item é uma ação ou decisão verificável ("Prioriza Risco de aspiração e eleva a cabeceira a 30 a 45 graus
  durante a dieta enteral"), não uma qualidade vaga. Item com número, prazo, dose ou norma cita a fonte e o ano
  entre parênteses.
- Diagnósticos de enfermagem: use títulos da NANDA-I 13ª ed. (2024–2026) que você tenha certeza de que
  existem; não copie definições nem características definidoras (direito autoral). Explique o raciocínio.
- Mostre o limite da atuação: o que é privativo do enfermeiro, o que é delegável ao técnico, o que exige o médico.

## Casos a escrever (8, um por linha)
1. Idoso com AVC isquêmico na enfermaria, disfagia e sonda nasoenteral (adulto, enf)
2. Paciente em ventilação mecânica com sepse e noradrenalina (uti, uti) — no formato da estação da ABENTI
3. Lesão por pressão em calcâneo e região sacral em paciente acamado (feridas, enf)
4. Gestante de 30 semanas na consulta de pré-natal com PA 150/100 (mulher, aps)
5. Lactente de 9 meses na UBS com diarreia e desidratação (crianca, aps)
6. Pós-operatório imediato na sala de recuperação pós-anestésica (cirurgica, cc)
7. Usuário em crise com ideação suicida acolhido no CAPS (mental, aps)
8. Erro de medicação com potássio na unidade: notificação, comunicação e análise (seguranca, enf)

## Escrita e rigor
Sem travessão (—, –), sem emoji, sem markdown, sem "é importante ressaltar". Nenhum número, dose ou prazo de
memória: confira na fonte primária (norma, manual do MS/ANVISA, diretriz). Cota: no máximo 6 buscas web
(WebSearch + WebFetch) no total.

## Saída
Escreva SÓ `docs/casos_novos.json` (lista JSON dos 8 casos). Não edite pratica.js nem outros arquivos.
Antes de terminar rode e corrija até passar:
```
python3 -c "
import json;d=json.load(open('docs/casos_novos.json'));import re
tax=set(re.findall(r'\"id\":\"(\w+)\"',open('taxonomia.js').read()))
for c in d:
  assert c['area'] in tax and abs(sum(i['peso'] for i in c['espelho'])-5.0)<1e-6, c['id']
  assert {i['eixo'] for i in c['espelho']}=={'C','H','A'} and 3<=len(c['etapas'])<=5, c['id']
  assert '—' not in json.dumps(c,ensure_ascii=False), c['id']
print(len(d),'casos ok')"
```
Relatório final: casos, fontes conferidas com URL e o que ficou "a conferir".
