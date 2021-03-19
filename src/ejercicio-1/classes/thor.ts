import { effectVal, Fighter } from "./fighter";
import { Marvel } from "./marvel";
import { Pokemon } from "./pokemon";


export class Thor extends Marvel {
  constructor() {
    super('Thor', 1.90, 140, 60, 30, 23, 30, 'ASGARD');
  }

  talk(): string {
    return `Fortunately, I am mighty!`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.superEffective;
  }
};
