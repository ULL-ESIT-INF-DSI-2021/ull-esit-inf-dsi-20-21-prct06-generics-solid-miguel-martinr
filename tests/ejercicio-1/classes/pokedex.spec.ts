import 'mocha';
import { expect } from 'chai';
import { Pikachu } from '../../../src/ejercicio-1/classes/pikachu';
import { Thor } from '../../../src/ejercicio-1/classes/thor';
import { Pokedex } from '../../../src/ejercicio-1/classes/pokedex';
import { Fighter } from '../../../src/ejercicio-1/classes/fighter';

describe('Fighter\'s Pokedex tests', () => {
  const genericPokedex = new Pokedex<Fighter>();
  it('Can add a Pikachu', () => {
    genericPokedex.addFighter(new Pikachu());
    expect(genericPokedex.getFighters()).to.be.eql([new Pikachu()]);
  });

  it('Can add a Thor', () => {
    genericPokedex.addFighter(new Thor());
    expect(genericPokedex.getFighters()).to.be.eql([new Pikachu(), new Thor()]);
  });

  it('Can remove a Fighter', () => {
    genericPokedex.removeFighter('Pikachu');
    expect(genericPokedex.getFighters()).to.be.eql([new Thor()]);
  });

  it('Returns false when trying to remove a non existing Fighter', () => {
    expect(genericPokedex.removeFighter('Pikachu')).to.be.false;
  });

});
