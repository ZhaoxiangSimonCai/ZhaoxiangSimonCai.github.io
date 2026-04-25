export const education = [
  {
    degree: 'Doctor of Philosophy (Cancer Data Science)',
    institution: 'University of Sydney / Children\u2019s Medical Research Institute',
    years: '2020 – 2023',
    note: 'Thesis: Large-Scale and Pan-Cancer Proteogenomic Analyses with Machine Learning. Sydney Cancer Partners PhD Scholarship recipient.',
  },
  {
    degree: 'Master of Business Analytics (First Class Honours)',
    institution: 'Melbourne Business School, University of Melbourne',
    years: '2018',
    note: 'KPMG-MBS Data Challenge: 1st Prize (NLP). MBS Scholarship. Co-President, Business Analytics Club.',
  },
  {
    degree: 'Bachelor of Computer Science (First Class Honours)',
    institution: 'Monash University',
    years: '2011 – 2014',
    note: 'Dux of Bachelor of Computer Science (highest overall ranking). Bellamy Awards (top student, 2011 & 2012). International Merit Scholarship.',
  },
] as const;

export interface Award {
  year: number;
  title: string;
  amount?: string;
}

export const awards: readonly Award[] = [
  {
    year: 2025,
    title: 'Cancer Institute NSW Early Career Fellowship — Sole Chief Investigator',
    amount: '$597,732 (2026–2028)',
  },
  {
    year: 2024,
    title:
      'Medical Research Future Fund (MRFF) Early to Mid-Career Researchers — Associate Investigator (paediatric high-grade glioma immunotherapy)',
    amount: '$993,500 (2024–2027)',
  },
  { year: 2022, title: 'Sydney Cancer Partners PhD Scholarship' },
  { year: 2020, title: 'CMRI Peter Rowe PhD Scholarship' },
  { year: 2019, title: 'University of Sydney Innovation Challenge', amount: '1st Prize ($7,500; also 2020)' },
  { year: 2019, title: 'ODIR-2019 International Computer Vision Competition', amount: '3rd Prize (\u2248$20,000)' },
  { year: 2013, title: 'Dux of Bachelor of Computer Science', amount: 'Monash University' },
];

export interface ServiceItem {
  category: string;
  title: string;
  detail: string;
}

export const serviceItems: readonly ServiceItem[] = [
  {
    category: 'Editorial / convening',
    title: 'Cancer Data Science Journal Club',
    detail:
      'Founder and host since 2023. Monthly forum bringing together 10–15 researchers across the ProCan initiative (Cancer Data Science, Software Engineering, and Oncology teams) for critical discussion of recent work in cancer data science, machine learning, and multi-omics analysis.',
  },
  {
    category: 'Peer review',
    title: 'Manuscript review',
    detail:
      'Reviewer for high-impact international journals including Nature Communications, Genome Biology, and Briefings in Bioinformatics. Approximately annual cadence.',
  },
  {
    category: 'Grant assessment',
    title: 'International funding bodies',
    detail:
      'External reviewer for grant applications to the Innovation and Technology Commission (Hong Kong, 2025) and the Dutch Research Council (NWO, 2025).',
  },
  {
    category: 'Sector engagement',
    title: 'AAMRI working groups',
    detail:
      'Participant in working groups for the Association of Australian Medical Research Institutes — extending service from institute and journal-based contributions into national sector engagement.',
  },
];

export const skillGroups = [
  {
    title: 'Machine learning & AI',
    items: ['Deep neural networks', 'Transformers', 'Variational autoencoders', 'Generative models', 'Federated learning', 'Multi-view integration'],
  },
  {
    title: 'Bioinformatics & multi-omics',
    items: [
      'End-to-end proteomic analysis (QC, rollup, DE, pathway, survival)',
      'Whole exome / genome sequencing',
      'Copy number variation',
      'Structural variants',
      'Single-cell RNA-seq',
    ],
  },
  {
    title: 'Programming',
    items: ['Python', 'R', 'PyTorch', 'SQL', 'C++', 'Linux', 'Perl'],
  },
] as const;
