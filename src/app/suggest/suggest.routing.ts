import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SuggestComponent } from './suggest.component';

const suggestRoutes: Routes = [
  {
    path     : '',
    component: SuggestComponent
  },
  /*{
    path: 'suggest',
    component: SuggestComponent
  }*/
];

export const SuggestRoute: ModuleWithProviders = RouterModule.forChild(suggestRoutes);
