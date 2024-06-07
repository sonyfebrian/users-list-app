import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'chart',
        loadChildren: () => import('../chart/chart.module').then((m) => m.ChartModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../user-list/user-list.module').then((m) => m.UserListModule),
      },
      {
        path: 'add-user',
        loadChildren: () => import('../add-user/add-user.module').then((m) => m.AddUserModule),
      },
      
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
