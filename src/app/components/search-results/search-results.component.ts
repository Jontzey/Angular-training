import { Component, Input, Output, OnInit, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { Idb } from '../../../../db';
import {GameServiceService} from "../../services/game-service.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  GameList: Idb[] = [];
   filteredGameList: Idb[] = [];
   @Input() userSearch:string = "";
   @Output() clearSearch: EventEmitter<void> = new EventEmitter<void>();

   ngOnInit(): void {
   
      this.service.getGames().subscribe((data) => {
      this.GameList = data;
      console.log(this.GameList)
      this.filterGames(); // Call the filtering function after data is loaded
    });
    
  }
  
  
  filterGames() {
    if(this.userSearch !== "" && (this.userSearch as string) !== "all"){
      
      this.filteredGameList = this.GameList.filter(
        (g) => g["name"].toLowerCase().includes(this["userSearch"].toLowerCase())
        );
    }
    else if((this.userSearch as string) == 'all'){
      this.filteredGameList = this.GameList;
      console.log(this.filteredGameList)
    }
    else{
      this.filteredGameList = [];
    }
     
    }
    constructor(private service:GameServiceService, private router:Router) {}
  ngOnChanges(changes: SimpleChanges): void {
   
      this.filterGames();
      
  }

  handleClick(id:any){
    
    
    this.service.getGameById(id).subscribe((game) => {
      
      this.router.navigate(['/gameObjects', id]);
      this.userSearch = "";
      
    });
    this.clearSearch.emit();
  }
}
