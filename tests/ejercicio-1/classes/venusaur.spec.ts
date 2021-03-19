import 'mocha';
import { expect } from 'chai';
import { Venusaur } from '../../../src/ejercicio-1/classes/venusaur';
import { effectVal, Fighter } from '../../../src/ejercicio-1/classes/fighter';
import { Marvel } from '../../../src/ejercicio-1/classes/marvel';

 
/**
 * Mock class for testing Venusaur
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

describe('Venusaur tests', () => {
  const venusaur = new Venusaur();
  it('Can be initialized', () => {
    expect(venusaur instanceof Venusaur).to.be.true;
  });
  it('Talks', () => {
    expect(venusaur.talk()).to.be.eq('Saurrr!');
  });
  it('It is a grass pokémon', () => {
    expect(venusaur.getType()).to.be.eq('GRASS');
  });

  it('Gets effectiveness against another Venusaur', () => {
    expect(venusaur.getEffectiveness(new Venusaur())).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness against an electric Pokemon', () => {
    const mockElectric = new Venusaur();
    mockElectric.setType('ELECTRIC');
    expect(venusaur.getEffectiveness(mockElectric)).to.be.eq(effectVal.neutral);
  });
  it('Gets effectiveness against a fire Pokemon', () => {
    const mockFire = new Venusaur();
    mockFire.setType('FIRE');
    expect(venusaur.getEffectiveness(mockFire)).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness against a water Pokemon', () => {
    const mockWater = new Venusaur();
    mockWater.setType('WATER');
    expect(venusaur.getEffectiveness(mockWater)).to.be.eq(effectVal.superEffective);
  });
  it('Gets effectiveness against a poison Pokemon', () => {
    const mockPoison = new Venusaur();
    mockPoison.setType('POISON');
    expect(venusaur.getEffectiveness(mockPoison)).to.be.eq(effectVal.neutral);
  });

  it('Gets effectiveness against a non Asgardian Marvel character', () => {
    expect(venusaur.getEffectiveness(new MockMarvel())).to.be.eq(effectVal.superEffective);
  });

  it('Gets effectiveness against an Asgardian', () => {
    const mockAsgardian = new MockMarvel();
    mockAsgardian.setPlanet('ASGARD');  
    expect(venusaur.getEffectiveness(mockAsgardian)).to.be.eq(effectVal.notQuiteEffective);
  });
});

