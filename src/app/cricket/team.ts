import { Player } from "./player";

export interface Team {
    teamno:number;
    batsman:Player[];
    bowler:Player[];
    wicketkeeper:Player[];
}
