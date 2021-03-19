import 'mocha';
import { expect } from 'chai';
import { IronMan } from '../../../src/ejercicio-1/classes/iron_man';
import { effectVal, Fighter } from '../../../src/ejercicio-1/classes/fighter';
import { Pokemon } from '../../../src/ejercicio-1/classes/pokemon';
import { Marvel } from '../../../src/ejercicio-1/classes/marvel';

/**
 * Mock classes for testing IronMan class
 */
class MockPokemon extends Pokemon {
  constructor() {
    super('Pokemon', 1, 2, 3, 4, 5, 6, 'WATER');
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.superEffective;
  }

  talk(): string {
    return 'I am a Mock POkemon';
  }
}

class MockMarvel extends Marvel {
  constructor() {
    super('titanian', 1, 2, 3, 4, 5, 6, 'TITAN');
  }

  talk(): string {
    return 'I am a Mock habitant of Titan';
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.notQuiteEffective;
  }
}
 
describe('Iron Man tests', () => {
  const ironman = new IronMan();
  it('Can be initialized', () => {
    expect(ironman instanceof IronMan).to.be.true;
  });
  it('Talks', ( ) => {
    expect(ironman.talk()).to.be.eq('I am Iron Man');
  });
  it('He is from planet Earth', () => {
    expect(ironman.getPlanet()).to.be.eq('EARTH');
  });
  
  
  it('Gets effectiveness Against Marvel character from earth', () => {
    expect(ironman.getEffectiveness(new IronMan())).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness Against Pokemon character', () => {
    expect(ironman.getEffectiveness(new MockPokemon())).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness Against Marvel character from Titan', () => {
    expect(ironman.getEffectiveness(new MockMarvel())).to.be.eq(effectVal.superEffective);
  });
  it('Gets effectiveness Against Marvel character from Asgard', () => {
    const asgardian = new MockMarvel();
    asgardian.setPlanet('ASGARD');
    expect(ironman.getEffectiveness(asgardian)).to.be.eq(effectVal.notQuiteEffective);
  });
  it('Gets effectiveness Against Marvel character from ZenWhoberi', () => {
    const gamora = new MockMarvel();
    gamora.setPlanet('ZenWhoberi');
    expect(ironman.getEffectiveness(gamora)).to.be.eq(effectVal.neutral);
  });
  it('Gets effectiveness Against Marvel character from any other planet', () => {
    const strange = new MockMarvel();
    strange.setPlanet('MARS');
    expect(ironman.getEffectiveness(strange)).to.be.eq(effectVal.neutral);
  });

});

