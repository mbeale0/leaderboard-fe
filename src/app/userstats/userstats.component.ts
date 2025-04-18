import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { Score } from '../score';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userstats',
  imports: [CommonModule, RouterLink],
  templateUrl: './userstats.component.html',
  styleUrl: './userstats.component.css'
})
export class UserstatsComponent {
  private activatedRoute = inject(ActivatedRoute);
  userId = this.activatedRoute.snapshot.params['id'];
  gameService: GameService = inject(GameService);
  gamesPlayed: Number = 0;
  topScore: Number = 0
  userName: string = "NOUSER";
  scores: Score[] = [];

  constructor() {
    this.gameService.getGamesPlayed(this.userId).then((gamesPlayed: Number) => {
      this.gamesPlayed = gamesPlayed; 
    });

    this.gameService.getTopUserScore(this.userId).then((topScore: Number) => {
      this.topScore = topScore;
    });

    this.gameService.getUserName(this.userId).then((userName: string) => {
      this.userName = userName;
    });

    this.gameService.getTopFiveScoresForUser(this.userId).then((scores: Score[]) => {
      this.scores = scores;
    }) 
  }
}
