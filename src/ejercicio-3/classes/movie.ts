import { AudioVisualProduction } from "./audiovisual_production";
import { Person } from "./person";

export type MovieGenre = 'ACTION' | 'HORROR' | 'DRAMA';

export class Movie extends AudioVisualProduction<MovieGenre> {
  constructor(name: string, releaseDate: number,
      genre: MovieGenre, producer: string,
      cast: Person[], private durationSecs: number) {

    super(name, releaseDate, genre, producer, cast);
  }

  // Setters
  setDurationSecs(newDuration: number) {
    this.durationSecs = newDuration;
  }

  // Getters
  getDurationSecs() {
    return this.durationSecs;
  }

};
