import { effectVal, Fighter } from "./fighter";
import 'colors';
export class Combat<A extends Fighter, B extends Fighter> {
  constructor(private fighterA: A, private fighterB: B) {

  }

  private calcDamage(attack: number, defense: number, effectiveness: effectVal) {
    return 50 * (attack / defense) * effectiveness;
  }

  private damageCaused(attacker: A | B, defender: A | B): number {
    return this.calcDamage(attacker.getAttack(), defender.getDefense(), 
        attacker.getEffectiveness(defender));
  }

  start(): string[] {
    const battleLog: string[] = [];

    const initialStatusLog: string = `Starting battle...\n`.yellow + 
      `${this.fighterA.getName()} HP: ${this.fighterA.getHitPoints()} ${this.fighterA.talk()}\n`.blue +
      `${this.fighterB.getName()} HP: ${this.fighterB.getHitPoints()} ${this.fighterB.talk()}\n`.blue;

    console.log(initialStatusLog);
    battleLog.push(initialStatusLog);
      
    let i: number = 0;
    let attacker: A | B;
    let defender: A | B;

    while (this.fighterA.getHitPoints() > 0 && this.fighterB.getHitPoints() > 0) {
      if (i % 2 === 0) {
        attacker = this.fighterA;
        defender = this.fighterB;
      } else {
        attacker = this.fighterB;
        defender = this.fighterA;
      }

      defender.setHitPoints(defender.getHitPoints() - this.damageCaused(attacker, defender));
      defender.setHitPoints( defender.getHitPoints() < 0 ? 0 : defender.getHitPoints());

      console.log(this.printStatus(attacker, defender));
      battleLog.push(this.printStatus(attacker, defender));
      i++;
    }

    const winner = this.fighterA.getHitPoints() > 0 ? this.fighterA : this.fighterB;
      
    const winnerMsg: string = `\n${winner.getName()} WINS!  ${winner.talk()}\n`.blue;

    battleLog.push(winnerMsg);
    console.log(winnerMsg);

    return battleLog;
  }

  private printStatus(attacker: A | B = this.fighterA, defender: A | B = this.fighterB): string {
    return `${attacker.getName()} Attacked! ${attacker.talk()} HP: ${attacker.getHitPoints()}\n`.green +
            `${defender.getName()} Is under attack! ${defender.talk()} HP: ${defender.getHitPoints()}\n\n`.red;
  }
}

