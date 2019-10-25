import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

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
    loadChildren: () => import('./suggest/suggest.module').then((m) => m.SuggestModule)
  },
  {
    path: '**',
    redirectTo: '/comics'
  },
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
