/* ============================================================
   Conquistas do Enfermare (22/10/2026): os emblemas e de onde sai cada número.
   Motor: mtconquistas.js (cópia fiel de ~/Documents/Claude/_mtconquistas/, não editar aqui). Carregar DEPOIS do
   script principal do index.html: usa ST, QIDX, ER, okH, PRATICA, LEITURAS, PREF e irAba de lá.
   Questões por dia saem do próprio histórico de respostas (ST.resp[ch].hist[].d), que já sincroniza:
   não há contador separado para dessincronizar.
   Um dia conta para a ofensiva com 5+ questões no dia OU uma sessão concluída de cartões ou de caso clínico.
   Chaves: ef_conq {id: momento} e ef_dias {"AAAA-MM-DD": n}, coleções "conq" e "dias" (mapa) no nuvem.js.
   ============================================================ */
(function () {
  "use strict";
  if (!window.MTConquistas) return;

  var FIM = function (n, alvo, un) { return Math.min(n, alvo) + " de " + alvo + (un ? " " + un : ""); };
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

  /* questões respondidas por dia, a partir do histórico (inclui as tiradas do ar: o estudo aconteceu) */
  function porDia() {
    var out = {};
    Object.keys(ST.resp || {}).forEach(function (ch) {
      ((ST.resp[ch] || {}).hist || []).forEach(function (h) {
        var d = h.d || (h.ts ? iso(new Date(h.ts)) : "");
        if (d) out[d] = (out[d] || 0) + 1;
      });
    });
    return out;
  }

  /* ---------- dados do app, calculados uma vez por avaliação ---------- */
  function ctx() {
    var c = { n: 0, reais: 0, maxSeq: 0, noite: false, cedo: false, recup: 0, temas: {} };
    var lista = [];
    Object.keys(ST.resp || {}).forEach(function (ch) {
      var h = (ST.resp[ch] || {}).hist || [];
      if (!h.length || ER.oculta(ch)) return;
      var q = QIDX.get(ch); if (!q) return;
      c.n++; if (q.fonte) c.reais++;
      var tm = c.temas[q.tema] || (c.temas[q.tema] = { f: 0, a: 0 });
      tm.f++; if (okH(q, h[h.length - 1])) tm.a++;          /* acerto pela última tentativa, como no Desempenho */
      var errou = false, voltou = false;
      h.forEach(function (x) {
        var ok = okH(q, x);
        if (!ok) errou = true; else if (errou) voltou = true;
        if (x.ts) {
          lista.push({ t: x.ts, ok: ok });
          var hr = new Date(x.ts).getHours();
          if (hr >= 23 || hr < 4) c.noite = true;
          if (hr >= 4 && hr < 6) c.cedo = true;
        }
      });
      if (voltou) c.recup++;
    });
    lista.sort(function (x, y) { return x.t - y.t; });
    var run = 0; lista.forEach(function (x) { run = x.ok ? run + 1 : 0; if (run > c.maxSeq) c.maxSeq = run; });

    var dias = porDia();
    c.maxDia = 0; Object.keys(dias).forEach(function (k) { if (dias[k] > c.maxDia) c.maxDia = dias[k]; });
    /* sábado e domingo seguidos, ambos com estudo de verdade */
    c.fds = Object.keys(dias).some(function (k) {
      if (dias[k] < 5) return false;
      var d = new Date(k + "T12:00:00"); if (d.getDay() !== 6) return false;
      d.setDate(d.getDate() + 1);
      return (dias[iso(d)] || 0) >= 5;
    });

    /* simulados concluídos (ST.sim guarda n, acertos, prova e as respostas) */
    var sims = Array.isArray(ST.sim) ? ST.sim : [];
    c.sims = sims.length; c.melhorSim = 0; c.caderno = false;
    sims.forEach(function (s) {
      var n = +s.n || 0, resp = Object.keys(s.res || {}).length;
      if (n >= 20) c.melhorSim = Math.max(c.melhorSim, (+s.acertos || 0) / n);
      if (((s.prova === "enare" && n >= 100) || (s.prova === "integra" && n >= 30)) && resp >= 0.9 * n) c.caderno = true;
    });

    /* casos clínicos com espelho aberto, cartões dominados e leituras concluídas */
    var tr = ST.treino || {};
    c.casos = PRATICA.filter(function (e) { return tr[e.id] && tr[e.id].quando; }).length;
    c.casosTot = PRATICA.length;
    c.dominados = Object.keys(ST.flash || {}).filter(function (k) { var e = ST.flash[k] || {}; return (e.n || 0) >= 3 && (e.int || 0) >= 7; }).length;
    c.lidas = Object.keys(ST.lidas || {}).filter(function (k) { return ST.lidas[k]; }).length;
    c.lidasTot = LEITURAS.filter(function (l) { return l.f; }).length;
    return c;
  }

  /* ---------- fábricas de teste ---------- */
  function conta(campo, alvo, un) {
    return function (c) { var v = +c[campo] || 0; return { ok: v >= alvo, p: v / alvo, txt: FIM(v, alvo, un) }; };
  }
  function seq(alvo) {
    return function (c) {
      var o = c.ofensiva, v = Math.max(o.max, o.atual);
      return { ok: v >= alvo, p: o.atual / alvo, txt: o.atual ? o.atual + " de " + alvo + " dias seguidos" : alvo + " dias seguidos de estudo" };
    };
  }
  /* domínio: 20+ questões feitas nas áreas do grupo e 75%+ de acerto */
  function dominio(areas) {
    return function (c) {
      var f = 0, a = 0;
      areas.forEach(function (k) { var t = c.temas[k]; if (t) { f += t.f; a += t.a; } });
      var tx = f ? a / f : 0;
      if (f < 20) return { ok: false, p: 0.5 * f / 20, txt: f + " de 20 questões feitas" };
      return { ok: tx >= 0.75, p: 0.5 + 0.5 * Math.min(1, tx / 0.75), txt: Math.round(100 * tx) + "% de acerto em " + f + " (meta 75%)" };
    };
  }
  var sim = function (v) { return { ok: !!v, p: v ? 1 : 0, txt: "" }; };
  var todos = function (campo, tot, un) {
    return function (c) { var t = c[tot] || 0; return { ok: t > 0 && c[campo] >= t, p: t ? c[campo] / t : 0, txt: FIM(c[campo], t, un) }; };
  };

  var E = [
    /* sequência de dias */
    { id: "seq3", fam: "seq", icone: "hospital", nome: "Primeiro plantão", desc: "3 dias seguidos de estudo", frase: "Três dias seguidos. O primeiro plantão já passou.", teste: seq(3) },
    { id: "seq5", fam: "seq", icone: "setas", nome: "Passagem de plantão", desc: "5 dias seguidos de estudo", frase: "Cinco dias sem perder a continuidade.", teste: seq(5) },
    { id: "seq7", fam: "seq", icone: "calendario", nome: "Escala completa", desc: "7 dias seguidos de estudo", frase: "Uma semana inteira. Você ganhou uma folga para um dia difícil.", teste: seq(7) },
    { id: "seq14", fam: "seq", icone: "onda", nome: "Sinais vitais estáveis", desc: "14 dias seguidos de estudo", frase: "Duas semanas em ritmo regular.", teste: seq(14) },
    { id: "seq30", fam: "seq", icone: "ciclo", nome: "Sistematização", desc: "30 dias seguidos de estudo", frase: "Trinta dias. O estudo virou rotina organizada.", teste: seq(30) },
    { id: "seq60", fam: "seq", icone: "infinito", nome: "Cuidado contínuo", desc: "60 dias seguidos de estudo", frase: "Sessenta dias sem interromper o cuidado.", teste: seq(60) },
    { id: "seq100", fam: "seq", icone: "coroa", nome: "Referência técnica", desc: "100 dias seguidos de estudo", frase: "Cem dias seguidos. Pouca gente chega aqui.", teste: seq(100) },

    /* questões respondidas */
    { id: "q10", fam: "q", icone: "receita", nome: "Primeira prescrição de enfermagem", desc: "10 questões respondidas", frase: "As primeiras dez questões estão feitas.", teste: conta("n", 10, "questões") },
    { id: "q50", fam: "q", icone: "checklist", nome: "Admissão completa", desc: "50 questões respondidas", frase: "Cinquenta questões. O ritmo está pegando.", teste: conta("n", 50, "questões") },
    { id: "q100", fam: "q", icone: "formulario", nome: "Evolução registrada", desc: "100 questões respondidas", frase: "Cem questões respondidas e registradas.", teste: conta("n", 100, "questões") },
    { id: "q250", fam: "q", icone: "caixa", nome: "Carrinho conferido", desc: "250 questões respondidas", frase: "Duzentas e cinquenta questões. Tudo conferido.", teste: conta("n", 250, "questões") },
    { id: "q500", fam: "q", icone: "livros", nome: "Prontuário completo", desc: "500 questões respondidas", frase: "Quinhentas questões. O prontuário está cheio.", teste: conta("n", 500, "questões") },
    { id: "q1000", fam: "q", icone: "mil", nome: "Mil cuidados", desc: "1.000 questões respondidas", frase: "Mil questões respondidas.", teste: conta("n", 1000, "questões") },
    { id: "q2000", fam: "q", icone: "trofeu", nome: "Enfermagem baseada em evidência", desc: "2.000 questões respondidas", frase: "Duas mil. Você conhece o banco melhor do que a banca.", teste: conta("n", 2000, "questões") },
    { id: "r100", fam: "q", icone: "alvo", nome: "Caderno oficial", desc: "100 questões de provas reais", frase: "Cem questões tiradas de provas de verdade.", teste: conta("reais", 100, "reais") },
    { id: "r1000", fam: "q", icone: "olho", nome: "Banca conhecida", desc: "1.000 questões de provas reais", frase: "Mil questões de provas reais. A banca já não surpreende.", teste: conta("reais", 1000, "reais") },

    /* acerto */
    { id: "s10", fam: "acerto", icone: "estrela", nome: "Mão firme", desc: "10 acertos seguidos", frase: "Dez certas em sequência.", teste: conta("maxSeq", 10, "seguidas") },
    { id: "s25", fam: "acerto", icone: "raio", nome: "Punção de primeira", desc: "25 acertos seguidos", frase: "Vinte e cinco seguidas, sem errar nenhuma.", teste: conta("maxSeq", 25, "seguidas") },
    { id: "sim80", fam: "acerto", icone: "medidor", nome: "Acima do corte", desc: "80% ou mais num simulado de 20+ questões", frase: "Simulado com nota bem acima do corte.",
      teste: function (c) { return { ok: c.melhorSim >= 0.8, p: c.melhorSim / 0.8, txt: c.melhorSim ? "melhor nota: " + Math.round(100 * c.melhorSim) + "% (meta 80%)" : "Conclua um simulado com 80%" }; } },

    /* domínio por tema (áreas da taxonomia do app) */
    { id: "d-sus", fam: "dom", icone: "balanca", nome: "Lei 8.080", desc: "SUS: legislação e políticas de saúde", frase: "Universalidade, integralidade e equidade em dia.", teste: dominio(["sus"]) },
    { id: "d-vig", fam: "dom", icone: "sino", nome: "Notificação compulsória", desc: "Epidemiologia e vigilância em saúde", frase: "Indicador, surto e notificação sob controle.", teste: dominio(["coletiva"]) },
    { id: "d-inf", fam: "dom", icone: "bacteria", nome: "Rede de frio", desc: "Doenças transmissíveis, IST e imunização", frase: "Do calendário vacinal ao tratamento das infecções.", teste: dominio(["transmissiveis", "imuniza"]) },
    { id: "d-etica", fam: "dom", icone: "juramento", nome: "Código de Ética", desc: "Ética, bioética e legislação profissional", frase: "Lei do exercício profissional e Código de Ética em dia.", teste: dominio(["etica"]) },
    { id: "d-pe", fam: "dom", icone: "ciclo", nome: "Cinco etapas", desc: "Processo de Enfermagem e SAE", frase: "Avaliação, diagnóstico, planejamento, implementação e evolução.", teste: dominio(["sae"]) },
    { id: "d-fund", fam: "dom", icone: "calculadora", nome: "Beira do leito", desc: "Fundamentos, semiologia, farmacologia e cálculo", frase: "Técnica, exame físico e cálculo de dose sem tropeço.", teste: dominio(["fundamentos", "farmaco"]) },
    { id: "d-seg", fam: "dom", icone: "checklist", nome: "Seis metas", desc: "Segurança do paciente e controle de infecção", frase: "As metas de segurança do paciente bem aprendidas.", teste: dominio(["seguranca"]) },
    { id: "d-ferida", fam: "dom", icone: "maos", nome: "Cobertura certa", desc: "Feridas, curativos e estomas", frase: "Primeiro avaliar a ferida, depois escolher a cobertura.", teste: dominio(["feridas"]) },
    { id: "d-adulto", fam: "dom", icone: "hospital", nome: "Enfermaria em ordem", desc: "Saúde do adulto: clínica", frase: "Cuidado ao adulto internado sem ponto cego.", teste: dominio(["adulto"]) },
    { id: "d-cc", fam: "dom", icone: "tubo", nome: "Cirurgia segura", desc: "Centro cirúrgico, CME e perioperatório", frase: "Checklist, CME e recuperação anestésica dominados.", teste: dominio(["cirurgica"]) },
    { id: "d-crit", fam: "dom", icone: "gota", nome: "Paciente crítico", desc: "Terapia intensiva e urgência e emergência", frase: "UTI, sala vermelha e classificação de risco sob controle.", teste: dominio(["uti", "urgencia"]) },
    { id: "d-mulher", fam: "dom", icone: "laco", nome: "Rede Alyne", desc: "Saúde da mulher e obstetrícia", frase: "Pré-natal, parto e puerpério dominados.", teste: dominio(["mulher"]) },
    { id: "d-crianca", fam: "dom", icone: "estrela", nome: "Puericultura", desc: "Saúde da criança e do adolescente", frase: "Crescimento, desenvolvimento e vacinas da criança em dia.", teste: dominio(["crianca"]) },
    { id: "d-vida", fam: "dom", icone: "pessoas", nome: "Cuidado em rede", desc: "Saúde mental e saúde do idoso", frase: "RAPS e cuidado à pessoa idosa dominados.", teste: dominio(["mental", "idoso"]) },
    { id: "d-gestao", fam: "dom", icone: "rede", nome: "Gestão do cuidado", desc: "Gestão, educação e pesquisa", frase: "Dimensionamento, liderança e pesquisa sob controle.", teste: dominio(["gestao"]) },

    /* outras abas */
    { id: "sim1", fam: "abas", icone: "simulado", nome: "Primeiro simulado", desc: "Concluir um simulado", frase: "Prova inteira, do começo ao fim.", teste: conta("sims", 1, "simulado") },
    { id: "simcad", fam: "abas", icone: "medalha", nome: "Caderno inteiro", desc: "Simulado ENARE completo ou prova real na íntegra", frase: "Um caderno completo, no tempo da prova.",
      teste: function (c) { return sim(c.caderno); } },
    { id: "caso1", fam: "abas", icone: "maos", nome: "Primeiro caso", desc: "Um caso clínico com espelho de correção", frase: "Plano escrito e conferido com o espelho.", teste: conta("casos", 1, "caso") },
    { id: "casos", fam: "abas", icone: "pessoas", nome: "Processo completo", desc: "Todos os casos clínicos com espelho", frase: "Todos os casos do app, do histórico à evolução.", teste: todos("casos", "casosTot", "casos") },
    { id: "fc30", fam: "abas", icone: "cerebro", nome: "Revisão espaçada", desc: "30 cartões dominados", frase: "Trinta cartões que já não saem da cabeça.", teste: conta("dominados", 30, "dominados") },
    { id: "le5", fam: "abas", icone: "livros", nome: "Leitura de cabeceira", desc: "5 leituras concluídas", frase: "Cinco leituras do começo ao fim.", teste: conta("lidas", 5, "leituras") },
    { id: "letodas", fam: "abas", icone: "trilha", nome: "Biblioteca completa", desc: "Todas as leituras concluídas", frase: "A biblioteca inteira lida.", teste: todos("lidas", "lidasTot", "leituras") },

    /* surpresas (aparecem como "???" até sair) */
    { id: "noite", fam: "sur", icone: "lua", nome: "Plantão noturno", secreto: true, desc: "Estudou depois das 23h", frase: "Estudando de madrugada. Descanse também.", teste: function (c) { return sim(c.noite); } },
    { id: "cedo", fam: "sur", icone: "sol", nome: "Antes da passagem", secreto: true, desc: "Estudou antes das 6h", frase: "Antes de o sol nascer, já com questão feita.", teste: function (c) { return sim(c.cedo); } },
    { id: "maratona", fam: "sur", icone: "xicara", nome: "Plantão de 12 horas", secreto: true, desc: "100 questões num dia só", frase: "Cem questões num dia. Lembre da água.", teste: function (c) { return sim(c.maxDia >= 100); } },
    { id: "fds", fam: "sur", icone: "fds", nome: "Plantão de fim de semana", secreto: true, desc: "Estudou no sábado e no domingo seguidos", frase: "Sábado e domingo de estudo.", teste: function (c) { return sim(c.fds); } },
    { id: "recup", fam: "sur", icone: "antidoto", nome: "Reavaliação", secreto: true, desc: "20 questões que você errou e depois acertou", frase: "Vinte erros reavaliados e corrigidos.", teste: function (c) { return { ok: c.recup >= 20, p: c.recup / 20, txt: "" }; } }
  ];

  var CHAVE = PREF + "conq", CHAVE_DIAS = PREF + "dias";
  MTConquistas.init({
    chave: CHAVE,
    chaveDias: CHAVE_DIAS,
    dias: porDia,
    minQuestoes: 5,
    observa: [PREF + "resp", PREF + "sim", PREF + "treino", PREF + "flash", PREF + "lidas"],
    familias: [
      { id: "seq", nome: "Sequência de dias", icone: "chama" },
      { id: "q", nome: "Questões respondidas", icone: "receita" },
      { id: "acerto", nome: "Acertos", icone: "alvo" },
      { id: "dom", nome: "Domínio por tema (20+ questões e 75%+ de acerto)", icone: "medalha" },
      { id: "abas", nome: "Simulados, casos, cartões e leituras", icone: "simulado" },
      { id: "sur", nome: "Surpresas", icone: "segredo" }
    ],
    cores: { seq: "#C2410C", q: "#0F766E", acerto: "#B45309", dom: "#6D28D9", abas: "#1D4ED8", sur: "#BE185D" },
    emblemas: E,
    ctx: ctx,
    painel: "pnConq",
    atraso: 2e9,   /* a primeira avaliação espera a conta (abaixo), para o aviso de boas-vindas não sair antes do progresso chegar */
    abrePainel: function () { if (typeof irAba === "function") irAba("painel"); setTimeout(function () { var s = document.getElementById("pnConqSec"); if (s) s.scrollIntoView({ behavior: "smooth", block: "start" }); }, 120); }
  });

  /* primeira avaliação: quando a conta já trouxe o que tem no servidor, ou em 12 s (sem rede, sem login) */
  var t0 = Date.now(), espera = setInterval(function () {
    var pronto = typeof MTS !== "undefined" && MTS._sit && MTS._sit.doServidor;
    if (pronto || Date.now() - t0 > 12000) { clearInterval(espera); MTConquistas.avaliar(); }
  }, 500);

  /* O motor grava direto no localStorage; a conta (mtsync) só fica sabendo pelo NUVEM.mudou.
     Varredura leve a cada 4 s: se as chaves mudaram, avisa a conta. */
  var visto = {};
  function confere() {
    if (typeof NUVEM === "undefined") return;
    [["conq", CHAVE], ["dias", CHAVE_DIAS]].forEach(function (p) {
      var v = null; try { v = localStorage.getItem(p[1]); } catch (e) {}
      if (v !== null && v !== visto[p[0]]) { visto[p[0]] = v; NUVEM.mudou(p[0]); }
    });
  }
  setInterval(confere, 4000);
  addEventListener("pagehide", confere);
})();
