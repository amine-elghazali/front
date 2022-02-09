import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/service/web3-services/web3.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private web3:Web3Service) {}

  openMetaMask(){

    this.web3.loginmsk().then(resp =>{
  console.log(resp);
 })
}

  ngOnInit(): void {}
}
