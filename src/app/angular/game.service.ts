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

  getGameById(gameId: string): Observable<Game> {
    return this.http.get<Game>(this.gamesUrl + `/${gameId}`)
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game)
  }

  updateGame(game: Game):Observable<any> {
    return this.http.put<Game>(this.gamesUrl + `/${game.id}`, game);
  }

  deleteGame(gameId: string): Observable<any> {
    return this.http.delete(this.gamesUrl + `/${gameId}`)
  }
}
