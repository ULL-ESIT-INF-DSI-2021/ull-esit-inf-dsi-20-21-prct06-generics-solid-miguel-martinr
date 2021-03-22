import 'mocha';
import { expect } from 'chai';
import { AudioVisualProduction } from '../../../src/ejercicio-3/classes/audiovisual_production';
import { MovieGenre } from '../../../src/ejercicio-3/classes/movie';
import { Person } from '../../../src/ejercicio-3/classes/person';


class MockMovie extends AudioVisualProduction<MovieGenre> {
  constructor() {
    super('Blade runner', 2017, 'ACTION', 'p1', []);
  } 
}

class MockActor extends Person {
  constructor() {
    super('Mike', 'Tyson');
  }
}

describe('AudiovisualProduction tests', () => {
  const mockMovie = new MockMovie();
  it('Setters and getters', () => {
    expect(mockMovie.getName()).to.be.eq('Blade runner');
    expect(mockMovie.getCast()).to.be.eql([]);
    expect(mockMovie.getGenre()).to.be.eq('ACTION');
    expect(mockMovie.getProducer()).to.be.eq('p1');
    expect(mockMovie.getReleaseDate()).to.be.eq(2017);
    expect(mockMovie.getReleaseYear()).to.be.eq(2017);
    
    mockMovie.setName('Runner blade');
    expect(mockMovie.getName()).to.be.eq('Runner blade');

    mockMovie.setCast([new MockActor()]);
    expect(mockMovie.getCast()).to.be.eql([new MockActor()]);

    mockMovie.setGenre('DRAMA');
    expect(mockMovie.getGenre()).to.be.eq('DRAMA');

    mockMovie.setProducer('p2');
    expect(mockMovie.getProducer()).to.be.eq('p2');

    mockMovie.setReleaseDate(2021);
    expect(mockMovie.getReleaseDate()).to.be.eq(2021);
    expect(mockMovie.getReleaseYear()).to.be.eq(2021);
  });
});
