import { BasicStreamableCollection } from "./basic_streamable_collection";
import { Series } from "./series";


export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(collection: Series[]) {
    super(collection);
  }

  searchByName(name: string): Series[] {
    const result: Series[] = this.getCollection().filter((series) => series.getName() === name);
    return result;
  }

  searchByYear(year: number): Series[] {
    const result: Series[] = this.getCollection().filter((series) => series.getReleaseYear() === year);
    return result;
  }
}
