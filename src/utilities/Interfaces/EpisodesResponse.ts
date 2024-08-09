import { EpisodeResults } from "./EpisodeResults";
import { Info } from "./Info";

export interface EpisodesResponse {
  info: Info;
  results: EpisodeResults[];
}
