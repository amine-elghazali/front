import { Component,Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-place-bet',
  templateUrl: './place-bet.component.html',
  styleUrls: ['./place-bet.component.scss']
})
export class PlaceBetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() teamName?:String;


}
