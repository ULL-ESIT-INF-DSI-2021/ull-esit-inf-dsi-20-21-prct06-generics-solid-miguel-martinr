import { Actor } from "./classes/actor";
import { Movie } from "./classes/movie";
import { MovieCollection } from "./classes/movie_collection";


const movies = [
  new Movie('Blade Runner 2049', 2017, 'ACTION', 'PROducer1',
      [
        new Actor('Dave', 'Bautista', 1960), 
        new Actor('Ryan', 'Gosling', 1980),
      ],
      164 * 60),

  new Movie('Togo', 2019, 'DRAMA', 'Producer2',
      [
        new Actor('Christopher', 'Heyerdahl', 1970),
        new Actor('Willem', 'Dafoe', 1950),
      ],
      113 * 60),
];


const movieCollection = new MovieCollection(movies);

console.table(movieCollection.searchByYear(2017));
