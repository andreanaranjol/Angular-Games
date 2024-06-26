import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';
import { Observable, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements OnInit {
  public games?: Game[] = [];
  constructor(
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.games = JSON.parse(localStorage.getItem("games") || "[]");
    if (this.games?.length == 0)
      this.gameService.getGames().subscribe(games => {
        this.games = games;
      });
  }

  updateGames(gameId: string) {
    if (gameId == "")
      this.gameService.getGames().subscribe(games => {
        this.games = games;
      });
    else
      this.gameService.getGames().subscribe(games => {
        this.games = games.filter(game => String(game.id) === gameId);
      });
  }

  deleteGame(gameId: number) {
    this.gameService.deleteGame(String(gameId)).subscribe(response => {
      this.gameService.getGames().subscribe((games => {
        localStorage.setItem("games", JSON.stringify(games as Game[]))
        this.getGames();
      })) 
    });
  }
  
}
