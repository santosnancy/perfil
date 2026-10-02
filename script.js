/* ============================================================
   Carlos Lopes dos Santos — Perfil online bilingue (PT / EN)
   JavaScript puro (sem bibliotecas externas)
   ============================================================ */
(function () {
  "use strict";

  /* ================= Dicionário PT / EN ================= */
  var I18N = {
    pt: {
      "meta.title": "Carlos Lopes dos Santos — Engenheiro de Software | Python & Django",
      "meta.desc": "Perfil profissional de Carlos Lopes dos Santos, engenheiro de software angolano especializado em Python, Django, sistemas de gestão e websites institucionais.",
      "nav.about": "Sobre", "nav.skills": "Competências", "nav.projects": "Projetos",
      "nav.experience": "Experiência", "nav.contact": "Contactar",
      "hero.kicker": "Engenheiro de Software · Cazenga, Luanda — Angola",
      "hero.sub": "Transformo problemas reais de escolas, empresas e instituições em software prático: sistemas de gestão, websites e plataformas em <strong>Python &amp; Django</strong> — rápidos, leves e pensados para funcionar bem no contexto angolano, mesmo com internet fraca.",
      "hero.btnProjects": "Ver projetos", "hero.btnCv": "Descarregar CV",
      "stats.years": "anos de experiência", "stats.projects": "projetos entregues",
      "stats.countries": "países: Angola e Uganda", "stats.tech": "tecnologias principais",
      "profile.alt": "Fotografia de Carlos Lopes dos Santos",
      "profile.role": "Software Engineer · Python / Django",
      "terminal.title": "perfil.py — terminal",
      "about.tag": "01 · Sobre mim", "about.title": "Software com propósito, feito para o terreno",
      "about.p1": "Sou engenheiro de software formado pela <strong>Universidade de Bugema</strong> (Kampala, Uganda), com certificação <strong>CCNA</strong> e uma carreira construída entre o Uganda e Angola — do desenvolvimento de software e apoio TIC em universidades e organizações, ao ensino técnico e a projetos de literacia digital.",
      "about.p2": "Hoje concentro-me em criar <strong>sistemas de gestão e plataformas web em Python/Django</strong>: gestão escolar, portais institucionais e municipais, ferramentas para agentes bancários e soluções de saúde digital. O meu princípio é simples: o software tem de resolver o problema de quem o usa todos os dias — com poucos cliques, sem depender de ligações caras e sem complicar o que devia ser simples.",
      "about.p3": "Também trabalho com formação: já apoiei professores em literacia digital e e-learning (ADPP, Malanje) e lecionei informática e inglês no ensino técnico (ITPSF).",
      "info.title": "Dados rápidos", "info.locLabel": "Localização", "info.loc": "Cazenga, Luanda — Angola",
      "info.phoneLabel": "Telefone", "info.areasLabel": "Áreas", "info.areas": "Web, Desktop, SaaS, TIC &amp; Redes",
      "info.availLabel": "Disponível para", "info.avail": "Projetos, consultoria e parcerias",
      "skills.tag": "02 · Competências", "skills.title": "A minha caixa de ferramentas",
      "skills.c1": "Backend &amp; Dados", "skills.c3": "Desktop &amp; Entrega", "skills.c4": "Redes &amp; Sistemas",
      "skills.responsive": "Design responsivo", "skills.tkinter": "Tkinter (apps desktop)",
      "skills.tests": "Testes &amp; validação", "skills.networks": "Redes (CCNA)", "skills.support": "Suporte TIC",
      "chips.rest": "APIs REST", "chips.automation": "Automação", "chips.light": "Interfaces leves",
      "chips.nocdn": "Sem CDNs", "chips.installers": "Instaladores", "chips.licensing": "Licenciamento offline",
      "chips.training": "Formação de utilizadores", "chips.maintenance": "Manutenção",
      "projects.tag": "03 · Projetos", "projects.title": "Projetos em destaque", "filter.all": "Todos",
      "proj1.kind": "Desktop · Educação",
      "proj1.desc": "Sistema completo de gestão escolar para Windows: estudantes, notas, propinas, documentos oficiais, exames e licenciamento offline por máquina.",
      "proj2.kind": "SaaS · Educação",
      "proj2.desc": "Plataforma multi-escola na nuvem: matrículas, pagamentos Multicaixa, documentos com verificação por QR, relatórios oficiais e portal das famílias.",
      "proj3.kind": "Web · Portal provincial",
      "proj3.desc": "Portal digital da província de Malanje: serviços ao cidadão, saúde com triagem de sintomas e marcação de consultas, notícias e gestão municipal — bilingue PT/EN.",
      "proj4.kind": "SaaS · Finanças", "tag.reports": "Relatórios",
      "proj4.desc": "Gestão diária para agentes bancários correspondentes: float, cartões, movimentos, fecho de caixa e leitura inteligente da operação.",
      "proj5.kind": "Web · Saúde",
      "proj5.desc": "Sistema PACS para imagem médica sobre o motor DICOM Orthanc: estudos, visualização e fluxo clínico pensado para hospitais com recursos limitados.",
      "proj6.kind": "Web · Institucional", "tag.design": "Design próprio", "tag.responsive": "Responsivo",
      "proj6.desc": "Websites institucionais completos em Django: admissões e candidaturas online, documentos, notícias, galerias e páginas de departamentos.",
      "exp.tag": "04 · Percurso", "exp.title": "Experiência &amp; formação",
      "exp1.when": "Abr — Ago 2026", "exp1.h3": "Barragem Hidroelétrica de Caculo Cabaça — Cuanza Norte",
      "exp1.p": "Ajudante no Departamento de Electromecânica, em ambiente industrial de grande escala.",
      "exp2.when": "Nov 2024 — Fev 2025", "exp2.h3": "ADPP — Projeto de Melhoria da Educação nas Zonas Rurais · Mucari, Malanje",
      "exp2.p": "Engenheiro Informático e organizador local: componente de e-learning e literacia digital para professores.",
      "exp3.p": "Professor de Inglês e Técnico de Informática: ensino técnico e apoio aos sistemas da instituição.",
      "exp4.h3": "Uganda — Software &amp; TIC",
      "exp4.p": "Engenheiro de Software na Perfect Pictures Media; Assistente TIC na Universidade Makerere; voluntário TIC no campo de refugiados de Rwamwanja.",
      "exp5.h3": "Universidade de Bugema — Kampala, Uganda",
      "exp5.p": "Licenciatura em Engenharia de Software. Certificação <strong>CCNA</strong> (2018).",
      "contact.title": "Vamos construir alguma coisa?",
      "contact.text": "Precisas de um website, de um sistema de gestão ou de apoio TIC para a tua instituição? Fala comigo — respondo em português e em inglês.",
      "contact.cvLink": "CV em PDF",
      "foot.rights": "© 2026 Carlos Lopes dos Santos · Cazenga, Luanda — Angola",
      "foot.note": "Feito com HTML, CSS e JavaScript — sem frameworks, leve e rápido.",
      "roles": ["Desenvolvedor Python", "Especialista em Django", "Criador de sistemas de gestão", "Engenheiro de Software", "Técnico de TIC &amp; Redes"],
      "terminalLines": [
        '<span class="tk-kw">&gt;&gt;&gt;</span> import carlos',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.stack',
        '<span class="tk-out">["Python", "Django", "JavaScript", "SQLite/PostgreSQL"]</span>',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.foco',
        '<span class="tk-str">"Sistemas práticos para escolas, empresas e instituições"</span>',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.disponivel_para_projetos',
        '<span class="tk-out">True</span>'
      ]
    },
    en: {
      "meta.title": "Carlos Lopes dos Santos — Software Engineer | Python & Django",
      "meta.desc": "Professional profile of Carlos Lopes dos Santos, an Angolan software engineer specialising in Python, Django, management systems and institutional websites.",
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.contact": "Contact me",
      "hero.kicker": "Software Engineer · Cazenga, Luanda — Angola",
      "hero.sub": "I turn real problems faced by schools, companies and institutions into practical software: management systems, websites and platforms built with <strong>Python &amp; Django</strong> — fast, lightweight and designed to work well in the Angolan context, even with a weak internet connection.",
      "hero.btnProjects": "View projects", "hero.btnCv": "Download CV",
      "stats.years": "years of experience", "stats.projects": "projects delivered",
      "stats.countries": "countries: Angola and Uganda", "stats.tech": "core technologies",
      "profile.alt": "Photo of Carlos Lopes dos Santos",
      "profile.role": "Software Engineer · Python / Django",
      "terminal.title": "profile.py — terminal",
      "about.tag": "01 · About me", "about.title": "Software with purpose, built for the field",
      "about.p1": "I am a software engineer who graduated from <strong>Bugema University</strong> (Kampala, Uganda), with a <strong>CCNA</strong> certification and a career built between Uganda and Angola — from software development and ICT support at universities and organisations, to technical teaching and digital literacy projects.",
      "about.p2": "Today I focus on building <strong>management systems and web platforms in Python/Django</strong>: school management, institutional and municipal portals, tools for banking correspondents and digital health solutions. My principle is simple: software must solve the problem of the people who use it every day — with few clicks, without depending on expensive connections, and without complicating what should be simple.",
      "about.p3": "I also work in training: I have supported teachers in digital literacy and e-learning (ADPP, Malanje) and taught IT and English in technical education (ITPSF).",
      "info.title": "Quick facts", "info.locLabel": "Location", "info.loc": "Cazenga, Luanda — Angola",
      "info.phoneLabel": "Phone", "info.areasLabel": "Areas", "info.areas": "Web, Desktop, SaaS, ICT &amp; Networks",
      "info.availLabel": "Available for", "info.avail": "Projects, consulting and partnerships",
      "skills.tag": "02 · Skills", "skills.title": "My toolbox",
      "skills.c1": "Backend &amp; Data", "skills.c3": "Desktop &amp; Delivery", "skills.c4": "Networks &amp; Systems",
      "skills.responsive": "Responsive design", "skills.tkinter": "Tkinter (desktop apps)",
      "skills.tests": "Testing &amp; validation", "skills.networks": "Networks (CCNA)", "skills.support": "ICT support",
      "chips.rest": "REST APIs", "chips.automation": "Automation", "chips.light": "Lightweight interfaces",
      "chips.nocdn": "No CDNs", "chips.installers": "Installers", "chips.licensing": "Offline licensing",
      "chips.training": "User training", "chips.maintenance": "Maintenance",
      "projects.tag": "03 · Projects", "projects.title": "Featured projects", "filter.all": "All",
      "proj1.kind": "Desktop · Education",
      "proj1.desc": "Complete school management system for Windows: students, grades, fees, official documents, exams and per-machine offline licensing.",
      "proj2.kind": "SaaS · Education",
      "proj2.desc": "Multi-school cloud platform: enrolments, Multicaixa payments, documents with QR verification, official reports and a family portal.",
      "proj3.kind": "Web · Provincial portal",
      "proj3.desc": "Digital portal for the province of Malanje: citizen services, health with symptom triage and appointment booking, news and municipal management — bilingual PT/EN.",
      "proj4.kind": "SaaS · Finance", "tag.reports": "Reports",
      "proj4.desc": "Daily management for banking correspondent agents: float, cards, transactions, cash closing and a smart reading of the operation.",
      "proj5.kind": "Web · Health",
      "proj5.desc": "PACS system for medical imaging on top of the Orthanc DICOM engine: studies, viewing and a clinical workflow designed for hospitals with limited resources.",
      "proj6.kind": "Web · Institutional", "tag.design": "Custom design", "tag.responsive": "Responsive",
      "proj6.desc": "Complete institutional websites in Django: online admissions and applications, documents, news, galleries and department pages.",
      "exp.tag": "04 · Journey", "exp.title": "Experience &amp; education",
      "exp1.when": "Apr — Aug 2026", "exp1.h3": "Caculo Cabaça Hydroelectric Dam — Cuanza Norte",
      "exp1.p": "Assistant in the Electromechanical Department, in a large-scale industrial environment.",
      "exp2.when": "Nov 2024 — Feb 2025", "exp2.h3": "ADPP — Rural Education Improvement Project · Mucari, Malanje",
      "exp2.p": "IT Engineer and local organiser: e-learning component and digital literacy for teachers.",
      "exp3.p": "English teacher and IT Technician: technical teaching and support for the institution's systems.",
      "exp4.h3": "Uganda — Software &amp; ICT",
      "exp4.p": "Software Engineer at Perfect Pictures Media; ICT Assistant at Makerere University; ICT volunteer at the Rwamwanja refugee settlement.",
      "exp5.h3": "Bugema University — Kampala, Uganda",
      "exp5.p": "Bachelor's degree in Software Engineering. <strong>CCNA</strong> certification (2018).",
      "contact.title": "Shall we build something?",
      "contact.text": "Do you need a website, a management system or ICT support for your institution? Talk to me — I reply in Portuguese and in English.",
      "contact.cvLink": "CV (PDF)",
      "foot.rights": "© 2026 Carlos Lopes dos Santos · Cazenga, Luanda — Angola",
      "foot.note": "Built with HTML, CSS and JavaScript — no frameworks, lightweight and fast.",
      "roles": ["Python Developer", "Django Specialist", "Management Systems Builder", "Software Engineer", "ICT &amp; Networks Technician"],
      "terminalLines": [
        '<span class="tk-kw">&gt;&gt;&gt;</span> import carlos',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.stack',
        '<span class="tk-out">["Python", "Django", "JavaScript", "SQLite/PostgreSQL"]</span>',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.focus',
        '<span class="tk-str">"Practical systems for schools, companies and institutions"</span>',
        '<span class="tk-kw">&gt;&gt;&gt;</span> carlos.available_for_projects',
        '<span class="tk-out">True</span>'
      ]
    }
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LANG = "pt";

  /* ---------- Menu móvel ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Barra de progresso + botão "voltar ao topo" ---------- */
  var progress = document.getElementById("scrollProgress");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (toTop) toTop.classList.toggle("show", h.scrollTop > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Efeito de escrita: funções no hero ---------- */
  var typedEl = document.getElementById("typedRole");
  var typeTimer = null;
  function startTyping() {
    if (!typedEl) return;
    if (typeTimer) { clearTimeout(typeTimer); typeTimer = null; }
    var roles = I18N[LANG]["roles"];
    if (reduceMotion) { typedEl.innerHTML = roles[0]; return; }
    var ri = 0, ci = 0, deleting = false;
    (function typeLoop() {
      var word = roles[ri].replace(/&amp;/g, "&");
      typedEl.textContent = word.slice(0, ci);
      var delay = deleting ? 38 : 78;
      if (!deleting && ci === word.length) { delay = 1700; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 350; }
      ci += deleting ? -1 : 1;
      typeTimer = setTimeout(typeLoop, delay);
    })();
  }

  /* ---------- Terminal animado ---------- */
  var terminal = document.getElementById("terminalBody");
  var termTimer = null;
  function renderTerminal() {
    if (!terminal) return;
    if (termTimer) { clearTimeout(termTimer); termTimer = null; }
    var lines = I18N[LANG]["terminalLines"];
    terminal.innerHTML = "";
    if (reduceMotion) { terminal.innerHTML = lines.join("\n"); return; }
    var li = 0;
    (function nextLine() {
      if (li >= lines.length) {
        terminal.innerHTML += '\n<span class="tk-kw">&gt;&gt;&gt;</span> <span class="caret"></span>';
        return;
      }
      terminal.innerHTML += (li > 0 ? "\n" : "") + lines[li];
      li++;
      termTimer = setTimeout(nextLine, 620);
    })();
  }

  /* ---------- Mudar de língua ---------- */
  function setLanguage(lang) {
    if (!I18N[lang]) lang = "pt";
    LANG = lang;
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });
    document.title = dict["meta.title"];
    var meta = document.getElementById("metaDesc");
    if (meta) meta.setAttribute("content", dict["meta.desc"]);
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("perfil-lang", lang); } catch (e) {}
    startTyping();
    renderTerminal();
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  /* Língua inicial: ?lang= na URL > guardada > português */
  var initial = "pt";
  try {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q && I18N[q]) initial = q;
    else {
      var saved = localStorage.getItem("perfil-lang");
      if (saved && I18N[saved]) initial = saved;
    }
  } catch (e) {}
  setLanguage(initial);

  /* ---------- Fundo: rede de partículas ---------- */
  var canvas = document.getElementById("bgCanvas");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var pts = [], W = 0, H = 0, raf = null;
    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      var n = Math.min(70, Math.floor(W / 20));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.6,
          yellow: Math.random() < 0.22
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      var i, j, p, q, dx, dy, d;
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.yellow ? "rgba(255,211,67,0.75)" : "rgba(91,155,213,0.7)";
        ctx.fill();
        for (j = i + 1; j < pts.length; j++) {
          q = pts[j]; dx = p.x - q.x; dy = p.y - q.y; d = dx * dx + dy * dy;
          if (d < 120 * 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(75,139,190," + (0.14 * (1 - d / 14400)) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    resize();
    draw();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = null; }
      else if (!raf) draw();
    });
  }

  /* ---------- Revelar ao fazer scroll ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("visible");
        el.querySelectorAll(".count").forEach(animateCount);
        el.querySelectorAll(".track i").forEach(function (bar) {
          bar.style.width = bar.getAttribute("data-level") + "%";
        });
        io.unobserve(el);
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
      el.querySelectorAll(".count").forEach(animateCount);
      el.querySelectorAll(".track i").forEach(function (bar) {
        bar.style.width = bar.getAttribute("data-level") + "%";
      });
    });
  }

  /* ---------- Filtro de projetos ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".project-card");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var cats = (card.getAttribute("data-category") || "").split(" ");
        var show = f === "todos" || cats.indexOf(f) !== -1;
        card.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- Efeito tilt 3D nos cartões ---------- */
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (fine && !reduceMotion) {
    document.querySelectorAll(".tilt").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(900px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "perspective(900px)";
      });
    });
  }
})();
