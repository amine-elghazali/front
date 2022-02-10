import { Component,Input, OnInit } from '@angular/core';
import { BettingService } from 'src/app/betting.service';
import { Team } from 'src/app/models/Team';
import { Web3Service } from 'src/app/service/web3-services/web3.service';

@Component({
  selector: 'app-place-bet',
  templateUrl: './place-bet.component.html',
  styleUrls: ['./place-bet.component.scss']
})
export class PlaceBetComponent implements OnInit {

  constructor(
    public bettingService : BettingService,
    public web3Service : Web3Service
  ) { }

  ngOnInit(): void {
    this.web3Service.loginmsk()
  }

  @Input() teamName?:string;
  @Input() isLocal:boolean = false;
  @Input() isDraw:boolean = false;
  @Input() contractAddress?:string;

  placeBet(teamName : string){

    console.log(this.contractAddress);

    if(this.isDraw){
      this.bettingService.bidMatch(false,false,this.contractAddress!)
    }
    else {
      this.bettingService.bidMatch(this.isLocal,!this.isLocal,this.contractAddress!)
    }

  }
}
