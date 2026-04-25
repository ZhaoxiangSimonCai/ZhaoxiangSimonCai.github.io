// All translatable UI strings + Chinese-only prose. English is the canonical
// fallback. Scientific titles, author names, institutions, and DOIs stay in
// English regardless of language.

export const strings = {
  en: {
    locale: 'en',
    htmlLang: 'en-AU',
    siteName: 'Zhaoxiang (Simon) Cai',
    role: 'Cancer Data Scientist',
    nav: {
      research: 'Research',
      projects: 'Projects',
      teaching: 'Teaching',
      about: 'About',
      cv: 'CV',
    },
    common: {
      home: 'Home',
      back: 'Back',
      all: 'All',
      present: 'Present',
      readMore: 'Read more',
      downloadCv: 'Download CV',
      downloadPdf: 'Download PDF',
      openInNewTab: 'Open in new tab',
      lastUpdated: 'Last updated',
      copied: 'Copied',
      copy: 'Copy',
      copyFailed: 'Copy failed',
      langSwitch: 'Switch to 中文',
      themeToggle: 'Toggle colour theme',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skipToContent: 'Skip to content',
      builtWith: 'Built with Astro.',
      source: 'Source',
      copyright: '© {year} Zhaoxiang Cai.',
      affiliations: 'Affiliations & collaborations',
    },
    hero: {
      eyebrow: 'Cancer data scientist · Sydney',
      taglinePart1: 'Senior Data Scientist at',
      taglineMid: 'and Adjunct Lecturer at the',
      taglineEnd:
        '. I build deep-learning methods — federated, generative, and transformer-based — for cancer multi-omics, aimed at translation into clinical precision oncology.',
      ctaEmail: 'Email',
      ctaScholar: 'Google Scholar',
      cinswFellow: 'CINSW Fellow',
    },
    spotlight: {
      awarded: 'Awarded',
      scholar: 'Google Scholar',
      peerReviewed: 'Peer-reviewed',
      citations: 'citations',
      publications: 'publications',
      hIndex: 'h-index',
      i10: 'i10',
      firstCoFirst: 'first / co-first author',
      funding: 'funding',
    },
    home: {
      themesLabel: 'Research themes',
      themesTitle: 'What I work on',
      themesDescription:
        'Four threads run through my research — each links through to the related papers and projects.',
      featuredLabel: 'Featured publications',
      featuredTitle: 'Selected work',
      featuredDescription:
        'First and co-first author publications in Cancer Cell, Cancer Discovery, Nature Communications. See the full list on the research page.',
      featuredAll: 'All publications',
      projectsLabel: 'Projects',
      projectsTitle: 'Selected projects',
      projectsDescription: 'Code, datasets, and research artefacts.',
      projectsAll: 'All projects',
      collabsLabel: 'Collaborators',
      collabsTitle: 'Affiliations & collaborations',
      themes: [
        {
          title: 'Federated Learning',
          description:
            'Privacy-preserving deep learning across multiple hospitals, keeping raw patient data local while sharing only model updates.',
          tag: 'Federated Learning',
          icon: 'lucide:network',
        },
        {
          title: 'Generative AI',
          description:
            'Variational autoencoders and diffusion models to augment scarce multi-omic datasets and impute missing measurements.',
          tag: 'Generative AI',
          icon: 'lucide:sparkles',
        },
        {
          title: 'Multi-omics Integration',
          description:
            'End-to-end analysis across proteome, genome, transcriptome and drug response — finding signal the single-omic view misses.',
          tag: 'Multi-omics',
          icon: 'lucide:layers',
        },
        {
          title: 'Foundation Models',
          description:
            'Proteomic foundation models for multi-hospital cancer research — my current Cancer Institute NSW Fellowship programme.',
          tag: 'Foundation Models',
          icon: 'lucide:brain-circuit',
        },
      ],
    },
    research: {
      label: 'Publications',
      title: 'Research',
      description: (n: number) =>
        `${n} peer-reviewed publications — filter by theme or browse chronologically.`,
      filterAria: 'Filter by tag',
      allCount: (n: number) => `All (${n})`,
      backToList: 'All research',
      abstract: 'Abstract',
      bibtex: 'BibTeX',
      viewOnPublisher: 'View on publisher',
      pdf: 'PDF',
      source: 'Source',
      firstAuthor: 'First author',
      coFirstAuthor: 'Co-first author',
      doi: 'DOI',
      code: 'Code',
    },
    projects: {
      label: 'Projects',
      title: 'Projects',
      description:
        'Code, datasets, and research artefacts — from federated learning frameworks to proteomic resources used by thousands of researchers.',
      backToList: 'All projects',
      sourceBtn: 'Source',
      paperBtn: 'Paper',
      websiteBtn: 'Website',
    },
    about: {
      label: 'About',
      title: 'Biography',
      bio: [
        `I am a cancer data scientist specialising in artificial intelligence and machine learning for large-scale molecular data analysis. I hold a first-class honours degree in Computer Science from Monash University, where I graduated as the top student, and a PhD in Cancer Data Science from the University of Sydney. After gaining software engineering experience at Goldman Sachs, I transitioned to cancer research and now serve as an Adjunct Lecturer at the University of Sydney and Senior Data Scientist at the Children's Medical Research Institute (CMRI).`,
        `My research focuses on developing and applying deep learning methods to cancer multi-omics data, with particular expertise in federated learning, generative models, and transformer architectures. As co-first author on the landmark *Cancer Cell* study mapping the proteomic landscape of 949 human cancer cell lines, I contributed to one of the field's most widely used resources (230+ citations). My subsequent first-author publications in *Cancer Discovery* and *Nature Communications* have introduced novel approaches in federated deep learning for privacy-preserving cancer subtyping, and generative AI for synthetic augmentation of multi-omic datasets. I maintain active international collaborations with the Wellcome Sanger Institute (UK) and the University of Lisbon (Portugal).`,
        `In 2025, I was awarded a Cancer Institute NSW Early Career Fellowship to develop proteomic foundation models integrated with federated learning for multi-hospital cancer research. My work to date has generated over 900 citations (h-index: 8) and I have contributed to more than $1.59 million in competitive research funding. I am driven by the goal of translating advanced computational methods into practical tools that improve cancer diagnosis and prognosis through precision medicine.`,
      ],
      experienceLabel: 'Experience',
      experienceTitle: 'Professional appointments',
      educationLabel: 'Education',
      educationTitle: 'Qualifications',
      awardsLabel: 'Awards & funding',
      awardsTitle: 'Awards and honours',
      serviceLabel: 'Service',
      serviceTitle: 'Service & community',
      serviceDescription:
        'Editorial leadership, peer review, grant assessment, and sector engagement.',
      skillsLabel: 'Skills',
      skillsTitle: 'Technical skills',
      collabsLabel: 'Collaborations',
      collabsTitle: 'Partners & affiliations',
    },
    teaching: {
      label: 'Teaching & supervision',
      title: 'Teaching',
      groups: {
        hdr: { label: 'HDR co-supervision', title: 'Doctoral students' },
        postdoc: {
          label: 'Postdoctoral supervision',
          title: 'Postdoctoral researchers',
        },
        thesis: { label: 'Thesis examination', title: 'External examination' },
      },
      mentorshipLabel: 'Informal mentorship',
      mentorshipTitle: 'Mentorship at CMRI',
      trainingLabel: 'Professional training',
      trainingTitle: 'Supervision training',
      project: 'Project:',
    },
    cv: {
      label: 'Curriculum Vitae',
      title: 'Full CV',
      description: (date: string) =>
        `Last updated ${date}. Download the PDF or view it inline below.`,
      iframeFallback:
        'If the PDF does not render (some browsers block embedded PDFs),',
      downloadIt: 'download it directly',
      iframeTitle: 'Curriculum Vitae',
    },
    notFound: {
      title: "This page doesn't exist.",
      blurb: 'It might have moved, or perhaps it never did. Try one of these instead.',
    },
  },

  zh: {
    locale: 'zh',
    htmlLang: 'zh-CN',
    siteName: '蔡兆翔 (Simon)',
    role: '癌症数据科学家',
    nav: {
      research: '研究',
      projects: '项目',
      teaching: '教学',
      about: '关于',
      cv: '简历',
    },
    common: {
      home: '主页',
      back: '返回',
      all: '全部',
      present: '至今',
      readMore: '阅读更多',
      downloadCv: '下载简历',
      downloadPdf: '下载 PDF',
      openInNewTab: '在新标签打开',
      lastUpdated: '最近更新',
      copied: '已复制',
      copy: '复制',
      copyFailed: '复制失败',
      langSwitch: 'Switch to English',
      themeToggle: '切换主题',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      skipToContent: '跳到正文',
      builtWith: '由 Astro 构建。',
      source: '源代码',
      copyright: '© {year} 蔡兆翔（Zhaoxiang Cai）。',
      affiliations: '所属机构与合作单位',
    },
    hero: {
      eyebrow: '癌症数据科学家 · 悉尼',
      taglinePart1: '现任',
      taglineMid: '高级数据科学家，并担任',
      taglineEnd:
        '兼职讲师。我专注于联邦学习、生成式模型与 Transformer 架构等深度学习方法在肿瘤多组学数据中的应用，致力于将其转化为临床精准肿瘤学的实用工具。',
      ctaEmail: '邮件',
      ctaScholar: 'Google Scholar',
      cinswFellow: 'CINSW 早期职业研究员',
    },
    spotlight: {
      awarded: '获得于',
      scholar: 'Google Scholar',
      peerReviewed: '同行评审',
      citations: '次引用',
      publications: '篇',
      hIndex: 'h 指数',
      i10: 'i10 指数',
      firstCoFirst: '第一/共同第一作者',
      funding: '研究经费',
    },
    home: {
      themesLabel: '研究方向',
      themesTitle: '我的研究',
      themesDescription: '我的研究主要围绕以下四个方向展开,每个方向都链接至相关论文和项目。',
      featuredLabel: '代表性论文',
      featuredTitle: '精选成果',
      featuredDescription:
        '在 Cancer Cell、Cancer Discovery、Nature Communications 等期刊发表的第一作者及共同第一作者论文。完整列表请参见研究页面。',
      featuredAll: '查看全部论文',
      projectsLabel: '项目',
      projectsTitle: '精选项目',
      projectsDescription: '代码、数据集与研究成果。',
      projectsAll: '查看全部项目',
      collabsLabel: '合作伙伴',
      collabsTitle: '所属机构与合作单位',
      themes: [
        {
          title: '联邦学习',
          description:
            '在多家医院之间进行隐私保护的深度学习训练,原始患者数据保留在本地,仅共享模型更新。',
          tag: 'Federated Learning',
          icon: 'lucide:network',
        },
        {
          title: '生成式 AI',
          description:
            '使用变分自编码器与扩散模型扩充稀缺的多组学数据集,并对缺失测量值进行填补。',
          tag: 'Generative AI',
          icon: 'lucide:sparkles',
        },
        {
          title: '多组学整合',
          description:
            '从蛋白质组、基因组、转录组到药物响应的端到端分析 —— 发现单一组学视角下被掩盖的信号。',
          tag: 'Multi-omics',
          icon: 'lucide:layers',
        },
        {
          title: '基础模型',
          description:
            '面向多医院癌症研究的蛋白质组基础模型 —— 这是我当前 Cancer Institute NSW Fellowship 的主要研究方向。',
          tag: 'Foundation Models',
          icon: 'lucide:brain-circuit',
        },
      ],
    },
    research: {
      label: '论文',
      title: '研究',
      description: (n: number) => `${n} 篇同行评审论文 —— 可按主题筛选或按时间浏览。`,
      filterAria: '按标签筛选',
      allCount: (n: number) => `全部 (${n})`,
      backToList: '所有研究',
      abstract: '摘要',
      bibtex: 'BibTeX',
      viewOnPublisher: '前往出版方页面',
      pdf: 'PDF',
      source: '源代码',
      firstAuthor: '第一作者',
      coFirstAuthor: '共同第一作者',
      doi: 'DOI',
      code: '代码',
    },
    projects: {
      label: '项目',
      title: '项目',
      description:
        '代码、数据集与研究成果 —— 从联邦学习框架到被全球数千名研究人员使用的蛋白质组资源。',
      backToList: '所有项目',
      sourceBtn: '源代码',
      paperBtn: '论文',
      websiteBtn: '网站',
    },
    about: {
      label: '关于',
      title: '简介',
      bio: [
        '我是一名癌症数据科学家,专注于人工智能与机器学习方法在大规模分子数据分析中的应用。我以最优等级毕业于莫纳什大学(Monash University)计算机科学专业,并获得悉尼大学(University of Sydney)癌症数据科学博士学位。在高盛(Goldman Sachs)从事软件工程工作后,我转入癌症研究领域,目前担任儿童医学研究所(Children’s Medical Research Institute, CMRI)高级数据科学家,以及悉尼大学兼职讲师(Adjunct Lecturer)。',
        '我的研究聚焦于将深度学习方法应用于癌症多组学数据,在联邦学习、生成式模型与 Transformer 架构方面具有专长。作为 *Cancer Cell* 上 949 株人类癌细胞系蛋白质组学图谱研究的共同第一作者,我参与构建了该领域被广泛使用的资源(被引超过 230 次)。随后我以第一作者身份在 *Cancer Discovery* 与 *Nature Communications* 发表论文,提出了用于隐私保护肿瘤分型的联邦深度学习方法,以及用于多组学数据合成增强的生成式 AI 方法。我与英国 Wellcome Sanger Institute 及葡萄牙里斯本大学保持长期国际合作。',
        '2025 年,我获得 Cancer Institute NSW Early Career Fellowship,资助我开发结合联邦学习的蛋白质组基础模型,用于多医院癌症研究。截至目前,我的工作已产生 900 余次引用(h 指数 8),并参与了超过 159 万澳元的竞争性研究经费。我希望将先进的计算方法转化为实际工具,通过精准医疗改善癌症的诊断与预后。',
      ],
      experienceLabel: '工作经历',
      experienceTitle: '职业任职',
      educationLabel: '教育',
      educationTitle: '学历',
      awardsLabel: '奖项与经费',
      awardsTitle: '奖项与荣誉',
      serviceLabel: '服务',
      serviceTitle: '学术服务',
      serviceDescription: '学术组织、同行评审、基金评审与行业参与。',
      skillsLabel: '技能',
      skillsTitle: '技术技能',
      collabsLabel: '合作',
      collabsTitle: '合作伙伴与所属机构',
    },
    teaching: {
      label: '教学与指导',
      title: '教学',
      groups: {
        hdr: { label: '博士生联合指导', title: '博士研究生' },
        postdoc: { label: '博士后指导', title: '博士后研究人员' },
        thesis: { label: '论文评审', title: '校外评审' },
      },
      mentorshipLabel: '非正式指导',
      mentorshipTitle: 'CMRI 内部指导',
      trainingLabel: '专业培训',
      trainingTitle: '指导教师培训',
      project: '项目:',
    },
    cv: {
      label: '简历',
      title: '完整简历',
      description: (date: string) => `最近更新于 ${date}。可下载 PDF,或在下方在线查看。`,
      iframeFallback: '如果 PDF 未能正常显示(部分浏览器会拦截内嵌 PDF),',
      downloadIt: '请直接下载',
      iframeTitle: '简历',
    },
    notFound: {
      title: '页面不存在。',
      blurb: '该页面可能已移动,也可能从未存在。请尝试以下链接。',
    },
  },
} as const;

