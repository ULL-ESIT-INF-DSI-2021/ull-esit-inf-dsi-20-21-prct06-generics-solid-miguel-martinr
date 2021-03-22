import { SearchableByName } from "../interfaces/searchable_by_name";
import { SearchableByYear } from "../interfaces/searchable_by_year";
import { Streamable } from "../interfaces/streamable";

export abstract class BasicStreamableCollection<StreamType> implements Streamable<StreamType>, SearchableByName<StreamType>, SearchableByYear<StreamType> {
  constructor(private collection: StreamType[]) {
    
  }

  // Setters
  setCollection(newCollection: StreamType[]) {
    this.collection = newCollection;
  }

  // Getters
  getCollection() {
    return this.collection;
  }

  abstract searchByYear(year: number): StreamType[];
  abstract searchByName(name: string): StreamType[];
}
