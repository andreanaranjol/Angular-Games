import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl = 'api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string) {
    return this.http.get<Game>(this.gamesUrl + `/${gameId}`)
  }

  createGame(gameName: string, gameDescription: string) {
    // API usage is not clear in documentation
    return this.http.post<Game>(this.gamesUrl, {game: ""}, {})
  }

  updateGame(game: Game) {
    const params = new HttpParams()
      .append("id", game.id)
    return this.http.put(this.gamesUrl + `/${game.id}`, {
      id: game.id,
      name: game.name,
      description: game.description
    }, {params: params});
  }

  deleteGame(gameId: string) {
    //throw new Error('Not implemented yet');
    return this.http.delete(this.gamesUrl + `/${gameId}`)
  }
}
