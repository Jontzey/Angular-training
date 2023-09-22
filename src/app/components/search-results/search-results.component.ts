import { Component, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { Idb } from '../../../../db';
import {GameServiceService} from "../../services/game-service.service"
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  GameList: Idb[] = [];
   filteredGameList: Idb[] = [];
   @Input() userSearch:string = "";

  
   ngOnInit(): void {
   
      this.service.getGames().subscribe((data) => {
      this.GameList = data;
      console.log(this.GameList)
      this.filterGames(); // Call the filtering function after data is loaded
    });
    
  }
  
  filterGames() {
    if(this.userSearch !== ""){
      
      this.filteredGameList = this.GameList.filter(
        (g) => g["name"].toLowerCase().includes(this["userSearch"].toLowerCase())
        );
    }
    else{
      this.filteredGameList = [];
    }
     
    }
    constructor(private service:GameServiceService) {}
  ngOnChanges(changes: SimpleChanges): void {
   
      this.filterGames();
    
  }
}
