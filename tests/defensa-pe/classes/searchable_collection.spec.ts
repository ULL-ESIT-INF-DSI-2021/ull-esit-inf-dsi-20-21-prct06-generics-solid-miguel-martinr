import 'mocha';
import { expect } from 'chai';
import { SearchableCollection } from '../../../src/defensa-pe/classes/searchable_collection';

class MockSearchable extends SearchableCollection<string> {
  constructor() {
    super(['hello', 'world', 'bye']);
  }

  search(word: string): string[] {
    return [];
  }
}

describe('SearchableCollection tests', () => {
  const mock = new MockSearchable();
  it('Setters and getters', () => {
    expect(mock.getCollection()).to.be.eql(['hello', 'world', 'bye']);
    
    mock.setCollection(['bye', 'world']);
    expect(mock.getCollection()).to.be.eql(['bye', 'world']);
  });

  it('addItem', () => {
    mock.addItem('perfect');
    expect(mock.getCollection()).to.be.eql(['bye', 'world', 'perfect']);
  });

  it('getItem', () => {
    expect(mock.getItem(1)).to.be.eql('world');
    expect(mock.getItem(3)).to.be.undefined;
  });

  it('removeItem', () => {
    mock.removeItem(1);
    expect(mock.getCollection()).to.be.eql(['bye', 'perfect']);
  });

  it('getNumberOfItems', () => {
    expect(mock.getNumberOfItems()).to.be.eq(2);
  });
});
