import 'mocha';
import { expect } from 'chai';
import { effectVal, Fighter } from '../../../src/ejercicio-1/classes/fighter'

class MockFighter extends Fighter {
  constructor() {
    super('Jackie Chan', 1.6, 70, 100, 80, 100, 98);
  }

  talk(): string {
    return `I am Jackie Chan`;
  }

  getEffectiveness(defender: Fighter): effectVal {
    return effectVal.notQuiteEffective;
  }
}


describe('Fighter tests', () => {
  const fighter = new MockFighter();
  it('Can be initialized', () => {
    expect(fighter instanceof Fighter).to.be.true;
  });

  it('Getters', () => {
    expect(fighter.getName()).to.be.eq('Jackie Chan');
    expect(fighter.getHeight()).to.be.eq(1.6);
    expect(fighter.getWeight()).to.be.eq(70);
    expect(fighter.getAttack()).to.be.eq(100);
    expect(fighter.getDefense()).to.be.eq(80);
    expect(fighter.getSpeed()).to.be.eq(100);
    expect(fighter.getHitPoints()).to.be.eq(98);
  }); 

  it('Talks', () => {
    expect(fighter.talk()).to.be.eq('I am Jackie Chan');
  });

  it('Setters', () => {
    fighter.setName('Bruce Lee');
    expect(fighter.getName()).to.be.eq('Bruce Lee');
    fighter.setHeight(1.5);
    expect(fighter.getHeight()).to.be.eq(1.5);
    fighter.setWeight(65);
    expect(fighter.getWeight()).to.be.eq(65);
    fighter.setAttack(120);
    expect(fighter.getAttack()).to.be.eq(120);
    fighter.setDefense(50);
    expect(fighter.getDefense()).to.be.eq(50);
    fighter.setSpeed(100);
    expect(fighter.getSpeed()).to.be.eq(100);
    fighter.setHitPoints(0);
    expect(fighter.getHitPoints()).to.be.eq(0);
  });

  it('Gets effectiveness', () => {
    expect(fighter.getEffectiveness(new MockFighter())).to.be.eq(effectVal.notQuiteEffective);
  });
});
