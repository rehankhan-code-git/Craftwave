/* ---------- Site config: change the brand in one place ---------- */
const SITE = {
  name: "NORTHPANE",
  accent: "STUDIO",
  email: "hello@northpane.example",
  tagline: "Considered websites, made slowly enough to be good.",
  year: new Date().getFullYear()
};

const PROJECTS = [
  { slug: "kora-atelier", name: "Kora Atelier", kind: "Fashion & Retail", tags: ["Online Store", "Mobile-First"], g: "g0",
    short: "A fabric-first storefront concept for a small-batch clothing label.",
    brief: "A self-initiated concept for a label that sells fewer, better pieces. The challenge was to make cloth and craft feel tangible on a phone, and to keep checkout down to a few taps.",
    results: ["A slide-over bag that stays out of the way", "Filtering by fabric, colour and size", "Stable layout while large photographs load"] },
  { slug: "tallybook", name: "Tallybook", kind: "Education", tags: ["Web App", "Dashboard"], g: "g1",
    short: "Attendance and class insights for colleges, concept stage.",
    brief: "A concept tool for faculty who want to take attendance in seconds and spot patterns early, without wrestling a spreadsheet.",
    results: ["One-tap marking that works offline", "Roll-ups by department and semester", "Printable monthly summaries"] },
  { slug: "hearth-and-grain", name: "Hearth & Grain", kind: "Interior Design", tags: ["Portfolio", "Editorial"], g: "g2",
    short: "A photography-led showcase for a residential interiors practice.",
    brief: "A concept portfolio where images lead and the text stays quiet, so each project reads like a page from a good magazine.",
    results: ["A masonry grid that respects image proportions", "Project pages with a before-and-after slider", "An enquiry form that asks about budget kindly"] },
  { slug: "solene-skin", name: "Solène Skin", kind: "Beauty", tags: ["Brand Site", "Shop"], g: "g3",
    short: "A calm, ingredient-led site for a skincare brand.",
    brief: "A concept site that explains what is in each product in plain language, instead of hiding behind buzzwords.",
    results: ["An ingredient explorer", "A simple routine builder", "Product pages ready for subscriptions"] },
  { slug: "northfold-dental", name: "Northfold Dental", kind: "Healthcare", tags: ["Business Site", "Local Search"], g: "g4",
    short: "A reassuring clinic site designed to turn searches into bookings.",
    brief: "A concept clinic website built around clear services, honest pricing and the quickest possible route to an appointment.",
    results: ["A booking request in under half a minute", "Local business markup for search engines", "Quick loading on mid-range phones"] }
];

/* the five movements shown on the rotating drum */
const STAGES = [
  { n: "Listen", r: "I", t: "We begin with your goals, your customers and your constraints, and write them down in plain language.",
    icon: '<circle cx="30" cy="30" r="4"/><path d="M20 20a14 14 0 0 0 0 20M40 20a14 14 0 0 1 0 20M14 14a22 22 0 0 0 0 32M46 14a22 22 0 0 1 0 32"/>' },
  { n: "Shape", r: "II", t: "Structure and wording come before visuals: what each page says, and in what order it says it.",
    icon: '<rect x="8" y="8" width="44" height="44" rx="2"/><path d="M8 22h44M22 22v30M8 36h14"/>' },
  { n: "Make", r: "III", t: "Design and build move side by side, so nothing gets lost between a mock-up and the real thing.",
    icon: '<rect x="12" y="12" width="36" height="36"/><rect x="20" y="20" width="20" height="20" transform="rotate(45 30 30)"/>' },
  { n: "Refine", r: "IV", t: "Spacing, motion and speed are tuned until the details stop being noticed and the whole simply feels right.",
    icon: '<path d="M10 18h40M10 30h40M10 42h40"/><circle cx="22" cy="18" r="3.5"/><circle cx="38" cy="30" r="3.5"/><circle cx="28" cy="42" r="3.5"/>' },
  { n: "Release", r: "V", t: "We launch, hand everything over, and stay close for a short while as the site settles in.",
    icon: '<path d="M30 52V12M16 26 30 12 44 26"/><path d="M12 56h36"/>' }
];

const FAQS = [
  ["How much does a website cost?", "It depends on scope. After a short call we send a fixed quote, so you know the number before any work begins."],
  ["Do you write the copy?", "We can write it, shape it with you, or work alongside your own writer. Good wording is half of a good site."],
  ["Who owns the finished site?", "You do. The code, design files and domain are handed over to you at launch."],
  ["Will it work well on phones?", "Yes. Every page is designed for small screens first, then tested on mid-range devices and slower connections."],
  ["What happens after launch?", "A short support period is included. Ongoing care and updates are available if you want them, but never required."]
];

