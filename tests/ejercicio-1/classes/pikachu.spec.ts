import 'mocha';
import { expect } from 'chai';
import { Pikachu } from '../../../src/ejercicio-1/classes/pikachu';
import { Marvel } from '../../../src/ejercicio-1/classes/marvel';
import { effectVal, Fighter } from '../../../src/ejercicio-1/classes/fighter';

/**
 * Mock class for testing Pikachu
 */
class MockMarvel extends Marvel {
  constructor() {
    super('Mock Marvel', 1, 2, 3, 4, 5, 6, 'EARTH');
  }

  talk(): string {
    return 'I am a Mock Marvel character';
  }

  getEffectiveness(defender: Fighter) {
    return effectVal.neutral;
  }
}

describe('Pikachu tests', () => {
  const pikachu = new Pikachu();
  it('Can be initialized', () => {
    expect(pikachu instanceof Pikachu).to.be.true;
  });

  it('Talks', () => {
    expect(pikachu.talk()).to.be.eq('Pika Pika!');
  });

  it('It is an electric pokémon', () => {
    expect(pikachu.getType()).to.be.eq('ELECTRIC');
  });

  it('Gets effectiveness against another Pikachu', () => {
    expect(pikachu.getEffectiveness(new Pikachu())).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness against a grass Pokemon', () => {
    const mockGrass = new Pikachu();
    mockGrass.setType('GRASS');
    expect(pikachu.getEffectiveness(mockGrass)).to.be.eq(effectVal.neutral);
  });
  it('Gets effectiveness against a fire Pokemon', () => {
    const mockFire = new Pikachu();
    mockFire.setType('FIRE');
    expect(pikachu.getEffectiveness(mockFire)).to.be.eq(effectVal.neutral);
  });
  it('Gets effectiveness against a water Pokemon', () => {
    const mockWater = new Pikachu();
    mockWater.setType('WATER');
    expect(pikachu.getEffectiveness(mockWater)).to.be.eq(effectVal.superEffective);
  });
  it('Gets effectiveness against a poison Pokemon', () => {
    const mockPoison = new Pikachu();
    mockPoison.setType('POISON');
    expect(pikachu.getEffectiveness(mockPoison)).to.be.eq(effectVal.neutral);
  });

  it('Gets effectiveness against a non ASgardian Marvel character', () => {
    expect(pikachu.getEffectiveness(new MockMarvel())).to.be.eq(effectVal.superEffective);
  });

  it('Gets effectiveness against an Asgardian', () => {
    const mockAsgardian = new MockMarvel();
    mockAsgardian.setPlanet('ASGARD');  
    expect(pikachu.getEffectiveness(mockAsgardian)).to.be.eq(effectVal.notQuiteEffective);
  });
});

