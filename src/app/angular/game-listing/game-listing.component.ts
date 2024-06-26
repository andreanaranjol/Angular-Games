import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css'],
})
export class GameListingComponent implements OnInit {
  games: Observable<Game[] | undefined> = of(undefined);
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  update(gameId: string) {
    if (gameId == "")
      this.games = this.gameService.getGames();
    else
      this.games = this.gameService.getGameById(gameId);
  }
}
