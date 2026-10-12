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
    bio: "Zhenzhong Chen is a Professor at Wuhan University. His research interests include image and video processing, computer vision, MLLM, etc. He has published more than 300 international journal or conference papers. He serves as Senior Area Editor of IEEE TIP and IEEE TCSVT. He also serves as an editor of ITU-T SG12, a VQEG board member and IMG Group Co-Chair, and Co-chair of the China AVS Quality Assessment working group. He developed ITU-T P.919/P.940/P.UXV, and contributed over 300 technical proposals to HEVC/H.265, VVC/H.266, MPEG VCM/FCM, JPEG-AI, AVS1/2/3, IEEE 1857, etc. He was a recipient of the CUHK Young Scholars Dissertation Award, the CUHK Faculty of Engineering Outstanding Ph.D. Thesis Award, Microsoft Fellowship, Shenzhen Patent Award, etc.",
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
    { name: "Y. Gao",        role: "Incoming ...",  image: "assets/avatars/ygao.svg" },
    { name: "J. Wang",       role: "Incoming ...",  image: "assets/avatars/j-wang.svg" }
  ],
  /* ── Research students (M.Sc.) ──
     Added 2026-10-04. The site displays the romanised name; `cn` keeps the Chinese
     name exactly as supplied, so the reading can be checked or switched later.
     No photos supplied yet → these cards show an initials avatar automatically;
     drop a file into assets/avatars/ and add an `image` field to use a real photo. */
  researchStudents: [
    /* Cartoon avatars were generated from the members' photos on
       https://iip.whu.edu.cn/about/people.html (2026-10-04).
       Members without a photo there share assets/avatars/placeholder-cartoon.svg. */
    { name: "Yixuan Ye",     cn: "叶亦轩", role: "M.Sc. Student",   image: "assets/avatars/yixuan-ye.png" },
    { name: "Zhihong Tan",   cn: "谈治宏", role: "M.Sc. Student",   image: "assets/avatars/zhihong-tan.png" },
    { name: "Wenzhuo Zhang", cn: "张文卓", role: "M.Sc. Student",   image: "assets/avatars/wenzhuo-zhang.png" },
    { name: "Xinxin Chen",   cn: "陈鑫鑫", role: "M.Sc. Student",   image: "assets/avatars/xinxin-chen.png" },
    { name: "Qizhi Huang",   cn: "黄启智", role: "M.Sc. Student",   image: "assets/avatars/qizhi-huang.png" },
    { name: "Tao Liu",       cn: "刘涛",   role: "M.Sc. Student",   image: "assets/avatars/tao-liu.png" },
    { name: "Yanhuang Liu",  cn: "刘炎黄", role: "M.Sc. Student",   image: "assets/avatars/yanhuang-liu.png" },
    { name: "Luyi Qin",      cn: "覃露怡", role: "M.Eng. Student",  image: "assets/avatars/luyi-qin.png" },
    { name: "Haodong Qu",    cn: "曲浩栋", role: "M.Sc. Student",   image: "assets/avatars/haodong-qu.png" },
    { name: "Zhihan Zhang",  cn: "张智涵", role: "M.Sc. Student",   image: "assets/avatars/zhihan-zhang.png" },
    { name: "Xianhe Tang",   cn: "唐先河", role: "M.Sc. Student",   image: "assets/avatars/xianhe-tang.png" },
    { name: "Yiming Chen",   cn: "陈一鸣", role: "M.Sc. Student",   image: "assets/avatars/yiming-chen.png" },
    { name: "Tian Shu",      cn: "舒田",   role: "M.Sc. Student",   image: "assets/avatars/tian-shu.png" },
    { name: "Wenqiang Xiao", cn: "肖文强", role: "M.Sc. Student",   image: "assets/avatars/wenqiang-xiao.png" },
    { name: "Junying Su",    cn: "苏莙莹", role: "M.Eng. Student",  image: "assets/avatars/junying-su.png" },
    { name: "Ruiyi Liu",     cn: "刘芮屹", role: "M.Eng. Student",  image: "assets/avatars/ruiyi-liu.png" },
    /* UROP undergraduates, added 2026-10-04 / 2026-10-05 / 2026-10-10. All current entries have a
       cartoon avatar generated from a supplied photo (赵振宇/周毅康/张舒庆/林宸宇 re-added
       2026-10-10 once their photos arrived in ~/Downloads/硕士生人像 2). */
    { name: "Qinqi Huang",   cn: "黄沁琦", role: "UROP Student",    image: "assets/avatars/qinqi-huang.png" },
    { name: "Yukang Liang",  cn: "梁宇康", role: "UROP Student",    image: "assets/avatars/yukang-liang.png" },
    { name: "Bingkun Liu",   cn: "刘柄昆", role: "UROP Student",    image: "assets/avatars/bingkun-liu.png" },
    { name: "Hanshen Shi",   cn: "施瀚森", role: "UROP Student",    image: "assets/avatars/hanshen-shi.png" },
    { name: "Tongqi Guo",    cn: "郭桐绮", role: "UROP Student",    image: "assets/avatars/tongqi-guo.png" },
    { name: "Zhenyu Zhao",   cn: "赵振宇", role: "UROP Student",    image: "assets/avatars/zhenyu-zhao.png" },
    { name: "Yikang Zhou",   cn: "周毅康", role: "UROP Student",    image: "assets/avatars/yikang-zhou.png" },
    { name: "Shuqing Zhang", cn: "张舒庆", role: "UROP Student",    image: "assets/avatars/shuqing-zhang.png" },
    { name: "Chenyu Lin",    cn: "林宸宇", role: "UROP Student",    image: "assets/avatars/chenyu-lin.png" },
    /* Closing card: collage of member avatars (assets/avatars/more-coming.png,
       built 2026-10-06 from 10 of the avatars above) — not a real member. */
    { name: "More to come", role: "…", image: "assets/avatars/more-coming.png" }
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
  /* ── M.Sc./M.Eng. alumni ──
     Headline number only: the "M.Sc./M.Eng. Alumni" card states how many
     M.Sc./M.Eng. graduates the group has supervised or co-supervised, without
     listing individual names on this site.
     71 = rows with degree "M.Sc." / "M.Eng." (incl. (CS) / (Joint)) in table 1 of
     https://iip.whu.edu.cn/about/alumni.html — 55 M.Sc. + 16 M.Eng., 2015–2026
     (as of 2026-10-04). Update this number if the source page changes.
     Full entries, if ever needed, are in ms-alumni-backup.json (project root). */
  msAlumniCount: 71,
  /* Alumni page of the IIP site — linked from the M.Sc./M.Eng. and Other cards. */
  alumniSource: "https://iip.whu.edu.cn/about/alumni.html",
  /* ── Other alumni ──
     Summary card only (no individual listing): the kinds of people who also
     spent time with the group but are not Ph.D. / M.Sc./M.Eng. graduates. */
  otherAlumniNote: "Former Postdoc Fellows, Undergraduate Students, Research Interns/Assistants, Visitors, etc.",

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
