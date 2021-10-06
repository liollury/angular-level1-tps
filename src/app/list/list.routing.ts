import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

const listRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':category',
    component: ListComponent
  }
];

export const ListRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(listRoutes);
