import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/comics'
  }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
