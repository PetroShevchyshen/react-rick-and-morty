import { Location } from "./Location";

export interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  location: Location;
}
