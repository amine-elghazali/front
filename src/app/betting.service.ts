import { Injectable } from '@angular/core';
import { Web3Service } from './service/web3-services/web3.service';
import Web3 from "web3";
const contractAbi = require('./contract/wildBetContract.js');

@Injectable({
  providedIn: 'root'
})
export class BettingService {

  constructor(
    public web3Service : Web3Service
  ) { }


  async placeBet(teamName: string){
    console.log(teamName);
  }


  async draw(){
    console.log("draw match");
  }

  async bidMatch(homeWins:boolean,awayWins:boolean,_contractAddress:string){
    await this.web3Service.loadAccount()

    let contract =await new this.web3Service.web3.eth.Contract(contractAbi.contractAbi,_contractAddress);

    await contract.methods.bid([homeWins,awayWins]).send({
      from : this.web3Service.account,
      value : Web3.utils.toWei("20","ether"),
      gas : 6721975,
    })
  }
}
