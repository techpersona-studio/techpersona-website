(function(){
  /* ── 1. Reduced-motion gate ───────────────────────── */
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 2. Scroll reveal ─────────────────────────────── */
  if (!rm && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  /* ── 3. Magnetic island buttons ──────────────────── */
  if (!rm) {
    document.querySelectorAll('.btn').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width  / 2) / r.width;
        var y = (e.clientY - r.top  - r.height / 2) / r.height;
        btn.style.transform = 'translate(' + (x * 6).toFixed(2) + 'px,' + (y * 6).toFixed(2) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
    });
  }

  /* ── 4. Scroll-scrubbed journey band ─────────────── */
  (function(){
    var flow  = document.getElementById('jflow');
    if (!flow) return;
    var fill  = document.getElementById('jfill');
    var nodes = Array.prototype.slice.call(flow.querySelectorAll('.jnode'));

    if (rm) {
      fill.style.width = '100%';
      fill.style.height = '100%';
      nodes.forEach(function(n){ n.classList.add('lit'); });
      return;
    }

    var ticking = false;
    function isVertical(){ return window.innerWidth <= 720; }
    function update(){
      ticking = false;
      var r    = flow.getBoundingClientRect();
      var vh   = window.innerHeight;
      var start = vh * 0.80;
      var end   = vh * 0.35;
      var p = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height)));
      if (isVertical()){
        fill.style.width  = '100%';
        fill.style.height = (p * 100) + '%';
      } else {
        fill.style.height = '100%';
        fill.style.width  = (p * 100) + '%';
      }
      flow.classList.toggle('moving', p > 0.01 && p < 0.99);
      nodes.forEach(function(n){
        n.classList.toggle('lit', p >= parseFloat(n.dataset.step) - 0.02);
      });
    }
    window.addEventListener('scroll', function(){
      if (!ticking){ ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();

  /* ── 5. FAQ accordion ────────────────────────────── */
  (function(){
    document.querySelectorAll('.faq-q').forEach(function(q){
      q.addEventListener('click', function(){
        var item   = q.closest('.faq-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i){
          i.classList.remove('open');
          i.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('open');
          var a = item.querySelector('.faq-a');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      });
    });
    window.addEventListener('load', function(){
      var first = document.querySelector('.faq-item.open .faq-a');
      if (first) first.style.maxHeight = first.scrollHeight + 'px';
    });
  })();

  /* ── 6. Hero chat animation ─────────────────────── */
  (function(){
    var body = document.getElementById('chatBody');
    if (!body) return;

    var EASE = 'cubic-bezier(.32,.72,0,1)';
    var msgs = [
      { side:'lead', text:'Hi, I\'m looking for homes under $750k in Austin. Do you have anything available?', delay:600 },
      { side:'ai',   text:'Yes — I\'d be happy to help. Are you buying, selling, or just browsing?',           delay:1800 },
      { side:'lead', text:'Buying.',                                                                           delay:3200 },
      { side:'ai',   text:'What area, price range, and timeline are you considering?',                        delay:4400 },
      { side:'lead', text:'$650–750k, South Austin, within the next 3 months.',                               delay:5900 },
      { side:'ai',   text:'I found several homes that match. Would you like to schedule a call with an agent?', delay:7600 },
      { side:'lead', text:'Friday around 11:00 PM?',                                                          delay:9200 },
      { side:'ai',   text:'Done — you\'re booked for Friday at 11:00 PM. See you then! ✓',                    delay:10600 }
    ];

    var TIMES = ['9:38', '9:38', '9:39', '9:39', '9:40', '9:41', '9:41', '9:42'];
    var timers = [];

    function showMsg(i) {
      var m = msgs[i];
      var wrap = document.createElement('div');
      wrap.className = 'cmsg ' + m.side;
      var bubble = document.createElement('div');
      bubble.className = 'cbubble';
      bubble.textContent = m.text;
      var time = document.createElement('span');
      time.className = 'ctime';
      time.textContent = TIMES[i];
      wrap.appendChild(bubble);
      wrap.appendChild(time);
      body.appendChild(wrap);

      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          wrap.style.transition = 'opacity .5s ' + EASE + ', transform .5s ' + EASE;
          wrap.style.opacity = '1';
          wrap.style.transform = 'translateY(0)';
          body.scrollTop = body.scrollHeight;
        });
      });
    }

    function runOnce() {
      body.innerHTML = '';
      // calendar card is always visible — just reset its booked state
      document.getElementById('calCheck').classList.remove('visible');
      document.getElementById('calTimeBadge').classList.remove('booked');
      document.getElementById('calTimeBadge').style.opacity = '0';
      document.getElementById('calDateToday').classList.remove('booked');
      var titleEl = document.getElementById('calTitle');
      titleEl.textContent = '';
      titleEl.style.color = '';
      titleEl.style.opacity = '1';
      document.getElementById('notifEmail').classList.remove('visible');

      msgs.forEach(function(m, i){
        var t = setTimeout(function(){ showMsg(i); }, m.delay);
        timers.push(t);
      });

      // booking animation: title fades to new text, check pops in
      var tBook = setTimeout(function(){
        var titleEl = document.getElementById('calTitle');
        titleEl.style.transition = 'opacity .25s cubic-bezier(.32,.72,0,1)';
        titleEl.style.opacity = '0';
        setTimeout(function(){
          titleEl.textContent = 'Booking confirmed';
          titleEl.style.color = 'var(--pine)';
          titleEl.style.opacity = '1';
          document.getElementById('calCheck').classList.add('visible');
          var badge = document.getElementById('calTimeBadge');
          badge.style.opacity = '1';
          badge.classList.add('booked');
          document.getElementById('calDateToday').classList.add('booked');
        }, 260);
      }, 10600);
      timers.push(tBook);

      // email notif slides in shortly after
      var tEmail = setTimeout(function(){
        document.getElementById('notifEmail').classList.add('visible');
      }, 11600);
      timers.push(tEmail);
    }

    if (rm) {
      msgs.forEach(function(m, i){ showMsg(i); });
      document.getElementById('calTitle').textContent = 'Booking confirmed';
      document.getElementById('calCheck').classList.add('visible');
      var badge = document.getElementById('calTimeBadge');
      badge.style.opacity = '1';
      badge.classList.add('booked');
      document.getElementById('calDateToday').classList.add('booked');
      document.getElementById('notifEmail').classList.add('visible');
      return;
    }

    // run once when hero enters viewport
    var started = false;
    if ('IntersectionObserver' in window) {
      var heroObs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting && !started){
            started = true;
            heroObs.disconnect();
            runOnce();
          }
        });
      }, { threshold: 0.3 });
      var heroSection = document.querySelector('.hero');
      if (heroSection) heroObs.observe(heroSection);
    } else {
      runOnce();
    }
  })();

  /* ── 7. Scroll-shot: auto-scroll full-page PNGs ─── */
  (function(){
    if (rm) return;
    var PAUSE_MS  = 1200; // hold at top before scrolling
    var HOLD_MS   = 1800; // hold at bottom before reset
    var PX_PER_MS = 0.06; // scroll speed

    document.querySelectorAll('[data-scroll]').forEach(function(el){
      var img = el.querySelector('img');
      if (!img) return;

      var frameH, imgH, travel, startTime, phase, rafId;

      function measure(){
        frameH = el.parentElement.offsetHeight;
        imgH   = img.offsetHeight;
        travel = Math.max(0, imgH - frameH);
      }

      function reset(){
        el.style.transform = 'translateY(0)';
        phase     = 'pause-top';
        startTime = null;
        rafId     = requestAnimationFrame(tick);
      }

      function tick(ts){
        if (!startTime) startTime = ts;
        var elapsed = ts - startTime;

        if (phase === 'pause-top'){
          if (elapsed >= PAUSE_MS){ phase = 'scrolling'; startTime = ts; }
          rafId = requestAnimationFrame(tick);
          return;
        }
        if (phase === 'scrolling'){
          var y = Math.min(elapsed * PX_PER_MS, travel);
          el.style.transform = 'translateY(-' + y + 'px)';
          if (y >= travel){ phase = 'pause-bottom'; startTime = ts; }
          rafId = requestAnimationFrame(tick);
          return;
        }
        if (phase === 'pause-bottom'){
          if (elapsed >= HOLD_MS){ reset(); return; }
          rafId = requestAnimationFrame(tick);
        }
      }

      function tryStart(){
        measure();
        if (travel > 0) reset();
      }

      img.addEventListener('load', tryStart);
      if (img.complete) tryStart();

      // pause when scrolled out of view to save CPU
      if ('IntersectionObserver' in window){
        var obs = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if (e.isIntersecting){
              if (!rafId) tryStart();
            } else {
              if (rafId){ cancelAnimationFrame(rafId); rafId = null; }
            }
          });
        }, { threshold: 0.1 });
        obs.observe(el.parentElement);
      }

      window.addEventListener('resize', function(){ measure(); });
    });
  })();

  /* ── 8. Sync all proof frames to video frame height ─ */
  (function(){
    var videoFrame  = document.querySelector('.img-frame-video');
    var beforeFrame = document.querySelector('.img-frame:not(.img-frame-video)');
    var sampleFrames = Array.prototype.slice.call(document.querySelectorAll('.sample-frame'));
    if (!videoFrame) return;
    function sync(){
      var h = videoFrame.offsetHeight;
      if (h <= 0) return;
      if (beforeFrame) beforeFrame.style.height = h + 'px';
      sampleFrames.forEach(function(f){ f.style.height = h + 'px'; });
    }
    var vid = videoFrame.querySelector('video');
    if (vid) {
      vid.addEventListener('loadedmetadata', sync);
      vid.addEventListener('canplay', sync);
    }
    window.addEventListener('resize', sync);
    window.addEventListener('load', sync);
  })();

  /* ── 9. Mobile nav overlay ───────────────────────── */
  (function(){
    var burger  = document.getElementById('navBurger');
    var overlay = document.getElementById('navOverlay');
    if (!burger || !overlay) return;

    function openMenu(){
      burger.classList.add('open');
      burger.setAttribute('aria-expanded','true');
      overlay.classList.add('open');
      overlay.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false');
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function(){
      burger.classList.contains('open') ? closeMenu() : openMenu();
    });

    // close on link tap
    overlay.querySelectorAll('.overlay-link, .overlay-foot .btn, .overlay-tel').forEach(function(el){
      el.addEventListener('click', closeMenu);
    });

    // close on Escape
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeMenu();
    });
  })();

  /* ── 10. Cookie notice ───────────────────────────── */
  (function(){
    var bar = document.getElementById('cookieBar');
    var btn = document.getElementById('cookieOk');
    if (!bar || !btn) return;
    if (localStorage.getItem('cookie_ok')) {
      bar.classList.add('hidden');
      return;
    }
    btn.addEventListener('click', function(){
      bar.classList.add('hidden');
      try { localStorage.setItem('cookie_ok','1'); } catch(e){}
    });
  })();

  /* ── 9. Audit form ───────────────────────────────── */
  (function(){
    var form = document.getElementById('reviewForm');
    if (!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var f = e.target;
      if (!f.name.value || !f.email.value || !f.site.value){
        if (f.reportValidity) f.reportValidity();
        return;
      }
      var btn = f.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      var data = new FormData(f);
      fetch('https://formspree.io/f/mojoqgyj', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(res){
        if (res.ok) {
          document.getElementById('formView').style.display = 'none';
          document.getElementById('formSuccess').classList.add('show');
        } else {
          btn.disabled = false;
          btn.innerHTML = 'Send my free audit <span class="ic" aria-hidden="true">→</span>';
          alert('Something went wrong. Please try again or email contact@techpersonastudio.com directly.');
        }
      })
      .catch(function(){
        btn.disabled = false;
        btn.innerHTML = 'Send my free audit <span class="ic" aria-hidden="true">→</span>';
        alert('Something went wrong. Please try again or email contact@techpersonastudio.com directly.');
      });
    });
  })();
})();
