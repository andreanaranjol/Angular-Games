import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from './types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      {
        id: 11,
        name: `Babylon's Fall`,
        description: 'March 3 | PlatinumGames | PS4, PS5, PC',
      },
      {
        id: 12,
        name: 'Dune: Spice Wars',
        description: 'TBA | Shiro Games | PC',
      },
      {
        id: 13,
        name: 'Dying Light 2: Stay Human',
        description:
          'February 4 | Techland | PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch, PC',
      },
      {
        id: 14,
        name: 'Elden Ring',
        description:
          'February 25 | FromSoftware Inc. | PS4, PS5, Xbox One, Xbox Series X/S, PC',
      },
      {
        id: 15,
        name: 'Evil Dead: The Game',
        description:
          'February | Saber Interactive | PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch, PC',
      },
      {
        id: 16,
        name: 'Ghostwire: Tokyo',
        description: 'TBA | Tango Gameworks | PS5, PC',
      },
      {
        id: 17,
        name: 'God of War Ragnarok',
        description: 'TBA | Santa Monica Studio | PS4, PS5',
      },
      {
        id: 18,
        name: 'Gotham Knights',
        description:
          'TBA | WB Games Montréal | PS4, PS5, Xbox One, Xbox Series X/S, PC',
      },
      {
        id: 19,
        name: 'Gran Turismo 7',
        description: 'March 4 | Polyphony Digital | PS4, PS5',
      },
      {
        id: 20,
        name: 'Hogwarts Legacy',
        description:
          'TBA | Avalanche Software | PS4, PS5, Xbox One, Xbox Series X/S, PC',
      },
    ];
    return { games };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the games array is empty,
  // the method below returns the initial number (11).
  // if the games array is not empty, the method below returns the highest
  // game id + 1.
  genId(games: Game[]): number {
    return games.length > 0
      ? Math.max(...games.map((game) => game.id)) + 1
      : 11;
  }
}
