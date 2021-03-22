import { MultiChapterProduction } from "./multichapter_production";
import { Person } from "./person";


export type DocumentaryGenre = 'EXPOSITORY' | 'POETIC' | 'INTERVIEW';

export class Documentary extends MultiChapterProduction<DocumentaryGenre> {
  constructor(name: string, releaseDate: number,
      genre: DocumentaryGenre, producer: string,
      cast: Person[], numOfChapters: number) {

    super(name, releaseDate, genre, producer, cast, numOfChapters);
  }
};
