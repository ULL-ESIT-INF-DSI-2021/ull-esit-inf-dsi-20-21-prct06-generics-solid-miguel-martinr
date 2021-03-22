import { AudioVisualProduction } from "./audiovisual_production";
import { Person } from "./person";


export abstract class MultiChapterProduction<GenreType> extends AudioVisualProduction<GenreType> {
  constructor(name: string, releaseDate: number,
      genre: GenreType, producer: string,
      cast: Person[], private numOfChapters: number) {

    super(name, releaseDate, genre, producer, cast);
  }

  // Setters
  setNumOfChapters(newNum: number) {
    this.numOfChapters = newNum;
  }

  // Getters
  getNumOfChapters() {
    return this.numOfChapters;
  }
}