export type Lang = keyof typeof strings;
export type Strings = (typeof strings)[Lang];

// Chinese translations for things stored in collections / data files but
// needed when rendering the Chinese site. Keyed by English source.
export const expRoleZh: Record<string, string> = {
  'Senior Data Scientist - Cancer Institute NSW Fellow':
    '高级数据科学家(Cancer Institute NSW Fellow)',
  'Adjunct Lecturer': '兼职讲师(Adjunct Lecturer)',
  'Conjoint Associate Lecturer': '联合副讲师(Conjoint Associate Lecturer)',
  'PhD Candidate': '博士研究生',
  'Data Scientist': '数据科学家',
  'Analyst Programmer': '分析程序员',
};

export const expCompanyZh: Record<string, string> = {
  "Children's Medical Research Institute": '儿童医学研究所(CMRI)',
  'University of Sydney': '悉尼大学',
  'University of Sydney / CMRI': '悉尼大学 / CMRI',
  'Goldman Sachs': '高盛(Goldman Sachs)',
};

export const expDescZh: Record<string, string[]> = {
  // CMRI Senior DS
  'cmri-sds': [
    '研发新的深度学习方法,将人类先验知识引入多组学数据整合',
    '设计并构建针对多组学整合的多视图变分自编码器(VAE)模型',
    '完成全外显子组与全基因组测序的端到端分析,涵盖胚系/体细胞突变、拷贝数变异与结构变异',
    '完成蛋白质组数据的端到端分析,包括质控、肽段-蛋白质 rollup、预处理、差异表达、通路与生存分析',
    '探索病理图像与蛋白质组数据的整合,以辅助肿瘤诊断',
  ],
  'usyd-adjunct': ['医学与健康学院', '由联合副讲师(Conjoint Associate Lecturer)晋升而来(2023–2026)'],
  'usyd-conjoint': ['医学与健康学院'],
  'usyd-phd': [
    '论文:基于机器学习的大规模泛癌蛋白基因组分析',
    'Sydney Cancer Partners 博士奖学金获得者',
  ],
  'cmri-ds': [
    '基于现有模型构建小鼠发育生物学单细胞 RNA-seq 分析流程',
    '为活细胞成像数据构建深度学习模型',
  ],
  'gs-analyst': [
    '与业务方沟通,跟进项目范围',
    '为高盛电子交易(GSET)业务流程设计、开发、测试并部署系统方案',
    '提供生产环境支持,维护测试环境的稳定运行',
  ],
};

