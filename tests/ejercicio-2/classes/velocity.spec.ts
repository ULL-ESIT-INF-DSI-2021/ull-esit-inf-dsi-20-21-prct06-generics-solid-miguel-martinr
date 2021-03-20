import 'mocha';
import { expect } from 'chai';
import { Velocity } from '../../../src/ejercicio-2/classes/velocity';


describe('Velocity tests', () => {
  it('From KMH to MPH', () => {
    expect(new Velocity(100, 'KM/H').toMPH()).to.be.closeTo(62.1371, 0.001);
  });

  it('From KMH to MS', () => {
    expect(new Velocity(100, 'KM/H').toMS()).to.be.closeTo(27.7778, 0.001);
  });

  it('From KMH to KMH', () => {
    expect(new Velocity(100, 'KM/H').toKMH()).to.be.eq(100);
  });

  it('From MPH to KMH', () => {
    expect(new Velocity(100, 'MPH').toKMH()).to.be.closeTo(160.934, 0.001);
  });

  it('From MPH to MS', () => {
    expect(new Velocity(100, 'MPH').toMS()).to.be.closeTo(44.704, 0.001);
  });

  it('From MPH to MPH', () => {
    expect(new Velocity(100, 'MPH').toMPH()).to.be.eq(100);
  });

  it('From MS to KMH', () => {
    expect(new Velocity(100, 'M/S').toKMH()).to.be.eq(360);
  });

  it('From MS to MPH', () => {
    expect(new Velocity(100, 'M/S').toMPH()).to.be.closeTo(223.694, 0.001);
  });
  
  it('From MS to MS', () => {
    expect(new Velocity(100, 'M/S').toMS()).to.be.eq(100);
  });
  
});
