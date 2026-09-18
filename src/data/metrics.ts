export const metrics = {
  hIndex: 8,
  i10Index: 8,
  totalCitations: 1166,
  totalCitationsAsOf: '2026-09',
  scholarUrl: 'https://scholar.google.com/citations?user=J-pGEioAAAAJ&hl=en',
  peerReviewedPapers: 10,
  firstOrCoFirstAuthor: 5,
  totalFunding: '$2.59M+',
  totalFundingNote: 'includes $1M in-kind GPU compute',
  fellowship: {
    name: 'Cancer Institute NSW Early Career Fellowship',
    years: '2026–2028',
    amount: '$597,732',
    note: 'Sole Chief Investigator',
    awardedYear: 2025,
  },
  featuredPaperVenues: ['Cancer Cell', 'Cancer Discovery', 'Nature Communications'],
} as const;

export type Metrics = typeof metrics;
