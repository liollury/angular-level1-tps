import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DetailComponent } from './detail.component';

const detailRoutes: Routes = [
  {
    path     : ':id',
    component: DetailComponent
  },
];

export const detailRoute: ModuleWithProviders = RouterModule.forChild(detailRoutes);

