import { MultiChapterProduction } from "./multichapter_production";
import { Person } from "./person";


export type SeriesGenre = 'FICTION' | 'NARRATIVE' | 'DRAMA';

export class Series extends MultiChapterProduction<SeriesGenre> {
  constructor(name: string, releaseDate: number,
      genre: SeriesGenre, producer: string,
      cast: Person[], numOfChapters: number) {

    super(name, releaseDate, genre, producer, cast, numOfChapters);
  }
};
