export abstract class IAttackEffect {
  description: string;
  summary: string;
  details: string;
  displayDescription: boolean;

  getSummary: () => string;
  getDetails: () => string;
  applyAugmentSummoning: () => void;
}
