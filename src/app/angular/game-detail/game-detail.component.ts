import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {

  public gameId: string = "";
  public gameName : string = "";
  public gameDescription: string = "";
  public games?: Game[] = [];

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params["gameId"];
      this.games = JSON.parse(localStorage.getItem("games") || "[]");
      if (this.games?.length == 0)
        this.gameService.getGames().subscribe(games => {
          this.games = games;
        });
      this.gameName = this.games?.find(game => game.id == parseInt(this.gameId))?.name || "";
      this.gameDescription = this.games?.find(game => game.id == parseInt(this.gameId))?.description || "";
    })
  }

  updateGame() {
    const updatedGame: Game = {
      id: parseInt(this.gameId),
      name: this.gameName,
      description: this.gameDescription
    };
    this.gameService.updateGame(updatedGame).subscribe(() => {
      this.gameService.getGames().subscribe(games => {
        localStorage.setItem("games", JSON.stringify(games as Game[]));
        this.router.navigateByUrl("angular/senior/games");
      })
    });
  }

}
