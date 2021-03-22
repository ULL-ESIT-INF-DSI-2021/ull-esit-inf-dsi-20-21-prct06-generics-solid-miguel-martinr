import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../../../src/defensa-pe/classes/numeric_searchable_collection';


describe('NumericSearchableCollection', () => {
  const numCollection = new NumericSearchableCollection([0, 1, 2, 3, 8, 7, 5, 6, 3, 2]);
  it('search', () => {
    expect(numCollection.search(3)).to.be.eql([3, 3]);
    expect(numCollection.search(-2)).to.be.eql([]);
    expect(numCollection.search(8)).to.be.eql([8]);
  });
});
