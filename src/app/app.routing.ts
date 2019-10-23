import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/'
  }
];


export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
