import { Component, OnInit, Output, Input } from '@angular/core';
import {GameServiceService} from "../../services/game-service.service"
import {Idb} from "../../../../db"
@Component({
  selector: 'app-game-holder',
  templateUrl: './game-holder.component.html',
  styleUrls: ['./game-holder.component.css']
})
export class GameHolderComponent implements OnInit {

  @Input() gameArray: Idb[] = [];
  

  
  constructor(private gameService:GameServiceService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
     this.gameArray = data;
     console.log(this.gameArray);
    }); 
  }

  
}
