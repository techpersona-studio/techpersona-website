// Service pages: scroll reveal, phone-only folds, sample ad player.
export function initServices() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const rv = document.querySelectorAll<HTMLElement>(".sv-rv");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add("in"));

  // folds ship open (no-JS safe); close on phones only
  if (matchMedia("(max-width: 759px)").matches) {
    document.querySelectorAll<HTMLDetailsElement>("details.sv-fold").forEach((d) => (d.open = false));
  }

  document.querySelectorAll<HTMLElement>("[data-stp]").forEach((box) => {
    const v = box.querySelector("video")!;
    const snd = box.querySelector<HTMLButtonElement>(".sv-stp__snd")!;
    let userPaused = false;
    const sync = () => box.classList.toggle("paused", v.paused);
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    const play = () => v.play().catch(() => sync());
    if ("IntersectionObserver" in window && !reduced) {
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !userPaused) { v.preload = "auto"; play(); }
        else if (!e.isIntersecting && !v.paused) v.pause();
      }, { threshold: 0.5 }).observe(box);
    }
    snd.addEventListener("click", () => {
      v.muted = !v.muted;
      snd.setAttribute("aria-pressed", String(!v.muted));
      snd.innerHTML = v.muted ? '<span aria-hidden="true">&#128263;</span> <b>Tap for sound</b>' : '<span aria-hidden="true">&#128266;</span> <b>Sound on</b>';
      if (v.paused) { userPaused = false; play(); }
    });
    v.addEventListener("click", () => {
      if (v.paused) { userPaused = false; play(); } else { userPaused = true; v.pause(); }
    });
  });
}
