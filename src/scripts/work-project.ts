// /work/[slug] enhancements. All content is server-rendered; this only wires interaction.

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
const TOUCH = matchMedia("(hover: none)").matches;
const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

const NOTE_ICON = TOUCH
  ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11V5a2 2 0 0 1 4 0v6"/><path d="M13 10.5V9a2 2 0 0 1 4 0v4.5a6.5 6.5 0 0 1-6.5 6.5h-.3a6 6 0 0 1-4.6-2.2L3.6 15a1.8 1.8 0 0 1 2.7-2.3L9 15"/></svg>'
  : '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v3"/></svg>';

/* before/after wipe: drag (mouse, or horizontal touch), arrow keys */
function initCompare(host: HTMLElement) {
  const h = $(".cmp-h", host)!, lb = $(".cmp-l.b", host)!, la = $(".cmp-l.a", host)!;
  let p = 6, drag = false, sx = 0, sy = 0, decided = false;
  const set = (v: number) => {
    p = Math.max(0, Math.min(100, v));
    host.style.setProperty("--p", p + "%");
    h.setAttribute("aria-valuenow", String(Math.round(p)));
    h.setAttribute("aria-valuetext", Math.round(p) + "% old site");
    lb.style.opacity = p < 12 ? "0" : "1";
    la.style.opacity = p > 88 ? "0" : "1";
  };
  const at = (e: PointerEvent) => { const r = host.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * 100; };
  host.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    drag = true; decided = e.pointerType === "mouse"; sx = e.clientX; sy = e.clientY;
    host.classList.remove("cmp-hint");
    if (decided) { host.setPointerCapture(e.pointerId); set(at(e)); }
  });
  host.addEventListener("pointermove", (e) => {
    if (!drag) return;
    if (!decided) { // touch: only take over on a mostly-horizontal gesture
      const dx = Math.abs(e.clientX - sx), dy = Math.abs(e.clientY - sy);
      if (dx < 6 && dy < 6) return;
      if (dy > dx) { drag = false; return; }
      decided = true;
      try { host.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    }
    set(at(e));
  });
  const end = (e: PointerEvent) => { if (drag && !decided && e.type === "pointerup") set(at(e)); drag = false; };
  host.addEventListener("pointerup", end);
  host.addEventListener("pointercancel", end);
  h.addEventListener("keydown", (e) => {
    const k = e.key, s = e.shiftKey ? 20 : 5;
    if (k === "ArrowLeft" || k === "ArrowDown") set(p - s);
    else if (k === "ArrowRight" || k === "ArrowUp") set(p + s);
    else if (k === "Home") set(0);
    else if (k === "End") set(100);
    else return;
    e.preventDefault();
  });
  set(p);
  if (!reduced) host.classList.add("cmp-hint");
}

/* vertical ad: SSR ships <video controls>; with JS it becomes muted autoplay-in-view + sound toggle */
function initAd(host: HTMLElement) {
  const v = $<HTMLVideoElement>("video", host)!, snd = $<HTMLButtonElement>(".adp-snd", host)!;
  const src = $<HTMLSourceElement>("source", v)?.src || "";
  $("source", v)?.remove();
  v.removeAttribute("controls");
  v.muted = true; v.loop = true;
  let loaded = false, userPaused = false;
  const auto = !reduced;
  const load = () => { if (!loaded) { loaded = true; v.preload = "metadata"; v.src = src; } };
  const play = () => { load(); v.play().catch(() => {}); };
  if ("IntersectionObserver" in window) {
    const near = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { load(); near.disconnect(); } }), { rootMargin: "400px 0px" });
    near.observe(v);
    new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && auto && !userPaused) play();
      else if (!e.isIntersecting && !v.paused) v.pause();
    }), { threshold: 0.5 }).observe(v);
  } else load();
  const sync = () => host.classList.toggle("paused", v.paused);
  v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
  v.addEventListener("click", () => {
    if (v.paused) { userPaused = false; play(); } else { userPaused = true; v.pause(); }
  });
  snd.addEventListener("click", () => {
    v.muted = !v.muted;
    snd.setAttribute("aria-pressed", String(!v.muted));
    snd.innerHTML = v.muted
      ? '<span aria-hidden="true">&#128263;</span> <b>Tap for sound</b>'
      : '<span aria-hidden="true">&#128266;</span> <b>Sound on</b>';
    if (v.paused) { userPaused = false; play(); }
  });
}

