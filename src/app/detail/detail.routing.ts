import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

const detailRoutes: Routes = [
  {
    path: ':id',
    component: DetailComponent
  }
];

export const DetailRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(detailRoutes);

