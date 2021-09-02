import { Gearbox } from "./Gearbox";
import { Model } from "./Model";
import {Drive} from "./Drive";
import {Generation} from "./Generation";
import {Engine} from "./Engine";

export interface Modification {
  id: string;
  engineCapacity: string;
  hp: string;
  model: Model
  yearRelease: string,
  gearbox: Gearbox,
  drive: Drive,
  generation: Generation
  engineType: Engine
}
