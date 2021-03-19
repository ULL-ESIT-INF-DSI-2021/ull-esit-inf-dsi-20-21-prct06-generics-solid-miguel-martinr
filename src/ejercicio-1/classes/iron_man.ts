import { effectVal, Fighter } from './fighter';
import { Marvel } from './marvel';
import { Pokemon } from './pokemon';


export class IronMan extends Marvel {
  constructor() {
    super('Iron Man', 1.85, 130, 60, 70, 55, 85, 'EARTH');
  }

  talk(): string {
    return `I am Iron Man`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    if (defender instanceof Pokemon) return effectVal.notQuiteEffective;

    if (defender instanceof Marvel) {
      switch (defender.getPlanet()) {
        case 'ASGARD': return effectVal.notQuiteEffective;
        case 'EARTH': return effectVal.notQuiteEffective;
        case 'TITAN': return effectVal.superEffective;
        case 'ZenWhoberi': return effectVal.neutral;
      }
    }
    return effectVal.neutral;
  }
};
