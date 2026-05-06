// ============================================================================
// 贾旭 / JIAXU · Switch-themed Personal Console
// ============================================================================

(function () {
  'use strict';

  // ===== STATE =====
  let currentGame = 'home';     // 'home' | '01'..'05'
  let selectedTile = 0;         // index into game-tiles
  let langZh = true;            // bilingual state
  let soundOn = false;          // sound state
  let audioCtx = null;
  let pdfDoc = null, pdfPage = 1, pdfTotal = 0;
  let pdfRendering = false;
  const TILES = ['01', '02', '03', '04', '05'];

  // ===== TROPHY DATA =====
  const TROPHIES = {
    software: {
      icon: '📜',
      title: '软件著作权 V1.0',
      titleEn: 'Software Copyright V1.0',
      body: '智能计算资源调度系统 V1.0\n登记号：2025SR1743676\n证书号：软著登字第16399874号\n登记日期：2025年9月10日\n著作权人：贾旭、孟凡超',
      bodyEn: 'Intelligent Computing Resource Scheduling System V1.0\nReg. No.: 2025SR1743676\nCert. No.: 16399874\nDate: Sep 10, 2025\nAuthors: Jia Xu, Meng Fanchao',
      image: 'patent.png'
    },
    journal: {
      icon: '📄',
      title: '省刊论文发表',
      titleEn: 'Provincial Journal Publication',
      body: '《人工智能技术在计算机游戏软件中的应用分析》\n期刊：《网络游戏技术与应用》\nISSN: 2097-5082 / CN12-1483/TN\n刊期：2026年4月刊',
      bodyEn: '"Analysis of AI Technology Applications in Computer Game Software"\nJournal: Network Game Technology & Application\nISSN: 2097-5082 / CN12-1483/TN\nIssue: April 2026',
      image: 'journal.png'
    },
    cost: {
      icon: '⚙️',
      title: '工作流降本 94%',
      titleEn: 'Workflow Cost Reduction 94%',
      body: '主导 caption 训练数据生产提效项目，迭代演进为「意图识别 + 分类 PE + 验证闭环」三阶段方案：\n\n• 基于日志数据增量对比持续评估各类 Prompt 模板效果\n• 将人工介入比例从近 100% 降至约 6%\n• 方案沉淀为团队标准化 SOP\n• 新场景复用仅需调整分类规则与 Prompt 模板',
      bodyEn: 'Led caption-data efficiency project. Three-stage pipeline (intent + category-specific PE + verification loop):\n\n• Log-based incremental comparison evaluates prompt template effectiveness\n• Manual intervention reduced from ~100% to ~6%\n• Codified as team SOP\n• New scenarios reuse pipeline by adjusting rules & templates only'
    },
    efficiency: {
      icon: '🚀',
      title: '团队效率 +30%',
      titleEn: 'Team Efficiency +30%',
      body: '科大讯飞 · 医疗 Agent RLHF 项目：\n\n• 从 5 维度（思考过程、工具选择、参数正确性、回复质量、安全性）综合评分\n• 发现「参数不完整直接执行」系统性问题\n• 推动规则迭代 2 版\n• 产出改写指南供团队使用\n• 帮助团队标注效率提升约 30%',
      bodyEn: 'iFlytek · Medical Agent RLHF Project:\n\n• 5-dimension scoring (reasoning, tool selection, params, response quality, safety)\n• Identified systematic "incomplete-parameter execution" issue\n• Drove 2 rounds of rule iteration\n• Authored team-wide rewrite guide\n• Boosted team annotation efficiency by ~30%'
    },
    quality: {
      icon: '🎯',
      title: '质检准确率 95%+',
      titleEn: 'QA Accuracy 95%+',
      body: '可灵 AI · 标注团队培训与质检管理：\n\n• 团队规模累计超过 80 人\n• 主要负责质检抽审环节\n• 执行并优化分层抽检机制\n• 项目交付准确率长期稳定在 95% 以上\n• 推动新人上岗考核方案落地，缩短团队上手周期',
      bodyEn: 'Kling AI · Annotation Team Training & QA:\n\n• Team scaled beyond 80 members\n• Lead QA spot-check role\n• Refined tiered sampling QA mechanism\n• Delivery accuracy stayed consistently above 95%\n• Designed onboarding assessment, shortening ramp-up time'
    },
    review: {
      icon: '📊',
      title: '个人审核量 20,000+',
      titleEn: 'Personal Review 20,000+',
      body: '可灵 AI 质检主审身份累计审核标注样本超过 2 万条：\n\n• 覆盖文本标注 + 多模态评测两类业务线\n• 汇总高频错误类型并归类分析\n• 持续优化标注规范与培训材料\n• 反哺团队整体准确率',
      bodyEn: 'As lead QA reviewer at Kling AI, personally reviewed 20,000+ annotation samples:\n\n• Covers both text annotation and multimodal evaluation lines\n• Summarized high-frequency error types\n• Continuously refined annotation guidelines and training materials\n• Fed back to overall team accuracy'
    }
  };

  // ===== WORK DATA (6 featured works) =====
  const WORKS_DATA = {
    '01': {
      title: '樱花飘落特写',
      titleEn: 'Sakura Petals',
      media: '<video src="Portfolio/01-sakura.mp4" controls autoplay muted loop playsinline></video>',
      prompt: '电影级特写镜头，浅景深极致虚化。一根挂满盛开樱花的细枝从画面左上方斜斜伸入，约占据画面三分之一区域，主体清晰锐利。每一朵樱花呈淡粉与奶白渐变色，五片花瓣层层舒展，花蕊纤细金黄。最近的一簇花瓣可见半透明的脉络纹理，被柔和的逆光照亮，呈现出近乎发光的丝绸质感。春日下午温柔的逆光从枝条背后斜照过来，光线柔和发散，透过花瓣形成淡金色的轮廓光，整体高光略微过曝出梦幻氛围。背景完全失焦，呈现柔粉色与奶白色交融的渐变，零星几点深粉色光斑作为色彩呼吸，无任何具体可辨的物体或人物。一阵看不见的微风极其轻柔地拂过，花枝产生轻微而自然的颤动，随后两到三片花瓣陆续从枝头脱落。花瓣以慢动作缓慢旋转飘落，每一片的飞行轨迹都不同，下坠速度极慢，仿佛悬浮在空气中。整个 5 秒内总共只有 3 到 4 片花瓣飘落。模拟 100mm 微距镜头 f/2.8 大光圈拍摄的视觉效果，焦点始终锁定在最近的花簇上。整体画面带有日系胶片柔焦质感与轻微的光晕漏光，色调温柔粉白带一丝鹅黄，氛围唯美、转瞬、宁静、物哀。时长 5 秒，画幅 16:9。'
    },
    '02': {
      title: '雨夜窗前的人',
      titleEn: 'By the Rainy Window',
      media: '<video src="Portfolio/02-rainy-window.mp4" controls autoplay muted loop playsinline></video>',
      prompt: '电影级中近景镜头，半身侧影构图。一位年轻人静静靠在大型落地窗前，穿着深色羊毛针织衫，双手捧着一只冒着袅袅热气的米色陶瓷马克杯。她（他）缓慢俯身向前，凑近冰凉的玻璃，轻轻呼出一口白色雾气在玻璃表面凝结成一小片朦胧的雾，随后用食指在雾上慢慢画出一个简单的圆圈。窗外是被雨水模糊的城市夜景，霓虹灯的红色、蓝色、紫色光斑被密集雨水拉伸成柔和流动的光纹，雨滴沿玻璃表面缓慢蜿蜒滑落。室内由一盏暖色钨丝灯照亮，呈现浓郁的橙黄色调，与窗外冷色霓虹形成强烈的色温对比。镜头采用 35mm 电影定焦镜头，极浅景深，焦点锁定在人物侧脸与马克杯之间。镜头以呼吸式的极缓慢速度从中景向特写推进。整体画面带有轻微的胶片颗粒感，柔和的体积光穿过雾气，氛围孤独、温柔、内省。时长 5 秒，画幅 16:9。'
    },
    '03': {
      title: '东方水墨山水',
      titleEn: 'Ink Mountain Landscape',
      media: '<img src="Portfolio/03-ink-mountain.png" alt="东方水墨山水">',
      prompt: '创作一幅传统中国水墨山水画，风格严格参照宋代李唐、范宽的山水真迹质感。\n\n画面构图：\n- 画面右侧三分之二：三层山峦由近及远递减，最近一层墨色最浓，呈现明显的斧劈皴笔触\n- 画面左下三分之一：一条蜿蜒的河流从前景流向中景\n- 河面偏左中景：一叶小木舟，舟头一位戴斗笠的渔夫侧身垂钓\n- 远景右侧山腰：一座七层宝塔的剪影\n- 画面左上：大面积留白作为天空\n- 画面右下角：一枚朱砂方印，唯一的彩色点缀\n\n质感：宣纸纤维肌理可见，墨色在纸上有自然晕染的边缘，笔触有"飞白"效果。氛围：空灵、寂静、疏远，留白即意境。画幅 3:2。'
    },
    '04': {
      title: '北欧雾林油画',
      titleEn: 'Nordic Misty Forest',
      media: '<img src="Portfolio/04-nordic-forest.png" alt="北欧雾林油画">',
      prompt: '创作一幅古典油画，风格参照 Caspar David Friedrich 与 Akseli Gallen-Kallela 的浪漫主义风景画。\n\n构图：一片北欧针叶松林，约 15-20 棵高耸笔直的松树纵深排列，浓雾从林深处缓慢涌出。黎明柔光从右上方斜射，形成 4-5 道清晰垂直光柱穿透雾气。前景下方三分之一是一片镜面般的小湖，倒映着上方天空。\n\n色彩：深青蓝（#2C3E4A）、鼠尾草绿（#7B8B6F）、淡金色光线（#D4B68A）、骨白色雾气（#E8E4DC）。\n\n质感：可见油画笔触，厚涂技法（impasto）在树干高光处，远处雾气湿画法。氛围：肃穆、神秘、近乎宗教感的宁静。画幅 21:9。'
    },
    '05': {
      title: '黑白人文街拍',
      titleEn: 'B&W Documentary Street',
      media: '<img src="Portfolio/05-street-bw.png" alt="黑白人文街拍">',
      prompt: '20 世纪中期欧洲人文摄影传统的银盐胶片质感黑白纪实街拍。\n\n场景：南欧老城一条狭窄的鹅卵石小巷，刚下过雨，地面湿润反光。一位约 70 岁的老人独自从巷子深处朝镜头方向缓步走来，距离镜头约 8 米。穿着磨损的深色羊毛长大衣、灰色围巾、布质鸭舌帽，左手插兜，右手提一个旧布袋。\n\n光线：阴天柔和的散射光。\n\n胶片质感：模拟 ISO 400 黑白负片银盐颗粒结构，明显但克制的颗粒感。模拟旁轴胶片相机 35mm 镜头的轻微桶形畸变和边缘暗角。\n\n氛围：忧郁、隽永、孤独中带尊严，欧洲战后人文摄影的诗意感。画幅 3:2。'
    },
    '06': {
      title: '极简静物 fine-art',
      titleEn: 'Minimal Still Life',
      media: '<img src="Portfolio/06-still-life.png" alt="极简静物 fine-art">',
      prompt: 'fine-art 静物摄影，风格为 17 世纪荷兰黄金时代静物画的光影传统在当代摄影中的再现。\n\n构图：深色胡桃木桌面，铺一块原色未漂白亚麻布。主体梨：一颗成熟的金黄带浅红晕的西洋梨，放在画面中心稍偏左。梨皮可见自然果点（lenticels）、轻微瑕疵、清澈水珠挂在梨腹偏左处。右下角：哑光釉面的浅米色陶瓷碗，斜放两枚紫色无花果。\n\n光线：单一光源模拟左侧大窗的柔和侧光，色温 5000K，30° 斜下。梨拉出一道长而柔和的阴影。\n\n镜头：85mm 中长焦，f/2.8，焦点在梨腹的水珠上。色调：深沉大地色（深棕、暖米、暗金），低饱和。\n\n氛围：内省、安静、近乎宗教感的庄重。画幅 4:5。'
    }
  };

  // ===== AUDIO (Web Audio synthesized) =====
  function ensureAudio() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { soundOn = false; }
    }
  }
  function beep(freq, dur, type, vol) {
    if (!soundOn) return;
    ensureAudio();
    if (!audioCtx) return;
    try {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type || 'sine';
      o.frequency.value = freq;
      g.gain.value = vol || 0.06;
      o.connect(g); g.connect(audioCtx.destination);
      const t = audioCtx.currentTime;
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.start(t); o.stop(t + dur);
    } catch (e) {}
  }
  const SFX = {
    click: () => beep(880, 0.05, 'square', 0.04),
    confirm: () => { beep(700, 0.06, 'sine'); setTimeout(() => beep(1100, 0.1, 'sine'), 60); },
    cancel: () => { beep(500, 0.06, 'sine'); setTimeout(() => beep(330, 0.1, 'sine'), 60); },
    boot: () => {
      beep(523, 0.15, 'sine', 0.08);
      setTimeout(() => beep(659, 0.15, 'sine', 0.08), 130);
      setTimeout(() => beep(784, 0.18, 'sine', 0.08), 260);
      setTimeout(() => beep(1047, 0.4, 'sine', 0.1), 400);
    },
    error: () => beep(180, 0.25, 'sawtooth', 0.06),
    home: () => { beep(1200, 0.05, 'sine'); setTimeout(() => beep(900, 0.08, 'sine'), 50); }
  };

  // ===== BOOT SCREEN =====
  function bootStart() {
    document.body.classList.remove('boot-mode');
    const boot = document.getElementById('bootScreen');
    const console = document.getElementById('console');
    SFX.boot();
    setTimeout(() => {
      boot.classList.add('hidden');
      console.classList.add('active');
      console.setAttribute('aria-hidden', 'false');
      activateAllStatBars();
    }, 600);
  }

  document.getElementById('bootScreen').addEventListener('click', () => {
    soundOn = true;
    document.getElementById('muteToggle').textContent = '🔊';
    bootStart();
  });

  // ===== STATUS BAR CLOCK =====
  function updateClock() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    document.getElementById('statusTime').textContent = h + ':' + m;
    const dateEl = document.getElementById('homeDate');
    if (dateEl) {
      dateEl.textContent = langZh
        ? `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
        : d.toDateString();
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  // ===== TILE NAVIGATION =====
  const tiles = document.querySelectorAll('.game-tile');
  function selectTile(idx) {
    selectedTile = (idx + tiles.length) % tiles.length;
    tiles.forEach((t, i) => t.classList.toggle('tile-selected', i === selectedTile));
    SFX.click();
  }
  tiles.forEach((tile, i) => {
    tile.addEventListener('click', () => {
      selectedTile = i;
      enterGame(tile.dataset.game);
    });
    tile.addEventListener('mouseenter', () => selectTile(i));
  });
  if (tiles.length) tiles[0].classList.add('tile-selected');

  // ===== GAME ENTER / RETURN =====
  window.enterGame = function (gameId) {
    SFX.confirm();
    document.getElementById('homeMenu').classList.remove('active');
    document.getElementById('homeMenu').hidden = true;
    TILES.forEach(id => {
      const el = document.getElementById('game' + id);
      if (el) el.hidden = (id !== gameId);
    });
    currentGame = gameId;
    if (gameId === '01') activateAllStatBars();
    if (gameId === '04') {
      // Reset to featured tab
      switchAlbumTab('featured');
    }
  };
  window.returnHome = function () {
    SFX.home();
    document.getElementById('homeMenu').hidden = false;
    document.getElementById('homeMenu').classList.add('active');
    TILES.forEach(id => {
      const el = document.getElementById('game' + id);
      if (el) el.hidden = true;
    });
    currentGame = 'home';
  };
  function nextGame() {
    if (currentGame === 'home') return;
    const idx = TILES.indexOf(currentGame);
    enterGame(TILES[(idx + 1) % TILES.length]);
  }
  function prevGame() {
    if (currentGame === 'home') return;
    const idx = TILES.indexOf(currentGame);
    enterGame(TILES[(idx - 1 + TILES.length) % TILES.length]);
  }

  // ===== STAT BARS ANIMATION =====
  function activateAllStatBars() {
    requestAnimationFrame(() => {
      document.querySelectorAll('.stat-fill').forEach(el => {
        const pct = el.dataset.pct || '0';
        el.style.width = pct + '%';
      });
    });
  }

  // ===== TROPHY MODAL =====
  window.showTrophy = function (key) {
    const data = TROPHIES[key];
    if (!data) return;
    SFX.confirm();
    document.getElementById('trophyModalIcon').textContent = data.icon;
    document.getElementById('trophyModalTitle').textContent = langZh ? data.title : data.titleEn;
    const body = document.getElementById('trophyModalBody');
    body.style.whiteSpace = 'pre-wrap';
    body.textContent = langZh ? data.body : data.bodyEn;
    const imgWrap = document.getElementById('trophyModalImage');
    imgWrap.innerHTML = data.image ? `<img src="${data.image}" alt="${data.title}">` : '';
    document.getElementById('trophyOverlay').hidden = false;
  };
  window.closeTrophy = function (e) {
    if (!e || e.target.id === 'trophyOverlay' || e.target.classList.contains('modal-close')) {
      SFX.cancel();
      document.getElementById('trophyOverlay').hidden = true;
    }
  };

  // ===== WORK MODAL =====
  window.openWork = function (id) {
    const data = WORKS_DATA[id];
    if (!data) return;
    SFX.confirm();
    document.getElementById('workModalMedia').innerHTML = data.media;
    document.getElementById('workModalTitle').textContent = langZh ? data.title : data.titleEn;
    const promptEl = document.getElementById('workModalPrompt');
    promptEl.textContent = data.prompt;
    promptEl.dataset.raw = data.prompt;
    document.getElementById('workOverlay').hidden = false;
  };
  window.closeWork = function (e) {
    if (!e || e.target.id === 'workOverlay' || e.target.classList.contains('modal-close')) {
      SFX.cancel();
      document.getElementById('workOverlay').hidden = true;
      setTimeout(() => { document.getElementById('workModalMedia').innerHTML = ''; }, 300);
    }
  };
  window.copyWorkPrompt = function () {
    const text = document.getElementById('workModalPrompt').dataset.raw || '';
    const btn = document.querySelector('.work-modal-copy');
    const lbl = document.getElementById('workCopyLabel');
    const ok = () => {
      btn.classList.add('copied');
      lbl.textContent = langZh ? '✓ 已复制' : '✓ Copied';
      setTimeout(() => {
        btn.classList.remove('copied');
        lbl.textContent = langZh ? '复制 Prompt' : 'Copy Prompt';
      }, 1800);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(ok).catch(() => fallbackCopy(text, ok));
    } else {
      fallbackCopy(text, ok);
    }
  };
  function fallbackCopy(text, ok) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); ok(); } catch (e) {}
    document.body.removeChild(ta);
  }

  // ===== ALBUM TAB SWITCH =====
  window.switchAlbumTab = function (tab) {
    SFX.click();
    document.querySelectorAll('.album-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.getElementById('albumFeatured').hidden = (tab !== 'featured');
    document.getElementById('albumFull').hidden = (tab !== 'full');
    if (tab === 'full' && !pdfDoc) loadPdf();
  };

  // ===== PDF LOADING =====
  async function loadPdf() {
    if (typeof pdfjsLib === 'undefined') return;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    try {
      pdfDoc = await pdfjsLib.getDocument('图像作品集.pdf').promise;
      pdfTotal = pdfDoc.numPages;
      document.getElementById('pdfPageTotal').textContent = pdfTotal;
      pdfPage = 1;
      renderPdfPage(1);
    } catch (e) {
      document.getElementById('pdfLoading').textContent = '加载失败，请尝试下载完整 PDF';
      console.error('PDF load error:', e);
    }
  }
  async function renderPdfPage(num) {
    if (!pdfDoc || pdfRendering) return;
    pdfRendering = true;
    const loading = document.getElementById('pdfLoading');
    loading.hidden = false;
    try {
      const page = await pdfDoc.getPage(num);
      const canvas = document.getElementById('pdfCanvas');
      const ctx = canvas.getContext('2d');
      const wrap = document.querySelector('.pdf-canvas-wrap');
      const maxW = (wrap.clientWidth - 32) || 800;
      const viewport0 = page.getViewport({ scale: 1 });
      const scale = maxW / viewport0.width;
      const viewport = page.getViewport({ scale });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
      document.getElementById('pdfPageCurrent').textContent = num;
      pdfPage = num;
    } catch (e) {
      console.error(e);
    } finally {
      pdfRendering = false;
      loading.hidden = true;
    }
  }
  document.getElementById('pdfPrev').addEventListener('click', () => {
    if (pdfPage > 1) { SFX.click(); renderPdfPage(pdfPage - 1); }
  });
  document.getElementById('pdfNext').addEventListener('click', () => {
    if (pdfPage < pdfTotal) { SFX.click(); renderPdfPage(pdfPage + 1); }
  });

  // ===== LANGUAGE TOGGLE =====
  document.getElementById('langToggle').addEventListener('click', () => {
    langZh = !langZh;
    document.body.classList.toggle('lang-en', !langZh);
    document.documentElement.lang = langZh ? 'zh-CN' : 'en';
    document.getElementById('langToggle').textContent = langZh ? '中' : 'EN';
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
      el.textContent = el.getAttribute(langZh ? 'data-zh' : 'data-en') || el.textContent;
    });
    SFX.click();
  });

  // ===== MUTE TOGGLE =====
  document.getElementById('muteToggle').addEventListener('click', () => {
    soundOn = !soundOn;
    document.getElementById('muteToggle').textContent = soundOn ? '🔊' : '🔇';
    if (soundOn) SFX.click();
  });

  // ===== CONSOLE BUTTONS =====
  document.getElementById('btnHome').addEventListener('click', () => {
    if (currentGame !== 'home') returnHome();
  });
  document.getElementById('btnPlus').addEventListener('click', () => {
    if (currentGame === 'home') {
      enterGame(tiles[selectedTile].dataset.game);
    } else {
      nextGame();
    }
  });
  document.getElementById('btnMinus').addEventListener('click', () => {
    if (currentGame !== 'home') prevGame();
  });

  // POWER BUTTON: long press 2s = reboot
  let powerTimer = null;
  const btnPower = document.getElementById('btnPower');
  btnPower.addEventListener('mousedown', () => {
    powerTimer = setTimeout(() => {
      // Power off animation
      const ov = document.getElementById('powerOverlay');
      ov.hidden = false;
      requestAnimationFrame(() => ov.classList.add('fade-in'));
      SFX.cancel();
      setTimeout(() => location.reload(), 600);
    }, 1500);
  });
  ['mouseup', 'mouseleave'].forEach(ev => btnPower.addEventListener(ev, () => clearTimeout(powerTimer)));

  // CAPTURE BUTTON: print PDF resume
  document.getElementById('btnCapture').addEventListener('click', () => {
    SFX.confirm();
    // Trigger print dialog (browser prints to PDF)
    setTimeout(() => window.print(), 100);
  });

  // ===== KEYBOARD =====
  document.addEventListener('keydown', (e) => {
    // Ignore when modal open or typing
    if (!document.getElementById('trophyOverlay').hidden) {
      if (e.key === 'Escape') closeTrophy();
      return;
    }
    if (!document.getElementById('workOverlay').hidden) {
      if (e.key === 'Escape') closeWork();
      return;
    }

    // Konami code tracker
    konamiTrack(e.key);

    if (currentGame === 'home') {
      if (e.key === 'ArrowRight') { selectTile(selectedTile + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft')  { selectTile(selectedTile - 1); e.preventDefault(); }
      if (e.key === 'Enter' || e.key === ' ') { enterGame(tiles[selectedTile].dataset.game); e.preventDefault(); }
    } else {
      if (e.key === 'b' || e.key === 'B' || e.key === 'Escape') { returnHome(); e.preventDefault(); }
      if (e.key === '+' || e.key === '=') { nextGame(); e.preventDefault(); }
      if (e.key === '-' || e.key === '_') { prevGame(); e.preventDefault(); }
      if (currentGame === '04') {
        if (e.key === 'ArrowRight') { document.getElementById('pdfNext').click(); }
        if (e.key === 'ArrowLeft')  { document.getElementById('pdfPrev').click(); }
      }
    }
  });

  // ===== KONAMI CODE EGG =====
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiBuffer = [];
  function konamiTrack(key) {
    konamiBuffer.push(key.toLowerCase().length === 1 ? key.toLowerCase() : key);
    if (konamiBuffer.length > KONAMI.length) konamiBuffer.shift();
    if (konamiBuffer.join('|') === KONAMI.join('|')) {
      activateKonami();
      konamiBuffer = [];
    }
  }
  function activateKonami() {
    const ov = document.getElementById('konamiOverlay');
    ov.hidden = false;
    document.body.classList.add('snes-mode');
    // Boot-style sound
    [262, 330, 392, 523, 659].forEach((f, i) => setTimeout(() => beep(f, 0.12, 'square', 0.08), i*80));
    setTimeout(() => { ov.hidden = true; }, 2400);
    setTimeout(() => { document.body.classList.remove('snes-mode'); }, 6000);
  }

  // ===== L-STICK ROTATE WITH SCROLL =====
  let scrollRot = 0;
  document.querySelectorAll('.screen-content, .game-body').forEach(el => {
    el.addEventListener('wheel', (e) => {
      scrollRot += e.deltaY * 0.05;
      const stickL = document.querySelector('.joycon-stick-left');
      const stickR = document.querySelector('.joycon-stick-right');
      if (stickL) stickL.style.transform = `rotate(${scrollRot}deg)`;
      if (stickR) stickR.style.transform = `rotate(${-scrollRot * 0.5}deg)`;
    }, { passive: true });
  });

  // ===== INIT =====
  document.body.classList.remove('boot-mode');

})();
