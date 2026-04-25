export const site = {
  name: 'Zhaoxiang (Simon) Cai',
  nameShort: 'Zhaoxiang Cai',
  initials: 'ZC',
  role: 'Cancer Data Scientist',
  tagline:
    'Deep learning for cancer multi-omics. Federated learning, generative models, foundation models for proteomics.',
  url: 'https://zhaoxiangsimoncai.github.io',
  description:
    'Personal site of Dr Zhaoxiang (Simon) Cai — Senior Data Scientist at Children\u2019s Medical Research Institute and Adjunct Lecturer at the University of Sydney. Cancer multi-omics, deep learning, federated learning, generative AI.',
  email: 'zhaoxiang.cai@sydney.edu.au',
  nav: [
    { href: '/research/', label: 'Research' },
    { href: '/projects/', label: 'Projects' },
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
      role: 'Senior Data Scientist (Cancer Data Science)',
      url: 'https://www.cmrijeansforgenes.org.au/research/research-teams/procan',
      logo: '/logos/cmri.svg',
    },
    {
      name: 'The University of Sydney',
      nameShort: 'USyd',
      role: 'Adjunct Lecturer',
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
