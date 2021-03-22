import 'mocha';
import { expect } from 'chai';
import { MovieCollection } from '../../../src/ejercicio-3/classes/movie_collection';
import { Movie } from '../../../src/ejercicio-3/classes/movie';
import { Actor } from '../../../src/ejercicio-3/classes/actor';


describe('MovieCollection test', () => {


  const movieCollection = new MovieCollection([
    new Movie('Blade Runner 2049', 2017, 'ACTION', 'PROducer1',
        [
          new Actor('Dave', 'Bautista', 1960), 
          new Actor('Ryan', 'Gosling', 1980),
        ],
        164 * 60),

    new Movie('Togo', 2019, 'DRAMA', 'Producer2',
        [
          new Actor('Christopher', 'Heyerdahl', 1970),
          new Actor('Willem', 'Dafoe', 1950),
        ],
        113 * 60),
  ]);


  it('SearchByName', () => {
    expect(movieCollection.searchByName('Blade Runner 2049')).to.be.eql(
        [
          new Movie('Blade Runner 2049', 2017, 'ACTION', 'PROducer1',
              [
                new Actor('Dave', 'Bautista', 1960), 
                new Actor('Ryan', 'Gosling', 1980),
              ],
              164 * 60),
        ]);
  });

  it('SearchByYear', () => {
    expect(movieCollection.searchByYear(2019)).to.be.eql( 
        [
          new Movie('Togo', 2019, 'DRAMA', 'Producer2',
              [
                new Actor('Christopher', 'Heyerdahl', 1970),
                new Actor('Willem', 'Dafoe', 1950),
              ],
              113 * 60),
        ]);
  });
});
