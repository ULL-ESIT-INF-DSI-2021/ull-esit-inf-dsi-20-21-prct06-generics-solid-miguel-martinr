import { SearchableCollection } from "./searchable_collection";

export class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(collection: number[]) {
    super(collection);
  }

  /**
   * Returns a new array containning all the ocurrences of `searchedNum`
   * in the collection
   * @param searchedNum 
   * @returns 
   */
  search(searchedNum: number): number[] {
    return this.getCollection().filter((num) => searchedNum === num);
  }
}
