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
  games: Observable<Game[] | undefined> = of(undefined);
  constructor(
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  updateGames(gameId: string) {
    if (gameId == "")
      this.games = this.gameService.getGames();
    else
      this.games = this.gameService.getGames().pipe(
        map(games => games.filter(game => String(game.id) === gameId))
      );
  }

  deleteGame(gameId: number) {
    this.gameService.deleteGame(String(gameId));
  }
}
