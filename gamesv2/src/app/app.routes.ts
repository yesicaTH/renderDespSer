import { Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'games',component: GameListComponent },
    {
        path: 'games/add',
        component: GameFormComponent
      },
      {
        path: 'games/edit/:id',
        component: GameFormComponent
      }
];
