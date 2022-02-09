import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  features:Feature[] = [
    new Feature(
      'wallet.png',
      'Wallet',
      'CONNECT TO YOUR METAMASK',
    ),

    new Feature(
      'secure.png',
      'Bet',
      'PLACE YOUR BET',
    ),
    new Feature(
      'contract.png',
      'Collect',
      'COLLECT YOUR EARNINGS',
    ),
  ];

  aboutUs: AboutUs[] = [
    new AboutUs(
      'winbg.png',
      'How It Works ?',
      'WildBets is the biggest & safest crypto sportsbook, You can connect your metamask, Select Your league, Round and Match, place your bet & collect your earnings',
      true,
    ),
    new AboutUs(
      'team.png',
      'Who are we ?',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      false,
    ),
    // new AboutUs(
    //   'deep.png',
    //   'We`v built a platform to buy & sell shares',
    //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    //   true,
    // ),
    // new AboutUs(
    //   'etheer.png',
    //   'We`v built a platform to buy & sell shares',
    //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    //   false,
    // ),




  ]

}


class Feature {
  constructor(public readonly image:string,
    public readonly title:string,
    public readonly text:string,
    ){}
}

class AboutUs {
  constructor(public readonly image:string,
    public readonly title:string,
    public readonly text:string,
    public readonly reversed:boolean=false,
    ){}
}
