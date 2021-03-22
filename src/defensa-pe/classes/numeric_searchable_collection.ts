import { SearchableCollection } from "./searchable_collection";

export class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(collection: number[]) {
    super(collection);
  }

  search(searchedNum: number): number[] {
    return this.getCollection().filter((num) => searchedNum === num);
  }
}
