```
GET --> /api/games
RETURN PAYLOAD: [{ id: "1", name: "example", "description": "..."}, ...]

GET --> /api/games/1
RETURN PAYLOAD: { id: "1", name: "example", "description": "..."}

POST --> /api/games
RETURN PAYLOAD: { id: "2", name: "new game", "description": "..."}

PUT --> /api/games/1
RETURN PAYLOAD: { id: "1", name: "example-updated", "description": "..."}

DELETE --> /api/games/1
RETURN PAYLOAD: empty
```

```ts
// Ver archivo: src/app/angular/game.service.ts

export class GameService {
  private gamesUrl = "api/games";

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string) {
    throw new Error("Not implemented yet");
  }

  createGame(game: Game) {
    throw new Error("Not implemented yet");
  }

  updateGame(game: Game) {
    throw new Error("Not implemented yet");
  }

  deleteGame(gameId: string) {
    throw new Error("Not implemented yet");
  }
}
```

```html
<!-- Ver archivo /src/app/angular/game-listing/game-listing.component.html -->
<div class="actions">
  <a href="/angular/senior/games/new" class="btn-new">Nuevo</a>
</div>
<div *ngIf="games">
  <ul role="list" class="list">
    <li *ngFor="let game of games" class="item">
      <div class="row">
        <div class="row-group">
          <p class="row-content">{{game.name}}</p>
        </div>
        <div class="row-action">
          <button class="btn-delete">Eliminar</button>
        </div>
        <div class="row-action">
          <a href="/angular/senior/games/{{game.id}}" class="btn-edit"
            >Editar</a
          >
        </div>
      </div>
    </li>
  </ul>
</div>
```

```html
<!-- Ver archivo /src/app/angular/game-new/game-new.component.html -->
<form>
  <div class="field">
    <label for="name">Nombre</label>
    <input id="name" type="text" />
  </div>
  <div class="field">
    <label for="name">Descripción</label>
    <textarea id="name" type="text"></textarea>
  </div>
  <div class="actions">
    <button type="submit" class="btn-primary">Crear</button>
    <a href="/angular/senior/games" class="btn-secondary">Cancelar</a>
  </div>
</form>
```

```html
<!-- Ver archivo /src/app/angular/game-new/game-detail.component.html -->
<form>
  <div class="field">
    <label for="id">Id</label>
    <input id="id" type="text" disabled />
  </div>
  <div class="field">
    <label for="name">Nombre</label>
    <input id="name" type="text" />
  </div>
  <div class="field">
    <label for="name">Descripción</label>
    <textarea id="name" type="text"></textarea>
  </div>
  <div class="actions">
    <button type="submit" class="btn-primary">Actualizar</button>
    <a href="/angular/senior/games" class="btn-secondary">Cancelar</a>
  </div>
</form>
```
