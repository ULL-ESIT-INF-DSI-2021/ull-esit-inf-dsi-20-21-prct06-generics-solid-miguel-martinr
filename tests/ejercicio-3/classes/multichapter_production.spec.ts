import 'mocha';
import { expect } from 'chai';
import { MultiChapterProduction } from '../../../src/ejercicio-3/classes/multichapter_production';

import { SeriesGenre } from '../../../src/ejercicio-3/classes/series';

class MockSeries extends MultiChapterProduction<SeriesGenre> {
  constructor() {
    super('GOT', 2010, 'FICTION', 'hbo', [], 10)
  }
}

describe('MultiChapterProduction tests', () => {
  const multichp = new MockSeries();
  it('Setters and getters', () => {
    expect(multichp.getNumOfChapters()).to.be.eq(10);
    multichp.setNumOfChapters(15);
    expect(multichp.getNumOfChapters()).to.be.eq(15);
  });
});