export const educationZh = [
  {
    degree: '哲学博士(癌症数据科学)',
    institution: '悉尼大学 / 儿童医学研究所',
    years: '2020 – 2023',
    note: '论文:基于机器学习的大规模泛癌蛋白基因组分析。Sydney Cancer Partners 博士奖学金获得者。',
  },
  {
    degree: '商业分析硕士(一级荣誉)',
    institution: '墨尔本大学商学院(Melbourne Business School)',
    years: '2018',
    note: 'KPMG-MBS 数据挑战赛:自然语言处理方向第一名。MBS 商业分析奖学金。商业分析俱乐部联合主席。',
  },
  {
    degree: '计算机科学学士(一级荣誉)',
    institution: '莫纳什大学(Monash University)',
    years: '2011 – 2014',
    note: '计算机科学学士专业第一名。Bellamy Award(2011 与 2012 年度优秀学生)。国际优才奖学金。',
  },
] as const;

interface AwardZh {
  year: number;
  title: string;
  amount?: string;
}

export const awardsZh: readonly AwardZh[] = [
  {
    year: 2025,
    title: 'Cancer Institute NSW Early Career Fellowship —— 唯一首席研究员',
    amount: '$597,732(2026–2028)',
  },
  {
    year: 2024,
    title:
      'Medical Research Future Fund(MRFF)早中期研究员资助 —— 助理研究员(儿童高级别胶质瘤免疫治疗)',
    amount: '$993,500(2024–2027)',
  },
  { year: 2022, title: 'Sydney Cancer Partners 博士奖学金' },
  { year: 2020, title: 'CMRI Peter Rowe 博士奖学金' },
  {
    year: 2019,
    title: 'University of Sydney Innovation Challenge',
    amount: '一等奖($7,500;2020 年再次获得)',
  },
  {
    year: 2019,
    title: 'ODIR-2019 国际计算机视觉挑战赛',
    amount: '三等奖(约 $20,000)',
  },
  { year: 2013, title: '计算机科学学士专业第一名', amount: 'Monash University' },
];

