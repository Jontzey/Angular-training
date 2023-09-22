import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http:HttpClient) { }

  list: any[] = [];
  
   getGames(): Observable<any[]> {
     return this.http.get<any[]>("http://localhost:1000/game_objects");
  }
}
