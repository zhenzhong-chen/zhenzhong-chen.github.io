/* ═══════════════════════════════════════════════════
   站点内容（中文版）— 与 js/data.js（英文版）结构一致，
   由 index-cn.html 加载；渲染逻辑共用 js/main.js。
   修改文案只需编辑本文件。
   ═══════════════════════════════════════════════════ */

const SITE = {

  /* ── 基本信息 ── */
  meta: {
    title: "陈震中课题组 | 武汉大学",                            // 浏览器标签标题
    name:  "陈震中课题组",                                       // 站点名称
    en:    "武汉大学",                                            // 英文全称（页脚用）
    affiliation: "武汉大学 · 遥感信息工程学院",                    // 顶栏
    address: "湖北省武汉市武汉大学信息学部教学实验大楼 1002 室",
    postcode: "430072",
    copyright: "© 2026 陈震中课题组，武汉大学。保留所有权利。"
  },

  /* ── 首屏 ── */
  hero: {
    eyebrow: "武汉大学 · 陈震中课题组",
    title: "让人工智能技术走向现实",
    lead: "我们致力于人工智能与多媒体应用领域的前沿研究，推动创新技术被纳入国际标准、部署于工业产品，服务亿万用户。",
    cta: "了解我们的研究",
    /* 与英文版共用同一张头图 */
    image: "assets/hero-right.jpg"
  },

  /* ── 研究方向卡片 ── */
  projects: [
    { title: "智能体多模态推理",   desc: "研发具备多模态推理能力的智能体，解决真实世界中的复杂问题。", image: "assets/projects/agentic-multimodal-reasoning.svg",
      detail: { text: "", references: [] } },   /* 详情弹窗：text（空行分段，支持内联 HTML）；references（每项可含 <a> 链接） */
    { title: "生成式视频压缩",     desc: "研发基于扩散模型的视频压缩方法，面向极低码率视频通信。", image: "assets/projects/generative-video-compression.svg",
      detail: { text: "", references: [] } },
    { title: "图像与视频编码标准", desc: "研发基于深度学习的编码技术，持续提升图像与视频编码性能。", image: "assets/projects/image-video-coding-standards.svg",
      detail: { text: "", references: [] } },
    { title: "用户体验质量",       desc: "研发主观与客观方法及标准，度量服务质量（QoS）与体验质量（QoE）。", image: "assets/projects/quality-of-experience.svg",
      detail: { text: "", references: [] } }
  ],

  /* ── 新闻（tag 为中文显示文本；cls 对应配色，取值：paper / project / honor / visit / opening / standard）── */
  news: [
    { date: "2026-09", tag: "招生", cls: "opening",  text: "课题组招收 2027 级硕士研究生（2 年制）与专业学位硕士研究生，欢迎加入！" },
    { date: "2026-09", tag: "获奖", cls: "honor",    text: "课题组获 ECCV 2026 极低码率图像压缩挑战赛冠军。" },
    { date: "2026-07", tag: "标准", cls: "standard", text: "VL-DRF 被 JVET NNVC 采纳，成为首个基于神经网络的帧间编码工具。" },
    { date: "2026-06", tag: "获奖", cls: "honor",    text: "课题组在 CVPR 2026 NTIRE 挑战赛中斩获 4 项冠军。" },
    { date: "2026-05", tag: "获奖", cls: "honor",    text: "课题组获 ISCAS 2026 神经网络视频编码 Grand Challenge 冠军。" }
  ],

  /* ── 代表性论文（题名与作者保留英文原文，便于检索）── */
  pubs: [
    {
      venue: "arXiv", type: "arxiv",
      title: "DiffVC-ONE: Diffusion-based Generative Video Compression with One-Step Video Diffusion Transformer",
      authors: "Wenzhuo Ma, <b>Zhenzhong Chen</b>",
      links: [["PDF", "https://arxiv.org/pdf/2608.20515"], ["主页", "https://gorgeousmwz.github.io/DiffVC-ONE-project"]]
    },
    {
      venue: "TMM 2026", type: "journal",
      title: "LOP: Learning Optimal Pruning for Efficient On-Demand MLLMs Scaling",
      authors: "Zhihan Zhang, Xiang Pan, Hongchen Wei, <b>Zhenzhong Chen</b>",
      links: [["PDF", "https://arxiv.org/pdf/2506.12826"], ["主页", "#"]]
    },
    {
      venue: "TCSVT 2026", type: "journal",
      title: "An Efficient Neural Rate Control for JPEG-AI",
      authors: "Xiang Pan, Guanchen Ding, <b>Zhenzhong Chen</b>, Chang Wen Chen",
      links: [["PDF", "https://ieeexplore.ieee.org/document/11178061"], ["主页", "#"]]
    },
    {
      venue: "TIP 2025", type: "journal",
      title: "Space-Time Video Super-Resolution With Neural Operator",
      authors: "Yuantong Zhang, et al.",
      links: [["PDF", "https://arxiv.org/pdf/2404.06036"], ["主页", "https://github.com/hahazh/STVSR-NO"]]
    },
    {
      venue: "CVPR 2026", type: "conf",
      title: "See What We Cannot See: A Geo-guided Reasoning Benchmark for Object Counting under Adverse Earth Observation Conditions",
      authors: "Jiayi Wang, et al.",
      links: [["PDF", "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_See_What_We_Cannot_See_A_Geo-guided_Reasoning_Benchmark_for_CVPR_2026_paper.pdf"], ["主页", "https://github.com/jwang-rs/GROC"]]
    }
  ],

  /* ── 团队成员 ── */
  director: {
    name: "陈震中 教授",
    role: "课题组负责人",
    bio: "陈震中，武汉大学教授。研究兴趣包括图像与视频处理、计算机视觉、多模态大语言模型等。已发表国际期刊与会议论文 300 余篇。现任 IEEE TIP 与 IEEE TCSVT 高级领域编辑（Senior Area Editor）。同时担任 ITU-T SG12 编辑、VQEG 董事会成员及 IMG 工作组共同主席、中国 AVS 质量评价工作组共同主席。制定 ITU-T P.919/P.940/P.UXV 等标准，并向 HEVC/H.265、VVC/H.266、MPEG VCM/FCM、JPEG-AI、AVS1/2/3、IEEE 1857 等标准提交技术提案 300 余项。曾获香港中文大学青年学者博士论文奖、香港中文大学工程学院优秀博士学位论文奖、微软学者奖、深圳市专利奖等。",
    image: "assets/avatars/director-cartoon.png"
  },

  /* ── 在读博士研究生 ──
     name 为中文姓名，en 保留英文拼写以便对照。
     Y. Gao / J. Wang / Xingchen Yi 暂未采用中文姓名（学院名单无可靠对应），保留英文写法。 */
  students: [
    { name: "张莙茜", en: "Junxi Zhang",   role: "博士研究生，2022 –",   image: "assets/avatars/junxi-zhang.svg" },
    { name: "魏红陈", en: "Hongchen Wei",  role: "博士研究生，2023 –",   image: "assets/avatars/hongchen-wei.svg" },
    { name: "马文卓", en: "Wenzhuo Ma",    role: "博士研究生，2024 –",   image: "assets/avatars/wenzhuo-ma.svg" },
    { name: "付年祥", en: "Nianxiang Fu",  role: "博士研究生，2025 –",   image: "assets/avatars/nianxiang-fu.svg" },
    { name: "刘静云", en: "Jingyun Liu",   role: "博士研究生，2025 –",   image: "assets/avatars/jingyun-liu.svg" },
    { name: "王艺霏", en: "Yifei Wang",    role: "博士研究生，2026 –",   image: "assets/avatars/yifei-wang.svg" },
    { name: "何堰玺", en: "Yanxi He",      role: "博士研究生，2026 –",   image: "assets/avatars/yanxi-he.svg" },
    { name: "Xingchen Yi", en: "Xingchen Yi", role: "博士研究生，2027 –", image: "assets/avatars/xingchen-yi.svg" },
    { name: "Y. Gao",  en: "Y. Gao",  role: "", image: "assets/avatars/ygao.svg" },
    { name: "J. Wang", en: "J. Wang", role: "", image: "assets/avatars/j-wang.svg" }
  ],

  /* ── 在读研究生 / 本科生（UROP）──
     头像与英文版共用 assets/avatars/ 下的卡通头像。 */
  researchStudents: [
    { name: "叶亦轩", en: "Yixuan Ye",     role: "硕士研究生",   image: "assets/avatars/yixuan-ye.png" },
    { name: "谈治宏", en: "Zhihong Tan",   role: "硕士研究生",   image: "assets/avatars/zhihong-tan.png" },
    { name: "张文卓", en: "Wenzhuo Zhang", role: "硕士研究生",   image: "assets/avatars/wenzhuo-zhang.png" },
    { name: "陈鑫鑫", en: "Xinxin Chen",   role: "硕士研究生",   image: "assets/avatars/xinxin-chen.png" },
    { name: "黄启智", en: "Qizhi Huang",   role: "硕士研究生",   image: "assets/avatars/qizhi-huang.png" },
    { name: "刘涛",   en: "Tao Liu",       role: "硕士研究生",   image: "assets/avatars/tao-liu.png" },
    { name: "刘炎黄", en: "Yanhuang Liu",  role: "硕士研究生",   image: "assets/avatars/yanhuang-liu.png" },
    { name: "覃露怡", en: "Luyi Qin",      role: "硕士研究生", image: "assets/avatars/luyi-qin.png" },
    { name: "曲浩栋", en: "Haodong Qu",    role: "硕士研究生",   image: "assets/avatars/haodong-qu.png" },
    { name: "张智涵", en: "Zhihan Zhang",  role: "硕士研究生",   image: "assets/avatars/zhihan-zhang.png" },
    { name: "唐先河", en: "Xianhe Tang",   role: "硕士研究生",   image: "assets/avatars/xianhe-tang.png" },
    { name: "陈一鸣", en: "Yiming Chen",   role: "硕士研究生",   image: "assets/avatars/yiming-chen.png" },
    { name: "舒田",   en: "Tian Shu",      role: "硕士研究生",   image: "assets/avatars/tian-shu.png" },
    { name: "肖文强", en: "Wenqiang Xiao", role: "硕士研究生",   image: "assets/avatars/wenqiang-xiao.png" },
    { name: "苏莙莹", en: "Junying Su",    role: "硕士研究生", image: "assets/avatars/junying-su.png" },
    { name: "黄沁琦", en: "Qinqi Huang",   role: "本科生（UROP）", image: "assets/avatars/qinqi-huang.png" },
    { name: "梁宇康", en: "Yukang Liang",  role: "本科生（UROP）", image: "assets/avatars/yukang-liang.png" },
    { name: "刘柄昆", en: "Bingkun Liu",   role: "本科生（UROP）", image: "assets/avatars/bingkun-liu.png" },
    { name: "施瀚森", en: "Hanshen Shi",   role: "本科生（UROP）", image: "assets/avatars/hanshen-shi.png" },
    { name: "郭桐绮", en: "Tongqi Guo",    role: "本科生（UROP）", image: "assets/avatars/tongqi-guo.png" },
    { name: "赵振宇", en: "Zhenyu Zhao",   role: "本科生（UROP）", image: "assets/avatars/zhenyu-zhao.png" },
    { name: "周毅康", en: "Yikang Zhou",   role: "本科生（UROP）", image: "assets/avatars/yikang-zhou.png" },
    { name: "张舒庆", en: "Shuqing Zhang", role: "本科生（UROP）", image: "assets/avatars/shuqing-zhang.png" },
    { name: "林宸宇", en: "Chenyu Lin",    role: "本科生（UROP）", image: "assets/avatars/chenyu-lin.png" },
    /* 收尾卡片（非真实成员）*/
    { name: "敬请期待", role: "…", image: "assets/avatars/more-coming.png" }
  ],

  /* ── 博士校友（第 1 行：姓名 + 年份；第 2 行：毕业去向）── */
  phdAlumni: [
    { name: "张滢雪", year: "2020", note: "天津科技大学人工智能学院" },
    { name: "张考",   year: "2020", note: "南京信息工程大学" },
    { name: "刘迪",   year: "2020", note: "华为" },
    { name: "孙万捷", year: "2020", note: "武汉大学" },
    { name: "李一鸣", year: "2020", note: "腾讯（技术大咖）" },
    { name: "吴伟",   year: "2021", note: "阿里巴巴" },
    { name: "丁晓颖", year: "2021", note: "中南财经政法大学" },
    { name: "刘子政", year: "2021", note: "腾讯（技术大咖）" },
    { name: "柳费洋", year: "2021", note: "百度" },
    { name: "欧阳君", year: "2021", note: "武汉纺织大学" },
    { name: "李傲琪", year: "2022", note: "曼彻斯特大学" },
    { name: "胡姚姒", year: "2023", note: "香港理工大学" },
    { name: "任广杰", year: "2023", note: "腾讯（技术大咖）" },
    { name: "朱晗",   year: "2024", note: "腾讯（青云计划）" },
    { name: "王怀睿", year: "2024", note: "腾讯（青云计划）" },
    { name: "谢嘉仪", year: "2024", note: "字节跳动 TikTok（新加坡）" },
    { name: "易静",   year: "2025", note: "腾讯（青云计划）" },
    { name: "张圆通", year: "2026", note: "腾讯（青云计划）" }
  ],
  /* ── 硕士校友：仅给出总人数，名单见学院校友页 ── */
  msAlumniCount: 71,
  alumniSource: "https://iip.whu.edu.cn/about/alumni.html",
  /* ── 其他校友 ── */
  otherAlumniNote: "历届博士后、本科生、科研实习生/科研助理、访问学者等。",

  /* ── 加入我们 ── */
  join: [
    "博士后 — <a href='https://rsb.whu.edu.cn/info/2531/35121.htm' target='_blank'>弘毅博士后</a>，年薪 30–40 万元另加项目奖励。有意者请将简历发送至邮箱。",
    "博士研究生 — 请通过<a href='https://docs.qq.com/form/page/DQllCRExkYXJseVZk' target='_blank'>博士报名表</a>申请。",
    "硕士研究生（学术学位 / 专业学位）— 请通过<a href='https://docs.qq.com/form/page/DQkZ3eXhRVHNFTVpr' target='_blank'>硕士报名表</a>申请。",
    "本科生（UROP）— 请通过<a href='https://docs.qq.com/form/page/DQlFXanBiVkp1TGxC' target='_blank'>UROP 报名表</a>申请。"
  ],

  /* ── 联系方式 ── */
  contact: {
    email: "zzchen@whu.edu.cn",
    phone: "+86-27-6877-8546（办公室）",
    wechat: "陈震中课题组（微信公众号）"
  },

  /* ── 界面文案（覆盖 js/main.js 中的英文默认串）── */
  ui: {
    toBeAdded:      "待补充",
    references:     "参考文献",
    placeholderImg: "项目图片（占位）",
    phdAlumniTitle: "博士校友",
    phdAlumniDesc:  "已培养 {n} 名博士毕业生。",
    msAlumniTitle:  "硕士校友",
    msAlumniDesc:   "已指导或联合指导 {n} 名硕士毕业生。",
    otherAlumniTitle: "其他校友",
    fullList:       "在学院网站查看完整名单",
    email:          "邮箱",
    phone:          "电话",
    wechat:         "微信",
    postcode:       "邮编"
  },

  /* ── 导航（与 index-cn.html 中的 section id 对应）── */
  nav: [
    ["首页", "#home"], ["研究方向", "#projects"],
    ["新闻", "#news"], ["论文", "#pubs"], ["团队成员", "#team"], ["加入我们", "#join"]
  ]
};
