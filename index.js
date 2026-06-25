(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky nav state */
  var navShell = document.getElementById('navShell');
  if(navShell){
    var onScroll = function(){ navShell.classList.toggle('stuck', window.scrollY > 12); };
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* Mobile menu */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('navOverlay');
  if(burger && overlay){
    var closeMenu = function(){ overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); burger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
    burger.addEventListener('click', function(){
      var open = overlay.classList.toggle('open');
      overlay.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
  }

  /* Scroll reveal */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });

  /* Journey: scroll-scrubbed line fill + sequential dot lighting */
  (function(){
    var flow = document.getElementById('jflow');
    var fill = document.getElementById('jfill');
    if(!flow || !fill) return;
    var nodes = Array.prototype.slice.call(flow.querySelectorAll('.jnode'));

    if(reduce){
      nodes.forEach(function(n){ n.classList.add('lit'); });
      return;
    }

    var ticking = false;
    function isVertical(){ return window.innerWidth <= 860; }
    function update(){
      ticking = false;
      var r = flow.getBoundingClientRect();
      var vh = window.innerHeight;
      var start = vh * 0.80;   // line starts filling when section top hits 80% of viewport
      var end = vh * 0.35;     // fully filled by the time it reaches 35%
      var p = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height)));
      if(isVertical()){
        fill.style.height = (p * 100) + '%';
        fill.style.width = '100%';
      } else {
        fill.style.width = (p * 100) + '%';
        fill.style.height = '100%';
      }
      flow.classList.toggle('moving', p > 0.01 && p < 0.99);
      nodes.forEach(function(n){
        n.classList.toggle('lit', p >= parseFloat(n.dataset.step) - 0.02);
      });
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ ticking = true; requestAnimationFrame(update); }
    }, {passive:true});
    window.addEventListener('resize', update);
    update();
  })();

  /* Scroll-shot: auto-scroll the tall "before" screenshot like a video */
  (function(){
    if(reduce) return;
    var PAUSE_MS = 1200, HOLD_MS = 1800, PX_PER_MS = 0.06;
    document.querySelectorAll('[data-scroll]').forEach(function(el){
      var img = el.querySelector('img');
      if(!img) return;
      var frame = el.parentElement;
      var frameH, imgH, travel, startTime, phase, rafId = null;

      function measure(){
        frameH = frame.offsetHeight;
        imgH = img.offsetHeight;
        travel = Math.max(0, imgH - frameH);
      }
      function reset(){
        el.style.transform = 'translateY(0)';
        phase = 'pause-top'; startTime = null;
        rafId = requestAnimationFrame(tick);
      }
      function tick(ts){
        if(!startTime) startTime = ts;
        var elapsed = ts - startTime;
        if(phase === 'pause-top'){
          if(elapsed >= PAUSE_MS){ phase = 'scrolling'; startTime = ts; }
          rafId = requestAnimationFrame(tick); return;
        }
        if(phase === 'scrolling'){
          var y = Math.min(elapsed * PX_PER_MS, travel);
          el.style.transform = 'translateY(-' + y + 'px)';
          if(y >= travel){ phase = 'pause-bottom'; startTime = ts; }
          rafId = requestAnimationFrame(tick); return;
        }
        if(phase === 'pause-bottom'){
          if(elapsed >= HOLD_MS){ reset(); return; }
          rafId = requestAnimationFrame(tick);
        }
      }
      function tryStart(){ measure(); if(travel > 0 && !rafId) reset(); }

      img.addEventListener('load', tryStart);
      if(img.complete) tryStart();

      if('IntersectionObserver' in window){
        var obs = new IntersectionObserver(function(entries){
          entries.forEach(function(e){
            if(e.isIntersecting){ if(!rafId) tryStart(); }
            else if(rafId){ cancelAnimationFrame(rafId); rafId = null; }
          });
        }, {threshold:0.1});
        obs.observe(frame);
      }
      window.addEventListener('resize', function(){ measure(); });
    });
  })();

  /* Magnetic island buttons */
  if(!reduce){
    document.querySelectorAll('.island').forEach(function(btn){
      btn.addEventListener('mousemove', function(e){
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width/2) * 0.15;
        var y = (e.clientY - r.top - r.height/2) * 0.22;
        btn.style.transform = 'translate(' + x + 'px,' + (y-1) + 'px)';
      });
      btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    function setH(){ a.style.maxHeight = item.classList.contains('open') ? a.scrollHeight + 'px' : '0px'; }
    if(item.classList.contains('open')) requestAnimationFrame(setH);
    q.addEventListener('click', function(){
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', String(open));
      setH();
    });
    window.addEventListener('resize', function(){ if(item.classList.contains('open')) setH(); });
  });

  /* Closing CTA: scroll to form, focus URL */
  var closingCta = document.getElementById('closingCta');
  if(closingCta){
    closingCta.addEventListener('click', function(){
      setTimeout(function(){ var s = document.getElementById('site'); if(s) s.focus({preventScroll:true}); }, 600);
    });
  }

  /* SMS consent sync: ticking the box makes phone required */
  var cbx = document.getElementById('smsOptIn');
  var hidden = document.getElementById('smsOptInValue');
  var phoneOpt = document.getElementById('phoneOpt');
  function syncConsent(){
    if(hidden) hidden.value = cbx.checked ? 'yes' : 'no';
    if(phoneOpt) phoneOpt.textContent = cbx.checked ? '(required for texts)' : '(optional)';
    if(!cbx.checked){ var fp = document.getElementById('f-phone'); if(fp) fp.classList.remove('err'); }
  }
  if(cbx && hidden) cbx.addEventListener('change', syncConsent);

  /* Audit form */
  var form = document.getElementById('auditForm');
  if(form){
    function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
    function isUrl(v){ try{ var u = new URL(v); return u.protocol==='http:'||u.protocol==='https:'; }catch(e){ return false; } }
    function setErr(id, show){ document.getElementById(id).classList.toggle('err', show); }
    ['name','email','site','phone'].forEach(function(id){
      var el = document.getElementById(id);
      if(el) el.addEventListener('input', function(){ setErr('f-'+id, false); });
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var nm = form.name.value.trim(), em = form.email.value.trim(), st = form.site.value.trim();
      var ph = form.phone.value.trim();
      var bad = false;
      if(!nm){ setErr('f-name', true); bad = true; }
      if(!isEmail(em)){ setErr('f-email', true); bad = true; }
      if(!isUrl(st)){ setErr('f-site', true); bad = true; }
      if(cbx && cbx.checked && !ph){ setErr('f-phone', true); bad = true; }
      if(bad){
        var firstErr = form.querySelector('.field.err input');
        if(firstErr) firstErr.focus({preventScroll:false});
        return;
      }
      document.getElementById('formError').style.display = 'none';
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.innerHTML = 'Sending&hellip;';
      fetch('https://formspree.io/f/mojoqgyj', {
        method:'POST', body:new FormData(form), headers:{'Accept':'application/json'}
      }).then(function(res){
        if(res.ok){
          document.getElementById('formCard').classList.add('sent');
          document.getElementById('formSuccess').classList.add('show');
        } else {
          btn.disabled = false; btn.innerHTML = 'Send my free audit <span class="ic" aria-hidden="true">&#8594;</span>';
          document.getElementById('formError').style.display = 'block';
        }
      }).catch(function(){
        btn.disabled = false; btn.innerHTML = 'Send my free audit <span class="ic" aria-hidden="true">&#8594;</span>';
        document.getElementById('formError').style.display = 'block';
      });
    });
  }

  /* Sticky call button: hide when the audit form or closing CTA is in view */
  (function(){
    var fab = document.getElementById('callFab');
    if(!fab) return;
    var zones = ['audit','cta'].map(function(id){ return document.getElementById(id); }).filter(Boolean);
    if(!zones.length) return;
    var visible = {};
    var zObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ visible[e.target.id] = e.isIntersecting; });
      var anyOpen = zones.some(function(z){ return visible[z.id]; });
      fab.classList.toggle('hide-fab', anyOpen);
    }, {threshold:0.18});
    zones.forEach(function(z){ zObs.observe(z); });
  })();

  /* Cookie notice */
  var cookie = document.getElementById('cookie');
  var cookieOk = document.getElementById('cookieOk');
  if(cookie && cookieOk){
    try{
      if(!localStorage.getItem('tp_cookie_ok')){ setTimeout(function(){ cookie.classList.add('show'); }, 1200); }
    }catch(e){ setTimeout(function(){ cookie.classList.add('show'); }, 1200); }
    cookieOk.addEventListener('click', function(){
      cookie.classList.remove('show');
      try{ localStorage.setItem('tp_cookie_ok','1'); }catch(e){}
    });
  }
})();
