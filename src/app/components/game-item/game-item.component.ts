import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() gameList:any[] = [];


  constructor() {
   
  }

  ngOnInit(): void {
    
  }

}
