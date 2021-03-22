import 'mocha';
import { expect } from 'chai';
import { SeriesCollection } from '../../../src/ejercicio-3/classes/series_collection';
import { Series } from '../../../src/ejercicio-3/classes/series';
import { Actor } from '../../../src/ejercicio-3/classes/actor';


describe('SeriesCollection test', () => {


  const seriesCollection = new SeriesCollection([
    new Series('GOT', 20211013, 'FICTION', 'hbo', [
      new Actor('Jason', 'Momoa', 1900),
    ], 100),
    new Series('The boys', 16541013, 'NARRATIVE', 'amazon', [
      new Actor('will', 'Farrel', 2000),
    ], 121),
  ]);


  it('SearchByName', () => {
    expect(seriesCollection.searchByName('The boys')).to.be.eql(
        [
          new Series('The boys', 16541013, 
              'NARRATIVE', 'amazon', [
                new Actor('will', 'Farrel', 2000),
              ], 121),
        ]);
  });

  it('SearchByYear', () => {
    expect(seriesCollection.searchByYear(2021)).to.be.eql( 
        [
          new Series('GOT', 20211013, 'FICTION', 'hbo', [
            new Actor('Jason', 'Momoa', 1900),
          ], 100),
        ]);
  });
});
