import { AdImage } from "./AdImage";
import { Modification } from "./Modification";

export interface Ad {
  id: string;
  vin: string;
  mileage: number;
  description: string;
  ownersCount: number;
  price: number;
  modification: Modification
  adImages:AdImage[];
  status: string
}