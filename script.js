// ============================================
// Nintendo Switch Theme - Personal Website JS
// ============================================

// ===== Personal Works · Prompt Modal =====
// Prompt data — title + media + full prompt text per work
var WORKS_DATA = {
  '01': {
    title: '樱花飘落特写',
    titleEn: 'Sakura Petals',
    media: '<video src="Portfolio/01-sakura.mp4" controls autoplay muted loop playsinline></video>',
    prompt: '电影级特写镜头，浅景深极致虚化。一根挂满盛开樱花的细枝从画面左上方斜斜伸入，约占据画面三分之一区域，主体清晰锐利。每一朵樱花呈淡粉与奶白渐变色，五片花瓣层层舒展，花蕊纤细金黄。最近的一簇花瓣可见半透明的脉络纹理，被柔和的逆光照亮，呈现出近乎发光的丝绸质感。春日下午温柔的逆光从枝条背后斜照过来，光线柔和发散，透过花瓣形成淡金色的轮廓光，整体高光略微过曝出梦幻氛围。背景完全失焦，呈现柔粉色与奶白色交融的渐变，零星几点深粉色光斑作为色彩呼吸，无任何具体可辨的物体或人物。一阵看不见的微风极其轻柔地拂过，花枝产生轻微而自然的颤动，随后两到三片花瓣陆续从枝头脱落。花瓣以慢动作缓慢旋转飘落，每一片的飞行轨迹都不同，下坠速度极慢，仿佛悬浮在空气中。整个 5 秒内总共只有 3 到 4 片花瓣飘落，数量克制，绝对不要呈现花瓣如雪片般密集飘洒的效果。镜头几乎完全静止，仅有极轻微的呼吸式微动，无变焦无平移。模拟 100mm 微距镜头 f/2.8 大光圈拍摄的视觉效果，焦点始终锁定在最近的花簇上，飘落的花瓣进入和离开焦点时呈现自然的虚实变化。整体画面带有日系胶片柔焦质感与轻微的光晕漏光，色调温柔粉白带一丝鹅黄，氛围唯美、转瞬、宁静、物哀。时长 5 秒，画幅 16:9，超慢动作物理感，自然真实的花瓣飘落轨迹与重力感，不要任何风暴感或动画感的运动。'
  },
  '02': {
    title: '雨夜窗前的人',
    titleEn: 'By the Rainy Window',
    media: '<video src="Portfolio/02-rainy-window.mp4" controls autoplay muted loop playsinline></video>',
    prompt: '电影级中近景镜头，半身侧影构图。一位年轻人静静靠在大型落地窗前，穿着深色羊毛针织衫，双手捧着一只冒着袅袅热气的米色陶瓷马克杯。她（他）缓慢俯身向前，凑近冰凉的玻璃，轻轻呼出一口白色雾气在玻璃表面凝结成一小片朦胧的雾，随后用食指在雾上慢慢画出一个简单的圆圈，雾气在画完后从边缘开始逐渐消散。窗外是被雨水模糊的城市夜景，霓虹灯的红色、蓝色、紫色光斑被密集雨水拉伸成柔和流动的光纹，雨滴沿玻璃表面缓慢蜿蜒滑落，反射着室内的暖光。室内由一盏暖色钨丝灯照亮，呈现浓郁的橙黄色调，与窗外冷色霓虹形成强烈的色温对比。镜头采用 35mm 电影定焦镜头，极浅景深，焦点锁定在人物侧脸与马克杯之间。镜头以呼吸式的极缓慢速度从中景向特写推进，幅度克制，几乎察觉不到。整体画面带有轻微的胶片颗粒感，柔和的体积光穿过雾气，氛围孤独、温柔、内省，带有日系都市电影的质感。时长 5 秒，画幅 16:9，电影级运动模糊，自然流畅的物理动作。窗外的霓虹灯不要呈现为锐利的横向光带，而是被雨水散射成柔和模糊的圆形光晕。玻璃倒影必须严格符合物理：倒影中人物的动作和姿态与现实完全镜像同步，不要出现倒影与现实手势不一致的情况。'
  },
  '03': {
    title: '东方水墨山水',
    titleEn: 'Ink Mountain Landscape',
    media: '<img src="Portfolio/03-ink-mountain.png" alt="东方水墨山水">',
    prompt: '创作一幅传统中国水墨山水画，风格严格参照宋代李唐、范宽的山水真迹质感，禁止数字插画感、禁止饱和色、禁止现代风格。\n\n画面构图（按位置精确放置）：\n- 画面右侧三分之二：三层山峦由近及远递减，最近一层墨色最浓，呈现明显的斧劈皴笔触；中层山峦淹没在留白雾气中，仅露出山尖；远山极淡，几乎消失在天空里\n- 画面左下三分之一：一条蜿蜒的河流从前景流向中景，水面留白不画水纹\n- 河面偏左中景：一叶小木舟，舟头一位戴斗笠的渔夫侧身垂钓，人物极小，仅占画面 2% 面积，但姿态清晰\n- 远景右侧山腰：一座七层宝塔的剪影，墨色淡到若有若无\n- 画面左上：大面积留白作为天空，约占整幅画 40%\n- 画面右下角：一枚朱砂方印，唯一的彩色点缀\n\n质感要求：\n- 宣纸纤维肌理可见，墨色在纸上有自然晕染的边缘\n- 笔触有"飞白"效果（干笔扫过留下的丝状空白）\n- 整体仅黑、灰、留白三色加角落朱砂\n- 避免均匀的灰度过渡，必须有传统毛笔的笔锋顿挫\n\n氛围：空灵、寂静、疏远，留白即意境。画幅 3:2。'
  },
  '04': {
    title: '北欧雾林油画',
    titleEn: 'Nordic Misty Forest',
    media: '<img src="Portfolio/04-nordic-forest.png" alt="北欧雾林油画">',
    prompt: '创作一幅古典油画，风格严格参照 Caspar David Friedrich 与 Akseli Gallen-Kallela 的浪漫主义风景画，禁止数字插画感、禁止 CG 渲染感、禁止过曝光晕。\n\n画面构图：\n- 主体：一片北欧针叶松林，约 15–20 棵高耸笔直的松树纵深排列，最近的树位于画面左侧三分之一处，树干粗糙，覆盖着深绿色苔藓和灰白色地衣\n- 浓雾从树林深处缓慢涌出，把中后景的树木逐层柔化，越远越淡\n- 黎明柔光从画面右上方斜射而下，形成 4–5 道清晰但柔和的垂直光柱穿透雾气\n- 前景下方三分之一：一片完全静止如镜面的小湖，湖面倒映着上方苍白的天空和最近的几棵树\n- 地面铺满深绿色苔藓，零星散落的落叶和一层薄霜，霜在光线照到的地方微微反光\n\n色彩（必须精确）：\n- 主色：深青蓝（#2C3E4A）、鼠尾草绿（#7B8B6F）\n- 辅色：淡金色光线（#D4B68A）、骨白色雾气（#E8E4DC）\n- 禁止饱和度高的绿色和蓝色，整体调性必须沉静\n\n绘画质感：\n- 必须有可见的油画笔触，尤其是雾气和树皮处\n- 厚涂技法（impasto）出现在树干高光处\n- 远处雾气用湿画法（wet-on-wet）平滑过渡\n- 画布纤维肌理隐约可见\n\n氛围：肃穆、神秘、近乎宗教感的宁静。无人物，无动物。画幅 21:9。'
  },
  '05': {
    title: '黑白人文街拍',
    titleEn: 'Black & White Street',
    media: '<img src="Portfolio/05-street-bw.png" alt="黑白人文街拍">',
    prompt: '创作一张黑白纪实街拍摄影作品，风格为 20 世纪中期欧洲人文摄影传统的银盐胶片质感，禁止数字 HDR 感、禁止 AI 插画感、禁止过度锐化、禁止现代数码相机的清晰感。\n\n场景与人物：\n- 地点：南欧老城一条狭窄的鹅卵石小巷，刚下过雨，地面湿润反光\n- 主体人物：一位约 70 岁的老人，独自从巷子深处朝镜头方向缓步走来，距离镜头约 8 米，位于画面中央偏左\n- 人物穿着：磨损的深色羊毛长大衣、灰色围巾、布质鸭舌帽，左手插兜，右手提一个旧布袋\n- 人物神态：略低头，目光投向地面，没有看镜头\n- 人物身后地面拉出一道长长的影子，朝向镜头方向\n\n环境元素：\n- 巷子两侧是斑驳的老式公寓墙面，窗户深陷在墙内\n- 头顶两栋楼之间拉着几根晾衣绳，挂着模糊失焦的衣物\n- 地面水洼里反射着头顶天空的微光\n- 背景巷子尽头略微过曝，形成自然的视觉引导\n- 光线：阴天柔和的散射光，无明显光源方向，整体均匀柔和\n\n胶片质感（必须严格还原）：\n- 模拟经典 ISO 400 黑白负片的银盐颗粒结构\n- 明显但克制的颗粒感，尤其在天空和墙面平整处可见\n- 阴影深邃但保留细节，暗部仍有层次过渡\n- 高光柔和不死白\n- 整体反差中等，不极端\n- 禁止数字感的纯黑或纯白色块\n- 模拟旁轴胶片相机 35mm 镜头的轻微桶形畸变和边缘暗角\n\n构图：纪实摄影的"决定性瞬间"美学，三分法构图，人物处于动态平衡点。\n氛围：忧郁、隽永、孤独中带尊严，欧洲战后人文摄影的诗意感。画幅 3:2。'
  },
  '06': {
    title: '极简静物 fine-art',
    titleEn: 'Minimal Still Life',
    media: '<img src="Portfolio/06-still-life.png" alt="极简静物 fine-art">',
    prompt: '创作一张 fine-art 静物摄影作品，风格为 17 世纪荷兰黄金时代静物画的光影传统在当代摄影中的再现，禁止 AI 插画感、禁止 3D 渲染感、禁止塑料质感、禁止过度饱和。\n\n构图与物件位置（按精确坐标放置）：\n- 桌面：深色胡桃木，表面有自然的纹理和轻微划痕，水平铺满整个画面下三分之一\n- 桌面铺一块原色未漂白亚麻布，亚麻布从画面右后方自然地搭下来，左侧自然褶皱\n- 主体梨：一颗成熟的金黄带浅红晕的西洋梨，放在画面中心稍偏左（约 40% 横向位置），梨柄朝向左上方\n- 梨皮表面：可见自然的果点（lenticels）、轻微的瑕疵、一颗清澈水珠挂在梨腹偏左处，水珠中能看见左侧光源的反光\n- 副物体：画面右下角，一只哑光釉面的浅米色陶瓷碗，碗的三分之二在画面内，碗里斜放两枚紫色无花果，其中一枚切开露出红色果肉，刀面朝向相机\n- 道具：梨左侧约 5cm 处，散落两片自然枯黄的梨叶\n\n光线（决定性元素）：\n- 单一光源，模拟左侧大窗的柔和侧光，色温约 5000K\n- 光线照射角度约 30°，从梨左上方斜下\n- 梨在桌面拉出一道长而柔和的阴影，朝向画面右下\n- 右侧无补光，自然衰减形成深邃的暗部\n- 背景墙面（画面上三分之二）处于柔和的暗灰阴影中，色调接近木桌的阴影色\n\n质感要求：\n- 梨皮的丝绒质感、亚麻布的粗纤维、陶瓷的哑光、木纹的开放孔隙——四种材质必须清晰可辨且互不混淆\n- 模拟中画幅胶片相机的细节解析度与影调过渡\n- 镜头：85mm 中长焦，光圈 f/2.8，浅景深，焦点在梨腹的水珠上，无花果略微失焦\n- 色调：荷兰古典静物画式的深沉大地色（深棕、暖米、暗金），全程低饱和\n\n氛围：内省、安静、近乎宗教感的庄重，时间仿佛静止。画幅 4:5。'
  }
};

