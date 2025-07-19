import { Info } from "./Info";
import { LocationResults } from "./LocationResults";

export interface LocationResponse {
  info: Info;
  results: LocationResults[];
}
