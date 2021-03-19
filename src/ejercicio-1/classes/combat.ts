import { Fighter } from "./fighter";
import { Marvel } from "./marvel";
import { Pokemon } from "./pokemon";

export class Combat<A extends Fighter, B extends Fighter> {
  constructor(private fighterA: A, private fighterB: B) {

  }

  private calcDamage(attack: number, defense: number, effectiveness: effectVal) {
    return 50 * (attack / defense) * effectiveness;
  }

  
}
