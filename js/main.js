/* ═══════════════════════════════════════════════════
   Rendering logic — fills the page with content from data.js.
   You usually don't need to edit this file.
   ═══════════════════════════════════════════════════ */

const $ = id => document.getElementById(id);

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
    <div class="thumb">${g.image ? `<img src="${g.image}">` : "Project image (placeholder)"}</div>
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
    : `<span class="modal-ph">Project image (placeholder)</span>`;
  $("modal-title").textContent = g.title;
  $("modal-desc").textContent = g.desc;
  const raw = (g.detail && g.detail.text) || "";
  $("modal-text").innerHTML = raw.trim()
    ? raw.trim().split(/\n\s*\n/).map(p => `<p>${p}</p>`).join("")   /* blank line = new paragraph; inline HTML allowed */
    : `<p>To be added</p>`;
  /* Reference list (numbered, citation style; each item may contain <a> links) */
  const refs = (g.detail && g.detail.references) || [];
  const refsBox = $("modal-refs");
  if (refs.length) {
    refsBox.innerHTML = `<h4>References</h4><ol>${refs.map(r => `<li>${r}</li>`).join("")}</ol>`;
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
    <span class="tag tag-${(n.tag || "").toLowerCase()}">${n.tag}</span>
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

/* Team — photo avatars; falls back to the shared placeholder headshot */
const AVATAR_PLACEHOLDER = "https://zhenzhong-chen.github.io/bio.jpeg";
const avatarImg = p => `<img class="avatar" src="${p.image || AVATAR_PLACEHOLDER}" alt="${p.name}" onerror="this.style.display='none'">`;
const d = SITE.director;
$("director").innerHTML = `
  ${avatarImg(d)}
  <div><h3>${d.name}</h3><div class="role">${d.role}</div><p>${d.bio}</p></div>`;
$("people-grid").innerHTML = SITE.students.map(p => `
  <div class="person">
    ${avatarImg(p)}
    <div class="nm">${p.name}</div>
    <div class="role">${p.role}</div>
  </div>`).join("");

/* PhD alumni — line 1: name + year; line 2: placement & co-supervisor */
$("alum-list").innerHTML = SITE.phdAlumni.map(a => `
  <div class="alum">
    <div class="row1"><span class="nm">${a.name}</span><span class="yr">${a.year}</span></div>
    <div class="note">${a.note}</div>
  </div>`).join("");

/* Join us + Contact */
$("join-list").innerHTML = SITE.join.map(j => `<li>${j}</li>`).join("");
const c = SITE.contact;
$("contact-box").innerHTML = `
  <p><b>Email</b><br>${c.email}</p>
  <p><b>Phone</b><br>${c.phone}</p>
  <p><b>WeChat</b><br>${c.wechat}</p>`;

/* Footer */
$("fbrand").textContent = `${SITE.meta.name} · ${SITE.meta.en}`;
$("footer-addr").textContent = `${SITE.meta.address} · Postcode: ${SITE.meta.postcode}`;
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
