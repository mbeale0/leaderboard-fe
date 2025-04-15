import { Injectable } from '@angular/core';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class ToptenService {
  url = "http://localhost:8080/score/topten";
  async getTopTenUserScores(): Promise<Score[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  constructor() { }
}
