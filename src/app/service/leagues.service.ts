import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../models/League';
import { Round } from '../models/Round';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  baseUrl:string="http://localhost:3000/";

  constructor(
    public http : HttpClient
  ) { }


  getLeagues(): Observable<League[]>{
    return this.http.get<League[]>(`${this.baseUrl}leagues`);
  }

  filterLeagueById(id:number): Observable<League>{
    return this.http.get<League>(`${this.baseUrl}leagues/`+id);
  }
  getRounds(){
    return this.http.get<Round[]>(`${this.baseUrl}rounds`);
  }
}
