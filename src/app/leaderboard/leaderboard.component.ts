import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { ToptenService } from '../topten.service';
import { Score } from '../score';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',  
  styleUrl: './leaderboard.component.css'
})

export class LeaderboardComponent {
  toptenService: ToptenService = inject(ToptenService);
  scores: Score[] = [];

  constructor() {
    this.toptenService.getTopTenUserScores().then((scores: Score[]) => {
      this.scores = scores; 
    });
  }
}
