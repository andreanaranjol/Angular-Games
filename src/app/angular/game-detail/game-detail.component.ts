import { Component, OnInit } from '@angular/core';
import { Game } from '../types';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  public gameId: string = "";
  public gameName : string = "";
  public gameDescription: string = "";

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params["gameId"];
      this.gameService.getGameById(this.gameId).subscribe(game => {
        this.gameName = game.name;
        this.gameDescription = game.description;
      })
    })
  }

  updateGame(id: string, name: string, description: string) {
    let updatedGame: Game = {
      id: parseInt(id),
      name: name,
      description: description
    }
    this.gameService.updateGame(updatedGame).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl("angular/senior/games");
    });
  }

}
