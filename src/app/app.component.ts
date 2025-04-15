import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <main>
    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Leaderboard';
}