function openPromptModal(id) {
  var data = WORKS_DATA[id];
  if (!data) return;
  var overlay = document.getElementById('promptOverlay');
  var mediaWrap = document.getElementById('promptMediaWrap');
  var titleEl = document.getElementById('promptTitle');
  var textEl = document.getElementById('promptText');
  var lang = document.body.classList.contains('lang-en') ? 'en' : 'zh';
  mediaWrap.innerHTML = data.media;
  titleEl.textContent = lang === 'en' ? data.titleEn : data.title;
  textEl.textContent = data.prompt;
  textEl.dataset.raw = data.prompt;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromptModal(e) {
  var overlay = document.getElementById('promptOverlay');
  if (e.target === overlay || e.target.classList.contains('prompt-close')) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Stop video playback
    var mediaWrap = document.getElementById('promptMediaWrap');
    setTimeout(function () { mediaWrap.innerHTML = ''; }, 300);
  }
}

function copyPromptText() {
  var textEl = document.getElementById('promptText');
  var btn = document.querySelector('.prompt-copy-btn');
  var label = document.getElementById('copyBtnLabel');
  var raw = textEl.dataset.raw || textEl.textContent;
  var lang = document.body.classList.contains('lang-en') ? 'en' : 'zh';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(raw).then(function () {
      btn.classList.add('copied');
      label.textContent = lang === 'en' ? '✓ Copied' : '✓ 已复制';
      setTimeout(function () {
        btn.classList.remove('copied');
        label.textContent = lang === 'en' ? 'Copy Prompt' : '复制 Prompt';
      }, 1800);
    });
  } else {
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = raw;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    btn.classList.add('copied');
    label.textContent = lang === 'en' ? '✓ Copied' : '✓ 已复制';
    setTimeout(function () {
      btn.classList.remove('copied');
      label.textContent = lang === 'en' ? 'Copy Prompt' : '复制 Prompt';
    }, 1800);
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
    var promptOverlay = document.getElementById('promptOverlay');
    if (promptOverlay && promptOverlay.classList.contains('active')) {
      promptOverlay.classList.remove('active');
      document.body.style.overflow = '';
      var mediaWrap = document.getElementById('promptMediaWrap');
      setTimeout(function () { if (mediaWrap) mediaWrap.innerHTML = ''; }, 300);
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
    '.about-card, .timeline-item, .accordion-item, .work-card, .pub-card, .skill-category, .contact-card'
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
