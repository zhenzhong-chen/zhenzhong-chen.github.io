/* ═══════════════════════════════════════════════════
   Rendering logic — fills the page with content from data.js.
   You usually don't need to edit this file.
   ═══════════════════════════════════════════════════ */

const $ = id => document.getElementById(id);

/* ── UI strings ──
   Defaults are English; a translated data file (e.g. js/data-cn.js) overrides any
   subset of them through SITE.ui, so both language versions share this renderer. */
const UI = Object.assign({
  toBeAdded:      "To be added",
  references:     "References",
  placeholderImg: "Project image (placeholder)",
  phdAlumniTitle: "Ph.D. Alumni",
  phdAlumniDesc:  "{n} Ph.D. graduates.",
  msAlumniTitle:  "M.Sc./M.Eng. Alumni",
  msAlumniDesc:   "{n} M.Sc./M.Eng. graduates supervised or co-supervised.",
  otherAlumniTitle: "Other Alumni",
  fullList:       "Full list on the IIP website",
  email:          "Email",
  phone:          "Phone",
  wechat:         "WeChat",
  postcode:       "Postcode"
}, SITE.ui || {});

/* Top bar & title (use meta.title directly; avoids name/title being duplicated) */
document.title = SITE.meta.title;
$("topbar-affiliation").textContent = SITE.meta.affiliation;
$("brand").innerHTML = `<span class="mark"></span>${SITE.meta.name}`;

/* Navigation */
$("menu").innerHTML = SITE.nav.map(([t, h]) => `<a href="${h}">${t}</a>`).join("");
$("nav-toggle").onclick = () => $("menu").classList.toggle("open");

/* Hero */
$("hero-eyebrow").textContent = SITE.hero.eyebrow;
$("hero-title").textContent = SITE.hero.title;
$("hero-lead").textContent = SITE.hero.lead;
$("hero-cta").textContent = SITE.hero.cta;
if (SITE.hero.image) $("hero-media").innerHTML = `<img src="${SITE.hero.image}" alt="hero">`;

/* Project cards */
$("project-grid").innerHTML = SITE.projects.map((g, i) => `
  <div class="gcard">
    <div class="thumb">${g.image ? `<img src="${g.image}">` : UI.placeholderImg}</div>
    <div class="body"><h3>${g.title}</h3><p>${g.desc}</p>
      <a class="textlink proj-detail" href="#" data-idx="${i}">Details →</a></div>
  </div>`).join("");

