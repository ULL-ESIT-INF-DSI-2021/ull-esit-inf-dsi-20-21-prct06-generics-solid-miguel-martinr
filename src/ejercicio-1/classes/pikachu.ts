import { effectVal, Fighter } from './fighter';
import { Marvel } from './marvel';
import { Pokemon } from './pokemon';

export class Pikachu extends Pokemon {
  constructor() {
    super('Pikachu', 0.4, 5, 55, 40, 90, 200, 'ELECTRIC');
  }

  talk(): string {
    return `Pika Pika!`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    if (defender instanceof Marvel) {
      if (defender.getPlanet() === 'ASGARD') return effectVal.notQuiteEffective;
      return effectVal.superEffective;
    }

    if (defender instanceof Pokemon) {
      switch (defender.getType()) {
        case 'ELECTRIC': return effectVal.notQuiteEffective;
        case 'FIRE': return effectVal.neutral;
        case 'GRASS': return effectVal.neutral;
        case 'WATER': return effectVal.superEffective;
      }
    }
    return effectVal.neutral;
  }
};
