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

  async bidMatch(homeWins:boolean,awayWins:boolean,_contractAddress:string){
    await this.web3Service.loadAccount()

    this.web3Service.web3.eth.sendTransaction({
      from: this.web3Service.account,
      to: '0x82d0628089B3f60b02C31C47D5FF186D522C83b1', //receiver address
      value: Web3.utils.toWei("5","ether"),
    })

    let contract =await new this.web3Service.web3.eth.Contract(contractAbi.contractAbi,_contractAddress);

    await contract.methods.bid([homeWins,awayWins]).send({
      from : this.web3Service.account,
      value : Web3.utils.toWei("5","ether"),
      gas : 6721975,
    })
  }




    async draw(){
      console.log("draw match");
    }

}
