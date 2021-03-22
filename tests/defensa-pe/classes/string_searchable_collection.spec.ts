import 'mocha';
import { expect } from 'chai';
import { StringSearchableCollection } from '../../../src/defensa-pe/classes/string_searchable_collection';


describe('StringSearchableCollection', () => {
  const strCollection = new StringSearchableCollection(['helloWorld', 'world', 'Bobhello', 'ban']);
  it('search', () => {
    expect(strCollection.search('hello')).to.be.eql(['helloWorld', 'Bobhello']);
    expect(strCollection.search('world')).to.be.eql(['world']);
    expect(strCollection.search('lmao')).to.be.eql([]);
  });
});
