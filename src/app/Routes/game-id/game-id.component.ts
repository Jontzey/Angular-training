import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';
@Component({
  selector: 'app-game-id',
  templateUrl: './game-id.component.html',
  styleUrls: ['./game-id.component.css']
})
export class GameIdComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:GameServiceService){

  }

  singleGamedId:number= 0;
  singleGame:any = {};
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.singleGamedId = +params['id'];

      this.service.getGameById(this.singleGamedId).subscribe((data) => {
        this.singleGame = data;
      })
    })
  }
}
