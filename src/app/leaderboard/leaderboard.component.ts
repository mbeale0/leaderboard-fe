import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameService } from '../game.service';
import { RouterLink } from '@angular/router';
import { Score } from '../score';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './leaderboard.component.html',  
  styleUrl: './leaderboard.component.css'
})

export class LeaderboardComponent {
  gameService: GameService = inject(GameService);
  scores: Score[] = [];

  constructor() {
    this.gameService.getTopTenUserScores().then((scores: Score[]) => {
      this.scores = scores; 
    });
  }
}
