import Genre from "../models/genre";
import Song from "../models/song";
import Colors from "../constants/colors";

export const GENRES = [
  new Genre("c1", "Pop", Colors.accent800),
  new Genre("c2", "Rock", "#4a4a4b"),
  new Genre("c3", "Hip Hop", Colors.accent500),
  new Genre("c4", "Electronic", "#2c3e50"),
  new Genre("c5", "R&B", Colors.accent200),
  new Genre("c6", "Country", "#5d4037"),
  new Genre("c7", "Jazz", Colors.accent500),
  new Genre("c8", "Classical", "#5a0000"),
  new Genre("c9", "Reggae", "#4e6e5d"),
  new Genre("c10", "Metal", Colors.primary500),
  new Genre("c11", "Folk", "#7b5e57"),
  new Genre("c12", "Blues", "#34495e"),
];

//todo add in songs for array
export const SONGS = [];
