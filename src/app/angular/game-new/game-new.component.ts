import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  crearJuego(gameName: string, gameDescription: string) {
    console.log("HOLA");
    this.gameService.createGame(gameName, gameDescription);
  }

}
