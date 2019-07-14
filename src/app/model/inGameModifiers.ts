import { InGameCondition } from './enums';

export class InGameModifier {

  constructor(
    public description: InGameCondition,
    public applied: boolean = false) {

  }

}
