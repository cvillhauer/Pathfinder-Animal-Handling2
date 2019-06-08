export interface IAttackEffect {
  description: string;
  summary: string;
  details: string;

  getSummary: () => string;
  getDetails: () => string;
  applyAugmentSummoning: () => void;
}
