import { SearchableCollection } from "./searchable_collection";

export class StringSearchableCollection extends SearchableCollection<string> {
  constructor(collection: string[]) {
    super(collection);
  }

  /**
   * Returns a new array containning all the items that contains the substring `searchedStr`
   * @param searchedStr 
   * @returns 
   */
  search(searchedStr: string): string[] {
    return this.getCollection().filter((str) => str.includes(searchedStr));
  }
}