export const skillGroupsZh = [
  {
    title: '机器学习与人工智能',
    items: ['深度神经网络', 'Transformer', '变分自编码器(VAE)', '生成式模型', '联邦学习', '多视图整合'],
  },
  {
    title: '生物信息学与多组学',
    items: [
      '蛋白质组端到端分析(质控、rollup、差异表达、通路、生存分析)',
      '全外显子组 / 全基因组测序',
      '拷贝数变异分析',
      '结构变异分析',
      '单细胞 RNA-seq 分析',
    ],
  },
  {
    title: '编程',
    items: ['Python', 'R', 'PyTorch', 'SQL', 'C++', 'Linux', 'Perl'],
  },
] as const;

export const serviceItemsZh = [
  {
    category: '学术组织',
    title: 'Cancer Data Science 期刊俱乐部',
    detail:
      '自 2023 年发起并主持。每月一次的论坛,汇集 ProCan 项目中(Cancer Data Science、软件工程与肿瘤学团队)的 10–15 名研究人员,共同评议癌症数据科学、机器学习与多组学领域的最新工作。',
  },
  {
    category: '同行评审',
    title: '论文评审',
    detail: '为 Nature Communications、Genome Biology、Briefings in Bioinformatics 等高水平国际期刊评审论文,平均每年若干次。',
  },
  {
    category: '基金评审',
    title: '国际基金评审',
    detail: '为香港创新及科技局(2025)和荷兰研究理事会(NWO,2025)的基金申请担任外部评审专家。',
  },
  {
    category: '行业参与',
    title: 'AAMRI 工作组',
    detail:
      '参与澳大利亚医学研究所联盟(AAMRI)的工作组,将服务工作从机构与期刊层面延伸到全国医学研究领域。',
  },
] as const;