/* ---------- shared header / footer ---------- */
const NAV = [["work.html", "Work"], ["services.html", "Services"], ["process.html", "Method"], ["about.html", "About"], ["contact.html", "Contact"]];
function mountChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([h, l]) => `<li><a href="${h}" class="${here === h ? "on" : ""}">${l}</a></li>`).join("");
  const header = document.createElement("header");
  header.className = "nav";
  header.innerHTML = `<div class="wrap"><a class="brand" href="index.html">${SITE.name}<i>·</i></a>
    <ul id="menu">${links}</ul>
    <a class="btn primary cta" href="contact.html">Begin a project</a>
    <button class="burger" aria-label="Menu" id="burger">☰</button></div>`;
  document.body.prepend(header);
  document.getElementById("burger").onclick = () => document.getElementById("menu").classList.toggle("open");

  const f = document.createElement("footer");
  f.innerHTML = `<div class="wrap"><div class="fgrid">
    <div><a class="brand" href="index.html">${SITE.name}<i>·</i></a><p style="margin-top:14px;max-width:300px">${SITE.tagline}</p><p style="margin-top:14px">${SITE.email}</p></div>
    <div><h4>Studies</h4><ul>${PROJECTS.slice(0, 4).map(p => `<li><a href="case.html?p=${p.slug}">${p.name}</a></li>`).join("")}<li><a href="work.html">All work</a></li></ul></div>
    <div><h4>Services</h4><ul><li><a href="services.html">Brand websites</a></li><li><a href="services.html">Online stores</a></li><li><a href="services.html">Campaign pages</a></li><li><a href="services.html">Rebuilds</a></li></ul></div>
    <div><h4>Studio</h4><ul><li><a href="process.html">Method</a></li><li><a href="about.html">About</a></li><li><a href="faq.html">Questions</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    </div><p class="copy">© ${SITE.year} ${SITE.name} ${SITE.accent}. Work marked as concept is self-initiated.</p></div>`;
  document.body.appendChild(f);
}

/* ---------- reveal on scroll ---------- */
function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
}

/* ---------- stat count-up ---------- */
function stats() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const to = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length, suf = el.dataset.suffix || "";
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      (function step(t) { const k = Math.min(1, (t - t0) / 1200); el.textContent = (to * (1 - Math.pow(1 - k, 3))).toFixed(dec) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
    }); io.observe(el);
  });
}

/* ---------- scroll-driven rotating drum ---------- */
function drum() {
  const pin = document.getElementById("pin"); if (!pin) return;
  const rig = document.getElementById("rig"), tabs = document.getElementById("tabs"), info = document.getElementById("info"), prog = document.getElementById("prog");
  rig.innerHTML = '<div class="axis"></div><div class="ring"></div>' + STAGES.map((s, i) =>
    `<div class="panel" style="--i:${i}"><small>${s.r}</small><svg viewBox="0 0 60 60" aria-hidden="true">${s.icon}</svg><span>${s.n}</span></div>`).join("");
  tabs.innerHTML = STAGES.map((s, i) => `<button data-i="${i}">${s.n}</button>`).join("");
  const panels = [...rig.querySelectorAll(".panel")], btns = [...tabs.children];
  let last = -1;
  const span = () => pin.offsetHeight - innerHeight;
  const top = () => pin.getBoundingClientRect().top + scrollY;
  function set(p) {
    p = Math.max(0, Math.min(1, p));
    const f = p * 4, idx = Math.round(f);
    rig.style.setProperty("--rot", (-f * 72) + "deg");
    prog.style.width = (p * 100) + "%";
    panels.forEach((el, i) => { el.style.opacity = Math.max(.22, 1 - Math.abs(f - i) * .5); });
    if (idx !== last) {
      last = idx;
      panels.forEach((el, i) => el.classList.toggle("active", i === idx));
      btns.forEach((b, i) => b.classList.toggle("on", i === idx));
      info.innerHTML = `<small>${STAGES[idx].r} / V</small><h3>${STAGES[idx].n}</h3><p>${STAGES[idx].t}</p>`;
    }
  }
  const onScroll = () => set((scrollY - top()) / span());
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  tabs.onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    const y = top() + (b.dataset.i / 4) * span() + 2;
    window.__lenis ? window.__lenis.scrollTo(y) : scrollTo({ top: y, behavior: "smooth" });
  };
  onScroll();
}

/* ---------- scrolling background + progress bar ---------- */
function scrollBackground() {
  const bg = document.createElement("div");
  bg.className = "bg";
  bg.innerHTML = '<div class="bg-grid"></div><div class="bg-orb o1"></div><div class="bg-orb o2"></div>';
  document.body.prepend(bg);
  const sp = document.createElement("div"); sp.className = "sp"; document.body.prepend(sp);
  const grid = bg.children[0], o1 = bg.children[1], o2 = bg.children[2];
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  function frame() {
    ticking = false;
    const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - innerHeight), k = y / max;
    grid.style.transform = `translate3d(0,${-(y * .15) % 90}px,0)`;
    o1.style.transform = `translate3d(${Math.sin(k * 6) * 6}vw,${y * .22}px,0)`;
    o2.style.transform = `translate3d(${Math.cos(k * 6) * -6}vw,${-y * .14}px,0)`;
    sp.style.width = (k * 100) + "%";
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();
}

