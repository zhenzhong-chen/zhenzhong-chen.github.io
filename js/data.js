/* ═══════════════════════════════════════════════════
   Site content configuration — edit this file to change
   all site text. No need to touch index.html or style.css.
   ═══════════════════════════════════════════════════ */

const SITE = {

  /* ── Basic info ── */
  meta: {
    title: "Chen Lab | Wuhan University",                                   // Browser tab title
    name:  "Chen Lab",                                                      // Display name
    en:    "Wuhan University",                                              // Full English name
    affiliation: "Wuhan University · School of Remote Sensing and Information Engineering",  // Top bar
    address: "Room 1002, Teaching & Experimental Building, Information Sciences Campus, Wuhan University, Wuhan, Hubei",
    postcode: "430072",
    copyright: "© 2026 Chen Lab, Wuhan University. All rights reserved."
  },

  /* ── Hero section ── */
  hero: {
    eyebrow: "Wuhan University · Chen Lab",
    title: "Transforming AI Technologies into Reality",
    lead: "We aim to conduct frontier research in artificial intelligence and multimedia applications, with our innovative technologies incorporated into international standards and deployed in industry products, serving billions of people.",
    cta: "Explore Our Research",
    /* Real photo applied: assets/hero-right.jpg (fades into the hero background on the right) */
    image: "assets/hero-right.jpg"
  },

  /* ── Project cards ── */
  projects: [
    { title: "Agentic Multimodal Reasoning",      desc: "Develop multimodal reasoning agents to tackle real-world problems.", image: "assets/projects/agentic-multimodal-reasoning.svg",
      detail: { text: "", references: [] } },   /* Details popup: text (blank line = new paragraph, inline HTML OK); references (each item may contain <a> links) */
    { title: "Generative Video Compression",      desc: "Develop diffusion-based video compression for extremely low bit rate video communications.", image: "assets/projects/generative-video-compression.svg",
      detail: { text: "", references: [] } },
    { title: "Image & Video Coding Standards",    desc: "Develop deep-learning-based technologies to boost the image & video coding performance.", image: "assets/projects/image-video-coding-standards.svg",
      detail: { text: "", references: [] } },
    { title: "Quality of User Experience",        desc: "Develop subjective and objective methods and standards to measure QoS and QoE.", image: "assets/projects/quality-of-experience.svg",
      detail: { text: "", references: [] } }
  ],

  /* ── News (tag options: Paper / Project / Honor / Visit / Opening / Standard) ── */
  news: [
    { date: "2026-09", tag: "Opening",   text: "We are recruiting students to the 2027 M.Sc./M.Eng.(2-year) programs — join us!" },
    { date: "2026-09", tag: "Honor",      text: "Our group won the championship in ECCV 2026 Challenge on Ultra-Low Bitrate Image Compression." },
    { date: "2026-07", tag: "Standard",   text: "VL-DRF was adopted in JVET NNVC, as the first neural network-based inter coding tool." },
    { date: "2026-06", tag: "Honor",      text: "Our group won 4 championships in CVPR 2026 NTIRE." },
    { date: "2026-05", tag: "Honor",      text: "Our group won the championship in ISCAS 2026 Grand Challenge on Neural Network-based Video Coding." }
  ],

  /* ── Selected publications (venue: name; type: "conf" dark / "journal" orange / "arxiv" blue) ── */
  pubs: [
    {
      venue: "arXiv", type: "arxiv",
      title: "DiffVC-ONE: Diffusion-based Generative Video Compression with One-Step Video Diffusion Transformer",
      authors: "Wenzhuo Ma, <b>Zhenzhong Chen</b>",
      links: [["PDF", "https://arxiv.org/pdf/2608.20515"], ["Project", "https://gorgeousmwz.github.io/DiffVC-ONE-project"]]
    },
    {
      venue: "TMM 2026", type: "journal",
      title: "LOP: Learning Optimal Pruning for Efficient On-Demand MLLMs Scaling",
      authors: "Zhihan Zhang, Xiang Pan, Hongchen Wei, <b>Zhenzhong Chen</b>",
      links: [["PDF", "https://arxiv.org/pdf/2506.12826"], ["Project", "#"]]
    },
    {
      venue: "TCSVT 2026", type: "journal",
      title: "An Efficient Neural Rate Control for JPEG-AI",
      authors: "Xiang Pan, Guanchen Ding, <b>Zhenzhong Chen</b>, Chang Wen Chen",
      links: [["PDF", "https://ieeexplore.ieee.org/document/11178061"], ["Project", "#"]]
    },
    {
      venue: "TIP 2025", type: "journal",
      title: "Space-Time Video Super-Resolution With Neural Operator",
      authors: "Yuantong Zhang, et al.",
      links: [["PDF", "https://arxiv.org/pdf/2404.06036"], ["Project", "https://github.com/hahazh/STVSR-NO"]]
    },
    {
      venue: "CVPR 2026", type: "conf",
      title: "See What We Cannot See: A Geo-guided Reasoning Benchmark for Object Counting under Adverse Earth Observation Conditions",
      authors: "Jiayi Wang, et al.",
      links: [["PDF", "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_See_What_We_Cannot_See_A_Geo-guided_Reasoning_Benchmark_for_CVPR_2026_paper.pdf"], ["Project", "https://github.com/jwang-rs/GROC"]]
    }
  ],

  /* ── Team ── */
  director: {
    name: "Prof. Zhenzhong Chen",
    role: "Lab Director",
    bio: "Zhenzhong Chen is a Professor at Wuhan University. His research interests include image and video processing, computer vision, MLLM, etc. He has published more than 300 international journal or conference papers. He serves as Senior Area Editor of IEEE TIP and IEEE TCSVT. He has been an editor of ITU-T SG12, VQEG board member and IMG Group Co-Chair, and Co-chair of China AVS Quality Assessment working group. He has developed ITU-T P.919/P.940/P.UXV, and contributed over 300 technical proposals to HEVC/H.265, VVC/H.266, MPEG VCM/FCM, JPEG-AI, AVS1/2/3, IEEE 1857, etc. He was a recipient of the CUHK Young Scholars Dissertation Award, the CUHK Faculty of Engineering Outstanding Ph.D. Thesis Award, Microsoft Fellowship, Shenzhen Patent Award, etc.",
    image: "assets/avatars/director-cartoon.png"   /* Cartoon avatar generated from his portrait; swap for a real photo if needed */
  },
  /* ── Current PhD students (names from zhenzhong-chen.github.io) ── */
  students: [
    { name: "Junxi Zhang",   role: "Ph.D. Student, 2022 –",   image: "assets/avatars/junxi-zhang.svg" },
    { name: "Hongchen Wei",  role: "Ph.D. Student, 2023 –",   image: "assets/avatars/hongchen-wei.svg" },
    { name: "Wenzhuo Ma",    role: "Ph.D. Student, 2024 –",   image: "assets/avatars/wenzhuo-ma.svg" },
    { name: "Nianxiang Fu",  role: "Ph.D. Student, 2025 –",   image: "assets/avatars/nianxiang-fu.svg" },
    { name: "Jingyun Liu",   role: "Ph.D. Student, 2025 –",   image: "assets/avatars/jingyun-liu.svg" },
    { name: "Yifei Wang",    role: "Ph.D. Student, 2026 –",   image: "assets/avatars/yifei-wang.svg" },
    { name: "Yanxi He",      role: "Ph.D. Student, 2026 –",   image: "assets/avatars/yanxi-he.svg" },
    { name: "Xingchen Yi",   role: "Ph.D. Student, 2027 –",   image: "assets/avatars/xingchen-yi.svg" },
    { name: "Y. Gao",        role: "Incoming Ph.D. Student",  image: "assets/avatars/ygao.svg" },
    { name: "J. Wang",       role: "Incoming Ph.D. Student",  image: "assets/avatars/j-wang.svg" }
  ],
  /* ── PhD alumni (line 1: name + year; line 2: placement) ── */
  phdAlumni: [
    { name: "Yingxue Zhang",  year: "2020", note: "Tianjin University of Science and Technology" },
    { name: "Kao Zhang",      year: "2020", note: "Nanjing University of Information Science and Technology" },
    { name: "Di Liu",         year: "2020", note: "Huawei" },
    { name: "Wanjie Sun",     year: "2020", note: "Wuhan University" },
    { name: "Yiming Li",      year: "2020", note: "Tencent (Top Tech Talent Program)" },
    { name: "Wei Wu",         year: "2021", note: "Alibaba" },
    { name: "Xiaoying Ding",  year: "2021", note: "Zhongnan University of Economics and Law" },
    { name: "Zizheng Liu",    year: "2021", note: "Tencent (Top Tech Talent Program)" },
    { name: "Feiyang Liu",    year: "2021", note: "Baidu" },
    { name: "Yangjun Ou",     year: "2021", note: "Wuhan Textile University" },
    { name: "Aoqi Li",        year: "2022", note: "The University of Manchester" },
    { name: "Yaosi Hu",       year: "2023", note: "The Hong Kong Polytechnic University" },
    { name: "Guangjie Ren",   year: "2023", note: "Tencent (Top Tech Talent Program)" },
    { name: "Han Zhu",        year: "2024", note: "Tencent (Qingyun Program)" },
    { name: "Huairui Wang",   year: "2024", note: "Tencent (Qingyun Program)" },
    { name: "Jiayi Xie",      year: "2024", note: "TikTok (ByteDance) Singapore" },
    { name: "Jing Yi",        year: "2025", note: "Tencent (Qingyun Program)" },
    { name: "Yuantong Zhang", year: "2026", note: "Tencent (Qingyun Program)" }
  ],

  /* ── Join us ── */
  join: [
    "Postdoctoral Researchers — <a href='https://rsb.whu.edu.cn/info/2531/35121.htm' target='_blank'>Hongyi Postdoc Fellowship</a>, annual salary RMB 300K–400K plus project bonus. Send your CV via email if interested.",
    "Ph.D. Students — apply via the <a href='https://docs.qq.com/form/page/DQllCRExkYXJseVZk' target='_blank'>Ph.D. Application Form</a>.",
    "Master Students (M.S./M.Eng.) — apply via the <a href='https://docs.qq.com/form/page/DQkZ3eXhRVHNFTVpr' target='_blank'>Master Application Form</a>.",
    "Undergraduate Interns (UROP) — apply via the <a href='https://docs.qq.com/form/page/DQlFXanBiVkp1TGxC' target='_blank'>UROP Application Form</a>."
  ],

  /* ── Contact ── */
  contact: {
    email: "zzchen@whu.edu.cn",
    phone: "+86-27-6877-8546 (Office)",
    wechat: "Chen Laboratory (WeChat Official Account)"
  },

  /* ── Navigation (rarely changed; sync index.html sections when adding/removing) ── */
  nav: [
    ["Home", "#home"], ["Research", "#projects"],
    ["News", "#news"], ["Publications", "#pubs"], ["Team", "#team"], ["Join Us", "#join"]
  ]
};
