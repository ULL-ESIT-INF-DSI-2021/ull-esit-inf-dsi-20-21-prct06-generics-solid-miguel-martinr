import { BasicStreamableCollection } from "./basic_streamable_collection";
import { Movie } from "./movie";


export class MovieCollection extends BasicStreamableCollection<Movie> {
  constructor(collection: Movie[]) {
    super(collection);
  }

  searchByName(name: string): Movie[] {
    const result: Movie[] = this.getCollection().filter((movie) => movie.getName() === name);
    return result;
  }

  searchByYear(year: number): Movie[] {
    const result: Movie[] = this.getCollection().filter((movie) => movie.getReleaseYear() === year);
    return result;
  }
}
