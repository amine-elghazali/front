import { Round } from "./Round";
import { MatchStats } from "./Stats";
import { Team } from "./Team";
import { Venue } from "./Venue";

export class Match {


  constructor(
    public contract_address?:string,

   public  match_id?:string,

    //We may add enum validation, But we don`t need now as we are adding data manualy

    public status_code ?:number,

    public status ?:string,

    public minute ?:number,

    public match_start ?:Date,

    public match_start_iso ?:Date,

    public league_id ?:number,

    public home_team ?: Team,

    public  away_team ?: Team ,

    public round ?: Round,

    public stats ?: MatchStats,

    public venue ?: Venue
  ){}



}
