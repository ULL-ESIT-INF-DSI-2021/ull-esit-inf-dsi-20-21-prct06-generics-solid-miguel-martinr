import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../../src/ejercicio-1/classes/pokemon';
import { Fighter, effectVal } from '../../../src/ejercicio-1/classes/fighter';

class MockPokemon extends Pokemon {
  constructor() {
    super('Mock Pokemon', 1.6, 70, 100, 80, 100, 98, 'ELECTRIC');
  }

  talk(): string {
    return `Mock Pokemon!`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.notQuiteEffective;
  }
}


describe('Pokemon tests', () => {
  const mockPokemon = new MockPokemon();
  it('Can be initialized', () => {
    expect(mockPokemon instanceof Pokemon).to.be.true;
  });
  it('Type', () => {
    // Getter
    expect(mockPokemon.getType()).to.be.eq('ELECTRIC');
    
    // Setter
    mockPokemon.setType('WATER');
    expect(mockPokemon.getType()).to.be.eq('WATER');
  });
});
