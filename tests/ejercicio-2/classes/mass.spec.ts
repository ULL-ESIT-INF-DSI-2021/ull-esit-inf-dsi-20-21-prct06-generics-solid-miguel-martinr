import 'mocha';
import { expect } from 'chai';
import { Mass } from '../../../src/ejercicio-2/classes/mass';


describe('Mass tests', () => {
  it('From kg to t', () => {
    expect(new Mass(100, 'kg').toT()).to.be.eq(0.1);
  });
  it('From kg to mg', () => {
    expect(new Mass(100, 'kg').toMg()).to.be.eq(100000000);
  });
  it('From kg to kg', () => {
    expect(new Mass(100, 'kg').toKg()).to.be.eq(100);
  });


  it('From mg to t', () => {
    expect(new Mass(100, 'mg').toT()).to.be.closeTo(0.0000001, 0.001);
  });
  it('From mg to kg', () => {
    expect(new Mass(100, 'mg').toKg()).to.be.closeTo(0.0001, 0.001);
  });
  it('From mg to mg', () => {
    expect(new Mass(100, 'mg').toMg()).to.be.eq(100);
  });


  it('From t to mg', () => {
    expect(new Mass(100, 't').toMg()).to.be.eq(100000000000);
  });
  it('From t to kg', () => {
    expect(new Mass(100, 't').toKg()).to.be.eq(100000);
  });
  it('From t to t', () => {
    expect(new Mass(100, 't').toT()).to.be.eq(100);
  });
});
