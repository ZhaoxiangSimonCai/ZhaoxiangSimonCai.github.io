export const site = {
  name: 'Zhaoxiang (Simon) Cai',
  nameShort: 'Zhaoxiang Cai',
  initials: 'ZC',
  role: 'Cancer Data Scientist · CINSW Early Career Fellow',
  tagline:
    'Deep learning for cancer multi-omics. Federated learning, generative models, foundation models for proteomics.',
  url: 'https://zhaoxiangsimoncai.github.io',
  description:
    'Personal site of Dr Zhaoxiang (Simon) Cai — Cancer Institute NSW Early Career Fellow, Senior Data Scientist at Children\u2019s Medical Research Institute, and Adjunct Lecturer at the University of Sydney. Cancer multi-omics, deep learning, federated learning, generative AI.',
  email: 'zhaoxiang.cai@sydney.edu.au',
  nav: [
    { href: '/research/', label: 'Research' },
    { href: '/projects/', label: 'Projects' },
    { href: '/talks/', label: 'Talks' },
    { href: '/teaching/', label: 'Teaching' },
    { href: '/about/', label: 'About' },
    { href: '/cv/', label: 'CV' },
  ],
  socials: {
    email: 'mailto:zhaoxiang.cai@sydney.edu.au',
    scholar: 'https://scholar.google.com/citations?user=J-pGEioAAAAJ&hl=en',
    github: 'https://github.com/ZhaoxiangSimonCai',
    linkedin: 'https://www.linkedin.com/in/zhaoxiang-cai/',
    twitter: 'https://twitter.com/olimon660',
  },
  affiliations: [
    {
      name: "Children's Medical Research Institute",
      nameShort: 'CMRI',
      nameShortZh: 'CMRI',
      role: 'CINSW Early Career Fellow · Senior Data Scientist',
      roleZh: 'CINSW 青年学者 · 高级数据科学家',
      url: 'https://www.cmrijeansforgenes.org.au/research/research-teams/procan',
      logo: '/logos/cmri.svg',
    },
    {
      name: 'The University of Sydney',
      nameShort: 'USyd',
      nameShortZh: '悉尼大学',
      role: 'Adjunct Lecturer',
      roleZh: '兼任讲师（Adjunct Lecturer）',
      url: 'https://www.sydney.edu.au/',
      logo: '/logos/usyd.svg',
    },
  ],
  collaborators: [
    {
      name: 'Wellcome Sanger Institute',
      url: 'https://www.sanger.ac.uk/',
      note: 'Cambridge, UK',
    },
    {
      name: 'University of Lisbon',
      url: 'https://www.ulisboa.pt/en',
      note: 'Portugal',
    },
    {
      name: 'Hudson Institute of Medical Research',
      url: 'https://hudson.org.au/',
      note: 'Melbourne',
    },
  ],
  cv: {
    path: '/cv/zhaoxiang-cai-cv-research.pdf',
    label: 'Download CV (PDF)',
    lastUpdated: '2026-04',
  },
} as const;

export type Site = typeof site;
