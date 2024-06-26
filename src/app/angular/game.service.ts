import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './types';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'api/games';

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string) {
    //return this.http.get<Game>(this.gamesUrl + `/${gameId}`)
    return this.getGames().pipe(
      map(games => games.filter(game => String(game.id) === gameId))
    );
  }

  createGame(gameName: string, gameDescription: string) {
    return this.http.post(this.gamesUrl, {name: gameName, description: gameDescription})
  }

  updateGame(game: Game) {
    throw new Error('Not implemented yet');
  }

  deleteGame(gameId: string) {
    throw new Error('Not implemented yet');
  }
}
