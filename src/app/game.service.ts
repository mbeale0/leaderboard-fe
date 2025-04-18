import { Injectable } from '@angular/core';
import { Score } from './score';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  scoreUrl = "http://localhost:8080/score/";
  userUrl = "http://localhost:8080/users/";

  async getTopTenUserScores(): Promise<Score[]> {
    const data = await fetch(this.scoreUrl + "topten");
    return (await data.json()) ?? [];
  }

  async getGamesPlayed(userId: Number): Promise<Number> {
    const data = await fetch(this.scoreUrl + `${userId}/games`);
    return (await data.json()).totalGames ?? 0;
  }

  async getTopUserScore(userId: Number): Promise<Number> {
    const data = await fetch(this.scoreUrl + `${userId}/top`);
    return (await data.json()).score ?? 0;
  }

  async getUserName(userId: Number): Promise<string> {
    const data = await fetch(this.userUrl + `${userId}`);
    return (await data.json()).userName ?? "NOTFOUND";
  }

  async getTopFiveScoresForUser(userId: Number): Promise<Score[]> {
    const data = await fetch(this.scoreUrl + `${userId}/topfive`);
    return (await data.json()) ?? [];
  }

  constructor() { }
}