export const teachingZh = {
  intro:
    '由于我的工作以研究为主、依托于 CMRI,常规的课堂教学机会有限,因此我的教育贡献主要集中在研究培训方面:博士生联合指导、博士后指导、论文评审,以及对临床研究者与计算机背景早期职业研究者的非正式指导。下面汇总了我目前的教学与指导工作。',
  hdr: [
    {
      name: 'Ms Fatemeh Mehdikhani',
      role: '博士研究生(联合导师)',
      institution: '悉尼大学',
      years: '2025 – 至今',
      project: '结合机器学习、影像与蛋白质组数据的痣及早期黑色素瘤无创诊断与分类研究',
      contribution:
        '在计算方法、模型开发、数据分析与结果解读方面提供指导。这是我在悉尼大学的首个正式博士生指导工作,在完成 USyd Higher Degree Research Student Supervisor Training Course(2024)后开展。',
    },
  ],
  postdoc: [
    {
      name: '博士后研究人员',
      role: '主要指导教师',
      institution: 'Children’s Medical Research Institute',
      years: '2026 – 2028',
      project:
        '结合联邦学习的生成式蛋白质组基础模型,用于多医院癌症研究(CINSW Early Career Fellowship)',
      contribution:
        '研究方向把控、生成式 AI 与多组学技能培养,并在科学写作与独立职业发展方面提供指导。这是研究人才培养中一项实质性的早期领导工作,延续此前的合作指导经验。',
    },
  ],
  thesis: [
    {
      name: 'Ms Rita Brito Gama',
      role: '校外论文评审 —— 哲学硕士(MPhil)',
      institution: '葡萄牙里斯本大学',
      years: '2024',
      project: 'GAIN-DANN: A Domain-Adversarial Generative Model for Missing Data Imputation in Proteomics',
      contribution:
        '负责书面论文的批判性评审及口头答辩(20 分钟报告 + 40 分钟讨论)。基于在蛋白质组学机器学习方面的专长受邀担任评审,候选人成功通过了答辩。',
    },
  ],
  mentorshipSummary:
    '除了正式职责外,我也对 CMRI 的同事与早期职业研究人员投入大量非正式指导。我经常就生物信息学分析、机器学习方法与项目设计为临床研究者和初级团队成员提供建议,帮助有临床或生物学背景的研究者更自信地使用计算方法,从而推动癌症数据科学领域的整体能力建设。',
  mentorshipHighlights: [
    {
      title: '合作发表 Cancer Discovery 论文',
      detail: '对 CMRI 的 Dr Emma Boys 的指导,直接促成了一篇 Cancer Discovery(2025)合作论文的发表。',
    },
    {
      title: 'CMRI 博士研究生指导',
      detail:
        '持续指导 CMRI 内两名博士研究生在机器学习、生物信息学与蛋白质组数据分析方向的工作。',
    },
    {
      title: '跨团队计算指导',
      detail:
        '经常向 ProCan 项目下 Cancer Data Science、软件工程与肿瘤学等团队的同事提供非正式的计算指导。',
    },
  ],
  professionalTraining: [
    {
      title: 'Higher Degree Research Student Supervisor Training Course',
      institution: '悉尼大学',
      year: '2024',
      note: '为在医学与健康学院承担正式 HDR 指导职责做好准备。',
    },
  ],
} as const;
