import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { InMemoryDataService } from '../in-memory-data.service';
import { Game } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  private allGames: Game[] = [];
  
  constructor(
    private gameService: GameService,
    private databaseService: InMemoryDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearJuego(gameName: string, gameDescription: string) {
    this.allGames = JSON.parse(localStorage.getItem("games") || "[]");
    this.gameService.getGames().subscribe(games => {
      if(this.allGames.length == 0) {
        this.allGames = games as Game[];
      }
      const newGame: Game = {
        id: this.databaseService.genId(this.allGames),
        name: gameName,
        description: gameDescription
      }
      this.gameService.createGame(newGame).subscribe(() => {
        this.gameService.getGames().subscribe(games => {
          localStorage.setItem("games", JSON.stringify(games as Game[]));
          this.router.navigateByUrl("angular/senior/games");
        })
      });
    })
    
  }

}
