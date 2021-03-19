import { Pokemon } from './pokemon';

export class Pikachu extends Pokemon {
  constructor() {
    super('Pikachu', 0.4, 5, 55, 40, 90, 35, 'ELECTRIC');
  }

  talk(): string {
    return `Pika Pika!`;
  }
};