/* device stage: New | Old, Phone | Desktop (mobile), slow auto-scroll that yields to the visitor */
function initStage(stage: HTMLElement) {
  const sw = document.getElementById("swView"), swd = document.getElementById("swDev");
  const hintEl = $(".hint", stage)!, note = $("[data-note]");
  if (!fine) { hintEl.classList.add("touch"); $("span", hintEl)!.textContent = "Swipe to explore"; }
  if (note) note.innerHTML = NOTE_ICON + (TOUCH ? "Swipe the screen to explore" : "Scroll inside a screen to explore the real site");

  const IDLE = 3200;
  let seen = store.get("tpb-hint") === "1", inView = false, raf = 0, last = 0, view = "new";
  type Box = { el: HTMLElement; kind: string; pos: number; dir: number; hold: number; touched: number; hover: boolean };
  const boxes: Box[] = Array.from(stage.querySelectorAll<HTMLElement>(".sb")).map((el) => ({
    el, kind: el.classList.contains("old") ? "old" : "new", pos: 0, dir: 1, hold: 0, touched: -1e9, hover: false,
  }));
  const markSeen = () => { if (seen) return; seen = true; store.set("tpb-hint", "1"); hintEl.classList.remove("on"); };
  const hint = (el: HTMLElement, y?: number) => {
    if (seen) return;
    const r = el.getBoundingClientRect(), d = stage.getBoundingClientRect();
    hintEl.style.left = r.left - d.left + r.width / 2 + "px";
    hintEl.style.top = r.top - d.top + (y == null ? 14 : r.height * y) + "px";
    hintEl.classList.add("on");
  };
  boxes.forEach((s) => {
    const el = s.el, mark = () => { s.touched = performance.now(); s.pos = el.scrollTop; markSeen(); };
    ["wheel", "touchstart", "touchmove", "touchend"].forEach((ev) => el.addEventListener(ev, mark, { passive: true }));
    el.addEventListener("pointerdown", mark);
    el.addEventListener("keydown", mark);
    el.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { s.hover = true; s.pos = el.scrollTop; hint(el); } });
    el.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") { s.hover = false; s.touched = performance.now(); hintEl.classList.remove("on"); } });
  });
  const loadOld = () => stage.querySelectorAll<HTMLImageElement>("img[data-old]").forEach((im) => { im.src = im.dataset.old!; im.removeAttribute("data-old"); });

  const tick = (t: number) => {
    const dt = last ? Math.min(64, t - last) : 16.7;
    last = t;
    boxes.forEach((s) => {
      if (s.kind !== view) return;
      if (s.hover || t - s.touched < IDLE) { s.pos = s.el.scrollTop; return; }
      const max = s.el.scrollHeight - s.el.clientHeight;
      if (max <= 2 || t < s.hold) return;
      const v = s.el.clientHeight * 0.075; // slow read speed, px/s
      if (s.dir > 0) { s.pos += (v * dt) / 1000; if (s.pos >= max) { s.pos = max; s.dir = -1; s.hold = t + 2200; } }
      else { s.pos -= (v * 7 * dt) / 1000; if (s.pos <= 0) { s.pos = 0; s.dir = 1; s.hold = t + 1600; } }
      s.el.scrollTop = s.pos;
    });
    raf = inView && !reduced ? requestAnimationFrame(tick) : 0;
    if (!raf) last = 0;
  };
  const run = () => { if (!raf && inView && !reduced) raf = requestAnimationFrame(tick); };

  let shown = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => es.forEach((e) => {
      inView = e.isIntersecting; run();
      if (inView && !fine && !shown && !seen) { // touch: show the hint once over the phone
        shown = true;
        setTimeout(() => {
          const ph = $<HTMLElement>(".pho .sb.new", stage);
          if (ph) hint(ph, 0.45);
          seen = true; store.set("tpb-hint", "1");
          setTimeout(() => hintEl.classList.remove("on"), 4200);
        }, 900);
      }
    }), { threshold: 0.4 }).observe(stage);
  } else { inView = true; run(); }

  sw?.addEventListener("pointerenter", loadOld);
  swd?.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>("button");
    if (!btn) return;
    const d = btn.dataset.d;
    stage.classList.toggle("m-desk", d === "desk");
    swd.classList.toggle("old", d === "desk");
    swd.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
    boxes.forEach((s) => { s.pos = s.el.scrollTop; s.hold = performance.now() + 700; });
    run();
  });
  sw?.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>("button");
    if (!btn || btn.dataset.v === view) return;
    view = btn.dataset.v!;
    loadOld();
    stage.classList.toggle("old", view === "old");
    sw.classList.toggle("old", view === "old");
    sw.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
    boxes.forEach((s) => {
      s.el.tabIndex = s.kind === view ? 0 : -1;
      s.el.setAttribute("aria-hidden", String(s.kind !== view));
      if (s.kind === view) { s.pos = s.el.scrollTop; s.hold = performance.now() + 900; }
    });
    run();
  });
}

