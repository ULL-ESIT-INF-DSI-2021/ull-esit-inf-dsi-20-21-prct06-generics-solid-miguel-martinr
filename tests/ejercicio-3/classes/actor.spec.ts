import 'mocha';
import { expect } from 'chai';
import { Actor } from '../../../src/ejercicio-3/classes/actor';

describe('Actor tests', () => {
  it('Setters and getters', () => {
    const act = new Actor('Miguel', 'Martín', 1999);
    expect(act.getName()).to.be.eq('Miguel');
    expect(act.getSurname()).to.be.eq('Martín');
    expect(act.getBirthdate()).to.be.eq(1999);

    act.setName('Mike');
    act.setSurname('Tyson');
    act.setBirthdate(1960);
    expect(act.getName()).to.be.eq('Mike');
    expect(act.getSurname()).to.be.eq('Tyson');
    expect(act.getBirthdate()).to.be.eq(1960);
  });
});
