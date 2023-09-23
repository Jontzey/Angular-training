import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

//   constructor(private http:HttpClient) { }


//   baseUrl:string = "http://localhost:1000/game_objects"
//   list: any[] = [];
// 
//    getGames(): Observable<any[]> {
//      return this.http.get<any[]>("http://localhost:1000/game_objects");
//   }

//   getSingleGame(id: number): Observable<any[]> {
//     return this.http.get<any[]>(`http://localhost:1000/game_objects/${id}`);
//   }
//   getGameById(id: number): Observable<any> {
//     // Construct the URL with the `id` parameter
//     const url = `${this.baseUrl}/${id}`;

//     // Send an HTTP GET request to the URL
//     return this.http.get<any>(url);
//   }

constructor(private firestore: AngularFirestore) {}

getGames(): Observable<any[]> {
  return this.firestore.collection('game_objects').valueChanges();
}

getSingleGame(id: number): Observable<any> {
  return this.firestore.doc(`game_objects/${id}`).valueChanges();
}
}
