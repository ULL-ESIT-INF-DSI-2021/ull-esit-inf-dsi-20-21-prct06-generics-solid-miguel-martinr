import 'mocha';
import { expect } from 'chai';
import { Marvel} from '../../../src/ejercicio-1/classes/marvel';
import { effectVal, Fighter } from '../../../src/ejercicio-1/classes/fighter';

class MockHero extends Marvel {
  constructor() {
    super('Mock Hero', 1.6, 70, 100, 80, 100, 98, 'EARTH');
  }

  talk(): string {
    return `Mock Hero!`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.notQuiteEffective;
  }
}


describe('Marvel tests', () => {
  const mockHero = new MockHero();
  it('Can be initialized', () => {
    expect(mockHero instanceof Marvel).to.be.true;
  });
  it('Planet', () => {
    // Getter
    expect(mockHero.getPlanet()).to.be.eq('EARTH');
    
    // Setter
    mockHero.setPlanet('TITAN');
    expect(mockHero.getPlanet()).to.be.eq('TITAN');
  });
  it('Talks', () => {
    expect(mockHero.talk()).to.be.eq('Mock Hero!');
  });
});
