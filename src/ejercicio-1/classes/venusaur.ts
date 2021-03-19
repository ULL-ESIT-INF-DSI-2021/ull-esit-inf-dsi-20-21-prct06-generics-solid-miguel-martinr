import { Fighter, effectVal } from './fighter';
import { Marvel } from './marvel';
import { Pokemon } from './pokemon';

export class Venusaur extends Pokemon {
  constructor() {
    super('Venusaur', 0.3, 15, 82, 83, 80, 80, 'GRASS');
  }

  talk(): string {
    return `Saurrr!`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    if (defender instanceof Marvel) {
      if (defender.getPlanet() === 'ASGARD') return effectVal.notQuiteEffective;
      return effectVal.superEffective;
    }

    if (defender instanceof Pokemon) {
      switch (defender.getType()) {
        case 'ELECTRIC': return effectVal.neutral;
        case 'FIRE': return effectVal.notQuiteEffective;
        case 'GRASS': return effectVal.notQuiteEffective;
        case 'WATER': return effectVal.superEffective;
      }
    }
    return effectVal.neutral;
  }
};
