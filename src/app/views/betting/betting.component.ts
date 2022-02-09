import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/Match';
import { Round } from 'src/app/models/Round';
import { League } from 'src/app/models/League';

import { MatchesService } from 'src/app/service/matches.service';
import { LeaguesService } from 'src/app/service/leagues.service';


@Component({
  selector: 'app-betting',
  templateUrl: './betting.component.html',
  styleUrls: ['./betting.component.scss']
})
export class BettingComponent implements OnInit {

  Matches!:Match[];
  Rounds!:Round[];
  RoundId:number=36122;

  constructor(private matchService:MatchesService,private leaguesService:LeaguesService) {
  }


  ngOnInit(): void {
    this.getMatchesAndLeagues()
  }

  getMatchesAndLeagues(){
    this.matchService.getMatches(this.RoundId).subscribe(data=>{this.Matches=data});
    this.leaguesService.getRounds().subscribe(data=>{this.Rounds=data});

  }
  search(leagueId: number){
    this.ngOnInit();
  }

  get(){
    console.log(this.Matches[0])
  }

}
