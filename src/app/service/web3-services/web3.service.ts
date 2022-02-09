import { Injectable } from '@angular/core';
import Web3 from "web3";



declare const window: any;
@Injectable({
  providedIn: 'root'
})


export class Web3Service {

  constructor() { }

  private account: any = null;
  private web3: any;
  
  private web3Provider:any;

  
  async loginmsk(){
    if (typeof window.ethereum !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
      this.web3 = new Web3(window.web3.currentProvider)
      console.log('MetaMask is installed!');
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            this.web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        this.web3.eth.sendTransaction({/* ... */});
          //getting the connected account
    }
}


//get the current account
async loadAccount(){

  if(this.account==null){

    console.log("Account is null -- Fetching account")

    const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });

    this.account = accounts[0];

    //the address of the current user
    this.web3.eth.Contract.defaultAccount = this.account

    console.log(this.account)

  }

}
}
