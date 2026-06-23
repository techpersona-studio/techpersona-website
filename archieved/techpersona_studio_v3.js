// ===================================================
//  TechPersona Studio v3 — all scripts
//  techpersona_studio_v3.js
//  Loaded with defer — DOM is parsed before this runs.
// ===================================================

// 1. Scroll reveal via IntersectionObserver
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();


// 2. Scroll-scrubbed journey band
//    The line draws itself as the band crosses the viewport.
(function () {
  var flow = document.getElementById('jflow');
  if (!flow) return;
  var fill  = document.getElementById('jfill');
  var nodes = Array.prototype.slice.call(flow.querySelectorAll('.jnode'));
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  if (reduce) {
    fill.style.width = '100%';
    nodes.forEach(function (n) { n.classList.add('lit'); });
    return;
  }

  var ticking = false;

  function update() {
    ticking = false;
    var r   = flow.getBoundingClientRect();
    var vh  = window.innerHeight;
    // p = 0 when the band's top hits 80% viewport; 1 when its bottom hits 35%
    var start = vh * 0.80;
    var end   = vh * 0.35;
    var p = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height)));

    fill.style.width = (p * 100) + '%';
    flow.classList.toggle('moving', p > 0.01 && p < 0.99);
    nodes.forEach(function (n) {
      n.classList.toggle('lit', p >= parseFloat(n.dataset.step) - 0.02);
    });
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();


// 3. FAQ accordion
(function () {
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      // open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        var a = item.querySelector('.faq-a');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // open the first item that has .open on load
  window.addEventListener('load', function () {
    var first = document.querySelector('.faq-item.open .faq-a');
    if (first) first.style.maxHeight = first.scrollHeight + 'px';
  });
})();


// 4. Main review form
(function () {
  var form = document.getElementById('reviewForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    if (!f.name.value || !f.email.value || !f.site.value) {
      if (f.reportValidity) f.reportValidity();
      return;
    }
    document.getElementById('formView').style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
    // TODO: wire to real email/CRM before launch
  });
})();
