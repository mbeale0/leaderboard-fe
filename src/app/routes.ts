import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routeConfig: Routes = [
    {
        path: '',
        component: LeaderboardComponent,
        title: 'Leaderboard',
    }/*,
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },*/
];
export default routeConfig;