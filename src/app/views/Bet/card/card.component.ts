import { Component, OnInit ,Input} from '@angular/core';
import { BettingService } from 'src/app/betting.service';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() HomeTeam?:string;
  @Input() AwayTeam?:string;

  @Input() HomeTeamImg?:string;
  @Input() AwayTeamImg?:string;


  @Input() homescore?:number;
  @Input() awayscore?:number;

  @Input() homescore_SC?:string;
  @Input() awayscore_SC?:string;
  @Input() contractAddress?:string;


  constructor(
    public bettingService : BettingService
  ) { }

  ngOnInit(): void {
    console.log(this.HomeTeam);
    console.log(this.AwayTeam);

  }

  betDraw(){
    this.bettingService.draw();
  }

}