/* ---------- project cards ---------- */
function projectCard(p) {
  return `<a class="proj" href="case.html?p=${p.slug}" data-reveal><div class="thumb ${p.g}"><b>${p.name}</b></div>
    <div class="meta"><small>Concept · ${p.kind}</small><p>${p.short}</p></div></a>`;
}
function mountProjects() {
  const home = document.getElementById("home-work"), all = document.getElementById("all-work");
  if (home) home.innerHTML = PROJECTS.slice(0, 4).map(projectCard).join("");
  if (all) all.innerHTML = PROJECTS.map(projectCard).join("");
}

/* ---------- case study page ---------- */
function mountCase() {
  const root = document.getElementById("case"); if (!root) return;
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(x => x.slug === slug), p = PROJECTS[i];
  if (!p) { root.innerHTML = `<h1>Study not found</h1><p class="lead" style="margin-top:14px">Head back to the <a href="work.html" style="color:var(--accent)">work page</a>.</p>`; return; }
  document.title = p.name + " — " + SITE.name;
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  root.innerHTML = `<span class="eyebrow">Concept · ${p.kind}</span><h1>${p.name}</h1><p class="lead" style="margin-top:16px">${p.short}</p>
    <div class="case-cover ${p.g}"></div>
    <div class="facts"><div><small>Focus</small>${p.tags.join(" · ")}</div><div><small>Status</small>Self-initiated concept</div><div><small>Built with</small>HTML · CSS · JavaScript</div></div>
    <div class="split"><div class="body"><h2 style="font-size:2.2rem">The idea</h2><p>${p.brief}</p></div>
    <div><h2 style="font-size:2.2rem">What it includes</h2>${p.results.map(r => `<div class="val"><p>${r}</p></div>`).join("")}</div></div>
    <div class="row"><a class="btn" href="work.html">← All work</a><a class="btn primary" href="case.html?p=${next.slug}">Next: ${next.name} →</a></div>`;
}

/* ---------- FAQ ---------- */
function mountFaq() {
  document.querySelectorAll(".faq-list").forEach(el => {
    el.innerHTML = FAQS.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
  });
}

/* ---------- contact form (front-end only) ---------- */
function mountForm() {
  const f = document.getElementById("brief"); if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    // Hook a real backend here (Formspree, Web3Forms, your own API). Until then: open a prefilled email.
    const body = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join("\n");
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(body)}`;
    document.getElementById("ok").style.display = "block";
    f.reset();
  });
}

/* ---------- word-by-word headline reveal ---------- */
function splitHeadings() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll("h1, h2").forEach(h => {
    if (h.dataset.split) return;
    h.removeAttribute("data-reveal");
    let n = 0;
    const walk = node => {
      [...node.childNodes].forEach(c => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "wd";
            const s = document.createElement("span"); s.textContent = part; s.style.setProperty("--d", n++);
            w.appendChild(s); frag.appendChild(w);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1 && c.tagName !== "BR") walk(c);
      });
    };
    walk(h);
    h.dataset.split = "1";
    io.observe(h);
  });
}

/* ---------- smooth inertial scroll (Lenis, optional) ---------- */
function smoothScroll() {
  if (typeof Lenis === "undefined" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const l = new Lenis({ lerp: .09 });
  window.__lenis = l;
  (function raf(t) { l.raf(t); requestAnimationFrame(raf); })(performance.now());
}

/* ---------- custom cursor + magnetic buttons ---------- */
function cursorFX() {
  if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("div"); c.className = "cur"; document.body.appendChild(c);
  let tx = 0, ty = 0, x = 0, y = 0;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; c.classList.add("on"); });
  document.addEventListener("pointerleave", () => c.classList.remove("on"));
  (function loop() { x += (tx - x) * .18; y += (ty - y) * .18; c.style.transform = `translate3d(${x}px,${y}px,0)`; requestAnimationFrame(loop); })();
  document.addEventListener("pointerover", e => { c.classList.toggle("big", !!e.target.closest("a,button,summary,.proj")); });
  document.querySelectorAll(".btn").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`; });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
}

/* ---------- brand preloader (first visit per session) ---------- */
function preloader() {
  let seen = false; try { seen = sessionStorage.getItem("np_seen") === "1"; sessionStorage.setItem("np_seen", "1"); } catch (e) {}
  if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const p = document.createElement("div"); p.className = "pre"; p.innerHTML = `<span>${SITE.name}</span>`;
  document.body.appendChild(p);
  setTimeout(() => p.classList.add("out"), 1300);
  setTimeout(() => p.remove(), 2400);
}

document.addEventListener("DOMContentLoaded", () => {
  scrollBackground(); mountChrome(); mountProjects(); mountCase(); mountFaq(); mountForm();
  splitHeadings(); drum(); stats(); reveal();
  smoothScroll(); cursorFX(); preloader();
});
