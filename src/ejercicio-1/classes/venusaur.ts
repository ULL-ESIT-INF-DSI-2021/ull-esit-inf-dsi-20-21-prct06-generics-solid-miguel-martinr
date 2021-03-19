import { Pokemon } from './pokemon';

export class Venusaur extends Pokemon {
  constructor() {
    super('Venusaur', 0.3, 15, 82, 83, 80, 80, 'GRASS');
  }

  talk(): string {
    return `Saurrr!`;
  }
};
