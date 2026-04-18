// ============================================
// Nintendo Switch Theme - Personal Website JS
// ============================================

// Case Study Modal (global scope for onclick handlers)
function openCaseStudy(id) {
  var overlay = document.getElementById('caseOverlay');
  document.querySelectorAll('.case-study').forEach(function(el) { el.hidden = true; });
  var target = document.querySelector('.case-study[data-case="' + id + '"]');
  if (target) target.hidden = false;
  overlay.classList.add('active');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy(e) {
  var overlay = document.getElementById('caseOverlay');
  if (e.target === overlay || e.target.classList.contains('case-close')) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Lightbox (global scope for onclick handlers)
function openLightbox(src) {
  var overlay = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  img.src = src;
  overlay.style.display = 'flex';
  requestAnimationFrame(function () { overlay.classList.add('active'); });
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e.target === document.getElementById('lightbox') || e.target.classList.contains('lightbox-close')) {
    var overlay = document.getElementById('lightbox');
    overlay.classList.remove('active');
    setTimeout(function () {
      overlay.style.display = 'none';
      document.getElementById('lightboxImg').src = '';
    }, 300);
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var caseOverlay = document.getElementById('caseOverlay');
    if (caseOverlay && caseOverlay.classList.contains('active')) {
      caseOverlay.classList.remove('active');
      document.body.style.overflow = '';
      return;
    }
    var overlay = document.getElementById('lightbox');
    if (overlay && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      setTimeout(function () {
        overlay.style.display = 'none';
        document.getElementById('lightboxImg').src = '';
      }, 300);
      document.body.style.overflow = '';
    }
  }
});

(function () {
  'use strict';

  // ===== PIXEL BACKGROUND CANVAS =====
  const canvas = document.getElementById('pixelBg');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 40;
  const SWITCH_RED = '#FF3C28';
  const SWITCH_BLUE = '#0AB9E6';

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Pixel {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.floor(Math.random() * 4 + 2) * 2; // pixel-perfect even sizes
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.color = Math.random() > 0.5 ? SWITCH_RED : SWITCH_BLUE;
      this.alpha = Math.random() * 0.15 + 0.03;
      this.alphaDir = Math.random() * 0.002 + 0.001;
      this.maxAlpha = this.alpha + 0.1;
      this.minAlpha = 0.01;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.alphaDir;

      if (this.alpha >= this.maxAlpha || this.alpha <= this.minAlpha) {
        this.alphaDir *= -1;
      }

      if (this.x < -20 || this.x > canvas.width + 20 ||
          this.y < -20 || this.y > canvas.height + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      // Draw pixel-perfect square
      ctx.fillRect(
        Math.round(this.x / 2) * 2,
        Math.round(this.y / 2) * 2,
        this.size,
        this.size
      );
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Pixel());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  initParticles();
  animateParticles();
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // ===== LANGUAGE TOGGLE =====
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'zh';

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.body.classList.toggle('lang-en', currentLang === 'en');
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    // Update all translatable elements
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-' + currentLang);
    });

    // Update page title
    document.title = currentLang === 'zh'
      ? '贾旭 | AI训练师 - 个人主页'
      : 'Jia Xu | AI Trainer - Portfolio';
  });

  // ===== SCROLL REVEAL ANIMATIONS =====
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.about-card, .timeline-item, .accordion-item, .portfolio-card, .pub-card, .skill-category, .contact-card'
  );
  animatedElements.forEach(el => observer.observe(el));

  // ===== ACCORDION =====
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.toggle('open');
      header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // ===== SKILL BAR ANIMATION =====
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
          const level = fill.getAttribute('data-level');
          setTimeout(() => {
            fill.style.width = level + '%';
          }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-bars').forEach(el => skillObserver.observe(el));

  // ===== SMOOTH SCROLL FOR NAV LINKS =====
  document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 70; // navbar height
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ===== NAVBAR ACTIVE LINK =====
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = '#FF3C28';
      }
    });
  });

  // ===== NAVBAR SCROLL EFFECT =====
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset;

    if (scrollTop > 100) {
      navbar.style.background = 'rgba(18, 18, 31, 0.97)';
    } else {
      navbar.style.background = 'rgba(18, 18, 31, 0.92)';
    }
    lastScroll = scrollTop;
  });

})();
