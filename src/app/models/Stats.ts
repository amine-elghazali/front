export class MatchStats{

  constructor(
    public home_score ?: number, //1
    public away_score ?: number, //3
    public ht_score ?: string, // "0-1"
    public ft_score ?: string, // "1-3"
    public et_score ?: string,
    public ps_score ?: string
  ){}


}
