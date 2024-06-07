import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule];

@NgModule({
  declarations: [DashboardComponent,],
  imports: [CommonModule, DashboardRoutingModule, ...MATERIAL_MODULES],
})
export class DashboardModule {}
