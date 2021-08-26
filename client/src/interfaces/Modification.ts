import { Gearbox } from "./Gearbox";
import { Model } from "./Model";

export interface Modification {
  id: string;
  engineCapacity: string;
  hp: string;
  model: Model
  yearRelease: string,
  gearbox: Gearbox,

}
