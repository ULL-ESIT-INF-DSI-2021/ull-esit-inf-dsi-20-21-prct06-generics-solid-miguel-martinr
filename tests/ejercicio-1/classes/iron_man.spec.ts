import 'mocha';
import { expect } from 'chai';
import { IronMan } from '../../../src/ejercicio-1/classes/iron_man';

 
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
});

