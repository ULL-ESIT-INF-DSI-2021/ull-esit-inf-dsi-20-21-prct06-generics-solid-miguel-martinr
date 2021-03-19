import 'mocha';
import { expect } from 'chai';
import { Venusaur } from '../../../src/ejercicio-1/classes/venusaur';

 
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
});

