import { Component,Input, Output ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-searchbar',
  templateUrl: './game-searchbar.component.html',
  styleUrls: ['./game-searchbar.component.css']
})
export class GameSearchbarComponent implements OnInit {

   theSearch: string = "";

   constructor() {

   }

   ngOnInit(): void {
     console.log(this.theSearch);
   }

   OnValueChange(){
    console.log('Input value changed:', this.theSearch);
   }
}
