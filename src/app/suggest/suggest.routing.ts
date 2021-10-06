import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestComponent } from './suggest.component';

const suggestRoutes: Routes = [
  {
    path: '',
    component: SuggestComponent
  }
];

export const SuggestRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(suggestRoutes);
