import 'mocha';
import { expect } from 'chai';
import { Pikachu } from '../../../src/ejercicio-1/classes/pikachu';

 
describe('Iron Man tests', () => {
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
});

