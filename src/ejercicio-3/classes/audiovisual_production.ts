import { Person } from "./person";

export abstract class AudioVisualProduction <GenreType> {
  constructor(private name: string, private releaseDate: number,
      private genre: GenreType, private producer: string,
      private cast: Person[]) {}

  // Setters
  setName(newName: string) {
    this.name = newName;
  }

  setReleaseDate(newDate: number) {
    this.releaseDate = newDate;
  }

  setGenre(newGenre: GenreType) {
    this.genre = newGenre;
  }

  setProducer(newProducer: string) {
    this.producer = newProducer;
  }

  setCast(newCast: Person[]) {
    this.cast = newCast;
  }

  // Getters
  getName() {
    return this.name;
  }

  getReleaseDate() {
    return this.releaseDate;
  }

  getGenre() {
    return this.genre;
  }

  getProducer() {
    return this.producer;
  }

  getCast() {
    return this.cast;
  }

  getReleaseYear(): number {
    if (this.releaseDate.toString().length >= 8) return (this.getReleaseDate() / 10000) | 0;

    return this.releaseDate;
  }

}
