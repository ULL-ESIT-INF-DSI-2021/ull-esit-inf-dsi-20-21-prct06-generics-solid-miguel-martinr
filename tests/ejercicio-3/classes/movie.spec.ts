import 'mocha';
import { expect } from 'chai';
import { Movie } from '../../../src/ejercicio-3/classes/movie';


describe('Movie tests', () => {
  it('Setters and getters', () => {
    const movie = new Movie('Blade runner', 2017, 'DRAMA', 'p1', [], 100);
    expect(movie.getDurationSecs()).to.be.eq(100);
    movie.setDurationSecs(120);
    expect(movie.getDurationSecs()).to.be.eq(120);
  });
});
