import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserstatsComponent } from './userstats/userstats.component';

const routeConfig: Routes = [
    {
        path: '',
        component: LeaderboardComponent,
        title: 'Leaderboard',
    },
    {
        path: 'stats/:id',
        component: UserstatsComponent,
        title: 'User Stats',
    },
];
export default routeConfig;