import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SuggestComponent } from './suggest.component';

const suggestRoutes: Routes = [
  {
    path     : '',
    component: SuggestComponent
  }
];

export const SuggestRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(suggestRoutes);
