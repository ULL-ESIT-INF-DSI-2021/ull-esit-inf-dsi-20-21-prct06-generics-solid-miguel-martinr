import 'mocha';
import { expect } from 'chai';
import { Thor } from '../../../src/ejercicio-1/classes/thor';

 
describe('Thor tests', () => {
  const thor = new Thor();
  it('Can be initialized', () => {
    expect(thor instanceof Thor).to.be.true;
  });
  it('Talks', () => {
    expect(thor.talk()).to.be.eq('Fortunately, I am mighty!');
  });
  it('He is from Asgard', () => {
    expect(thor.getPlanet()).to.be.eq('ASGARD');
  });
});