/* board lightbox: Esc, backdrop, arrows, swipe (down closes, sideways steps) */
function initBoard(m: HTMLElement, lb: HTMLDialogElement) {
  const pins = Array.from(m.querySelectorAll<HTMLElement>(".bp"));
  const media = document.getElementById("lbMedia")!, cap = document.getElementById("lbCap")!;
  let cur = 0, opener: HTMLElement | null = null;
  const show = (i: number) => {
    cur = (i + pins.length) % pins.length;
    const pin = pins[cur], kind = (pin.className.match(/\bk-(\w+)/) || [])[1] || "note";
    media.className = "lb-media k-" + kind;
    media.textContent = "";
    const img = $<HTMLImageElement>(".frm img", pin);
    if (kind === "image" && img) {
      const big = document.createElement("img");
      big.src = img.dataset.full || img.src; big.alt = img.alt;
      media.appendChild(big);
    } else {
      const tile = $(".tile", pin);
      if (tile) media.appendChild(tile.cloneNode(true));
    }
    cap.textContent = "";
    const bc = $(".bc", pin);
    if (bc) { const c = bc.cloneNode(true) as HTMLElement; c.classList.add("lbc"); cap.appendChild(c); }
  };
  const open = (i: number, el: HTMLElement) => {
    opener = el; show(i);
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  };
  const close = () => { if (lb.close) lb.close(); else lb.removeAttribute("open"); };
  lb.addEventListener("close", () => { document.body.style.overflow = ""; opener?.focus(); });
  m.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLElement>(".bp");
    if (b) open(+(b.dataset.i || 0), b);
  });
  document.getElementById("lbX")?.addEventListener("click", close);
  document.getElementById("lbP")?.addEventListener("click", () => show(cur - 1));
  document.getElementById("lbN")?.addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  lb.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "ArrowLeft") show(cur - 1);
  });
  let sx = 0, sy = 0, on = false;
  lb.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse") return; on = true; sx = e.clientX; sy = e.clientY; });
  lb.addEventListener("pointerup", (e) => {
    if (!on) return;
    on = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
    else if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1));
  });
}

function initReveal() {
  const rvs = document.querySelectorAll(".wk .rv");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    rvs.forEach((el) => io.observe(el));
  } else rvs.forEach((el) => el.classList.add("in"));
}

export function initProject() {
  const cmp = $("[data-cmp]");
  if (cmp) initCompare(cmp);
  const ad = $("[data-adp]");
  if (ad) initAd(ad);
  const stage = document.getElementById("stage");
  if (stage) initStage(stage);
  const m = document.getElementById("mason"), lb = document.getElementById("lb") as HTMLDialogElement | null;
  if (m && lb) initBoard(m, lb);
  initReveal();
}
