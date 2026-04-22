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
  { year: 2025, title: 'Cancer Institute NSW Early Career Fellowship', amount: '$597,732 (2026–2028)' },
  { year: 2024, title: 'Medical Research Future Fund (MRFF) Grant', amount: '$993,500 (Associate Investigator)' },
  { year: 2022, title: 'Sydney Cancer Partners PhD Scholarship' },
  { year: 2020, title: 'CMRI Peter Rowe PhD Scholarship' },
  { year: 2019, title: 'University of Sydney Innovation Challenge', amount: '1st Prize ($7,500; also 2020)' },
  { year: 2019, title: 'ODIR-2019 International Computer Vision Competition', amount: '3rd Prize (\u2248$20,000)' },
  { year: 2013, title: 'Dux of Bachelor of Computer Science', amount: 'Monash University' },
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
