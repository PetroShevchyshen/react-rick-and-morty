import { EpisodeResults } from "./EpisodeResults";
import { LocationResults } from "./LocationResults";

export default interface TableProps {
  name: string;
  data: EpisodeResults[] | LocationResults[];
}
