import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListComponent } from './list.component';

const listRoutes: Routes = [
  {
    path     : '',
    component: ListComponent
  },
  {
    path     : ':category',
    component: ListComponent
  },
];

export const ListRoute: ModuleWithProviders = RouterModule.forChild(listRoutes);
