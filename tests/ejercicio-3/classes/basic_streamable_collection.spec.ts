import 'mocha';
import { expect } from 'chai';
import { BasicStreamableCollection } from '../../../src/ejercicio-3/classes/basic_streamable_collection';

class MockSeries {
  constructor() {
  }
}

class MockSeriesCollection extends BasicStreamableCollection<MockSeries> {
  constructor() {
    super([new MockSeries(), new MockSeries()]);
  }

  searchByYear() {
    return [];
  }

  searchByName() {
    return [];
  }
}

describe('BasicStreamableCollection tests', () => {
  const mockSeriesCollection = new MockSeriesCollection();
  it('Setters and getters', () => {
    expect(mockSeriesCollection.getCollection()).to.be.eql([new MockSeries(), new MockSeries()]);

    mockSeriesCollection.setCollection([]);
    expect(mockSeriesCollection.getCollection()).to.be.eql([]);
  });
});
