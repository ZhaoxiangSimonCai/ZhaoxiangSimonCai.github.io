export interface SuperviseeEntry {
  name: string;
  role: string;
  institution: string;
  years: string;
  project?: string;
  contribution: string;
  highlight?: string;
}

export const intro = `My institutional context (a research-focused appointment based at CMRI) offers limited opportunity for conventional coursework teaching, so my education contribution is centred on research training: HDR co-supervision, postdoctoral mentoring, thesis examination, and informal mentorship of clinician-researchers and computational early-career researchers. Below is a summary of my current teaching and supervision activities.`;

export const hdrSupervision: readonly SuperviseeEntry[] = [
  {
    name: 'Ms Fatemeh Mehdikhani',
    role: 'PhD candidate (co-supervisor)',
    institution: 'University of Sydney',
    years: '2025 – present',
    project:
      'Non-invasive diagnosis and classification of nevi and early-stage melanoma combining machine learning with imaging and proteomic data',
    contribution:
      'Computational methodology, model development, data analysis, interpretation. First formal HDR supervision role at the University of Sydney, undertaken after completing the USyd Higher Degree Research Student Supervisor Training Course (2024).',
  },
];

export const postdocSupervision: readonly SuperviseeEntry[] = [
  {
    name: 'Postdoctoral researcher',
    role: 'Primary supervisor',
    institution: "Children's Medical Research Institute",
    years: '2026 – 2028',
    project:
      'Generative proteomic foundation models with federated learning for multi-hospital cancer research (CINSW Early Career Fellowship)',
    contribution:
      'Research direction, generative AI and multi-omics skills development, mentorship for scientific writing and independent career development. A substantive emerging leadership role in researcher development, building on prior collaborative mentorship.',
  },
];

export const thesisExamination: readonly SuperviseeEntry[] = [
  {
    name: 'Ms Rita Brito Gama',
    role: 'External thesis examiner — Master of Philosophy',
    institution: 'University of Lisbon',
    years: '2025',
    project:
      'GAIN-DANN: A Domain-Adversarial Generative Model for Missing Data Imputation in Proteomics',
    contribution:
      'Critical assessment of the written thesis and participation in the oral defence (20-minute presentation followed by 40 minutes of discussion). Invited to this role based on expertise in machine learning for proteomics; the candidate successfully defended her thesis.',
  },
];

export const informalMentorship = {
  summary: `Beyond formal roles, a significant part of my education contribution is through mentoring colleagues and emerging researchers at CMRI. I regularly advise clinician-researchers and junior team members on bioinformatic analysis, machine learning approaches, and project design. These mentoring interactions help researchers from clinical and biological backgrounds engage confidently with computational methods outside their original training, contributing to broader capability building in cancer data science.`,
  highlights: [
    {
      title: 'Co-authored Cancer Discovery publication',
      detail:
        'Mentorship of Dr Emma Boys (medical oncologist and PhD candidate) on machine-learning methods for Cancers of Unknown Primary contributed directly to a co-authored publication in Cancer Discovery (2025).',
    },
    {
      title: 'Clinician-researcher mentorship',
      detail:
        'Ongoing technical guidance for Dr Liz Connolly (medical oncologist and PhD candidate) on bioinformatic analysis, differential expression, and survival analysis for prostate cancer research.',
    },
    {
      title: 'Junior researcher onboarding',
      detail:
        'Supported the integration of Dr Di Xiao into the Cancer Data Science team, with guidance on computational platforms and analytical tools.',
    },
  ],
} as const;

export const formalTeaching = [
  {
    role: 'Casual Tutor — Algorithms & Data Structures',
    institution: 'Monash University',
    years: '2013 – 2014',
    note: 'Delivered tutorials in computational subjects supporting student learning in algorithm design and implementation.',
  },
] as const;

export const professionalTraining = [
  {
    title: 'Higher Degree Research Student Supervisor Training Course',
    institution: 'University of Sydney',
    year: '2024',
    note: 'Prepared formal HDR supervision responsibilities within the Faculty of Medicine and Health.',
  },
] as const;
