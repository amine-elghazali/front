import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from 'src/app/models/League';
import { LeaguesService } from 'src/app/service/leagues.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  leagues ?: League [];
  oneLeague ?: League;
  constructor(
    public leagueService : LeaguesService
  ) { }

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe({
      next : (Resp : League[]) => this.leagues = Resp,
      error : () => console.log

    })
  }

  filterLeagueById(id : any){
    this.leagueService.filterLeagueById(id).subscribe({
      next : (Resp : League) => console.log(this.oneLeague = Resp)
      ,
      error : () => console.log
    });
  }


}
