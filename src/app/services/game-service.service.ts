import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http:HttpClient) { }


  baseUrl:string = "http://localhost:1000/game_objects"
  list: any[] = [];

   getGames(): Observable<any[]> {
     return this.http.get<any[]>("http://localhost:1000/game_objects");
  }

  getSingleGame(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:1000/game_objects/${id}`);
  }
  getGameById(id: number): Observable<any> {
    // Construct the URL with the `id` parameter
    const url = `${this.baseUrl}/${id}`;

    // Send an HTTP GET request to the URL
    return this.http.get<any>(url);
  }
}