/* Project detail modal (floating panel) */
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-panel" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="Close">×</button>
    <div class="modal-thumb" id="modal-thumb"></div>
    <div class="modal-body">
      <h3 id="modal-title"></h3>
      <p class="modal-desc" id="modal-desc"></p>
      <div class="modal-text" id="modal-text"></div>
      <div class="modal-refs" id="modal-refs"></div>
    </div>
  </div>`;
document.body.appendChild(modal);

function openProjectModal(g) {
  $("modal-thumb").innerHTML = g.image
    ? `<img src="${g.image}" alt="${g.title}">`
    : `<span class="modal-ph">${UI.placeholderImg}</span>`;
  $("modal-title").textContent = g.title;
  $("modal-desc").textContent = g.desc;
  const raw = (g.detail && g.detail.text) || "";
  $("modal-text").innerHTML = raw.trim()
    ? raw.trim().split(/\n\s*\n/).map(p => `<p>${p}</p>`).join("")   /* blank line = new paragraph; inline HTML allowed */
    : `<p>${UI.toBeAdded}</p>`;
  /* Reference list (numbered, citation style; each item may contain <a> links) */
  const refs = (g.detail && g.detail.references) || [];
  const refsBox = $("modal-refs");
  if (refs.length) {
    refsBox.innerHTML = `<h4>${UI.references}</h4><ol>${refs.map(r => `<li>${r}</li>`).join("")}</ol>`;
    refsBox.style.display = "block";
  } else refsBox.style.display = "none";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeProjectModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
modal.addEventListener("click", e => {
  if (e.target === modal || e.target.closest(".modal-close")) closeProjectModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProjectModal(); });
document.querySelectorAll(".proj-detail").forEach(a =>
  a.addEventListener("click", e => { e.preventDefault(); openProjectModal(SITE.projects[+a.dataset.idx]); }));

/* News */
$("news-list").innerHTML = SITE.news.map(n => `
  <div class="news-item">
    <span class="date">${n.date}</span>
    <span class="tag tag-${((n.cls || n.tag || "").toLowerCase())}">${n.tag}</span>
    <span class="txt">${n.text}</span>
  </div>`).join("");

/* Publications */
$("pub-list").innerHTML = SITE.pubs.map(p => {
  const pdf = (p.links || []).find(([t, u]) => u !== "#" && /^pdf$/i.test(t));
  const titleHtml = pdf ? `<a href="${pdf[1]}" target="_blank" rel="noopener">${p.title}</a>` : p.title;
  return `
  <div class="pub">
    <span class="venue ${p.type || ""}">${p.venue}</span>
    <div>
      <h3>${titleHtml}</h3>
      <div class="authors">${p.authors}</div>
      <div class="plinks">${(p.links || []).map(([t, u]) => u === "#"
        ? `<span class="na" title="Coming soon">${t}</span>`
        : `<a href="${u}" target="_blank" rel="noopener">${t}</a>`).join("")}</div>
    </div>
  </div>`;
}).join("");

/* Team — photo avatars. A member without a photo gets an initials avatar instead:
   no network dependency, and it never shows the wrong face. */
const initialsOf = n => n.trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
const avatarImg = p => p.image
  ? `<img class="avatar" src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`
  : `<div class="avatar avatar-initials" aria-hidden="true">${initialsOf(p.name)}</div>`;
const d = SITE.director;
$("director").innerHTML = `
  ${avatarImg(d)}
  <div><h3>${d.name}</h3><div class="role">${d.role}</div><p>${d.bio}</p></div>`;
const personCard = p => `
  <div class="person">
    ${avatarImg(p)}
    <div class="nm">${p.name}</div>
    <div class="role">${p.role}</div>
  </div>`;
const renderPeople = (gridId, list) => {
  const box = $(gridId);
  if (box) box.innerHTML = (list || []).map(personCard).join("");
};
renderPeople("people-grid", SITE.students);            /* Ph.D. Students */
renderPeople("research-grid", SITE.researchStudents);  /* Research Students */

/* ── Alumni groups ──
   Alumni lists are not rendered inline: each section heading (e.g. "Ph.D. Alumni",
   "M.Sc./M.Eng. Alumni") opens its own modal card.
   Entry: { name, year, degree?, note } — line 1: name + year (+ degree), line 2: placement */
function renderAlumniGroup({ toggleId, countId, modalId, title, desc, list = [], count, link }) {
  const toggle = $(toggleId);
  if (!toggle) return;                      /* heading not present in index.html */

  /* Badge shows the explicit `count` when given, otherwise the number of entries. */
  const total = typeof count === "number" ? count : list.length;
  const badge = countId ? $(countId) : null;   /* some groups show no badge */
  if (badge) badge.textContent = `(${total})`;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = modalId;
  modal.innerHTML = `
    <div class="modal-panel ${list.length ? "alum-panel" : "alum-note-panel"}" role="dialog" aria-modal="true" aria-labelledby="${modalId}-title">
      <button class="modal-close" aria-label="Close">×</button>
      <div class="modal-body">
        <h3 id="${modalId}-title">${title}</h3>
        <p class="modal-desc" id="${modalId}-desc"></p>
        ${link ? `<a class="modal-more" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.text}<span aria-hidden="true">↗</span></a>` : ""}
        <div class="alum-list" id="${modalId}-list"></div>
      </div>
    </div>`;
  document.body.appendChild(modal);

  $(`${modalId}-desc`).textContent = desc;
  $(`${modalId}-list`).innerHTML = list.map(a => `
    <div class="alum">
      <div class="row1"><span class="nm">${a.name}</span><span class="yr">${a.year}${a.degree ? " · " + a.degree : ""}</span></div>
      <div class="note">${a.note}</div>
    </div>`).join("");

  const open = () => {
    modal.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  toggle.addEventListener("click", open);
  toggle.addEventListener("keydown", e => {   /* Enter / Space for keyboard users */
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
  modal.addEventListener("click", e => {
    if (e.target === modal || e.target.closest(".modal-close")) close();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* Ph.D. alumni */
const phdAlumni = SITE.phdAlumni || [];
renderAlumniGroup({
  toggleId: "alum-toggle", countId: "alum-count", modalId: "alum-modal",
  title: UI.phdAlumniTitle,
  desc: UI.phdAlumniDesc.replace("{n}", phdAlumni.length),
  list: phdAlumni
});

/* M.Sc. / M.Eng. alumni — same modal pattern as the Ph.D. group, but the card
   carries the headline number only: no individual entries are listed here.
   The number and the "see the full list" link both come from data.js. */
const msCount = SITE.msAlumniCount || 0;
renderAlumniGroup({
  toggleId: "ms-alum-toggle", countId: "ms-alum-count", modalId: "ms-alum-modal",
  title: UI.msAlumniTitle,
  desc: UI.msAlumniDesc.replace("{n}", msCount),
  count: msCount,
  list: [],
  link: { href: SITE.alumniSource, text: UI.fullList }
});

/* Other alumni (postdocs, undergraduates, interns, visitors, …) — summary card
   only, with a link out to the IIP alumni page for the full list. */
renderAlumniGroup({
  toggleId: "other-alum-toggle", countId: null, modalId: "other-alum-modal",
  title: UI.otherAlumniTitle,
  desc: SITE.otherAlumniNote,
  list: [],
  link: { href: SITE.alumniSource, text: UI.fullList }
});

/* Join us + Contact */
$("join-list").innerHTML = SITE.join.map(j => `<li>${j}</li>`).join("");
const c = SITE.contact;
$("contact-box").innerHTML = `
  <p><b>${UI.email}</b><br>${c.email}</p>
  <p><b>${UI.phone}</b><br>${c.phone}</p>
  <p><b>${UI.wechat}</b><br>${c.wechat}</p>`;

/* Footer */
$("fbrand").textContent = `${SITE.meta.name} · ${SITE.meta.en}`;
$("footer-addr").textContent = `${SITE.meta.address} · ${UI.postcode}: ${SITE.meta.postcode}`;
$("footer-copy").textContent = SITE.meta.copyright;

/* Nav highlighting + back to top */
const links = document.querySelectorAll("#menu a");
const sections = [...document.querySelectorAll("section[id]")];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 140;
  let cur = sections[0] && sections[0].id;
  sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  $("toTop").classList.toggle("show", window.scrollY > 500);
});
$("toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
