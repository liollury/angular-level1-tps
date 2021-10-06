import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const appRoutes: Routes = [
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then((m) => m.DetailModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
  },
  {
    path: 'suggest',
    loadChildren: () => import('./suggest/suggest.module').then((m) => m.SuggestModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: '/comics'
  }
];

export const AppRoute: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
