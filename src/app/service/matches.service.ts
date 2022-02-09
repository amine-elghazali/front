import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Round } from '../models/Round';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})


export class MatchesService {

  Matches!:Match[]

  baseUrl:string="http://localhost:3000/matches/";


  constructor(private http: HttpClient) { }


  // getMatches():Observable<Match[]>{
  //   return this.http.get<Match[]>(`${this.baseUrl}`);
  // }


  getMatches(idRound:number) : Observable<Match[]>{
    return this.http.get<Match[]>(`${this.baseUrl}roundMatches/`+idRound);
  }


}
