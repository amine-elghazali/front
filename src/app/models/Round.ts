export class Round {

  constructor(
    public round_id ?:number,
    public league_id ?:number,
    public is_current ?: boolean,
    public name ?:string
  ){}

}
