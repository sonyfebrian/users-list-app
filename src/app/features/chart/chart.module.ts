import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  // bootstrap: [ChartComponent]
})
export class ChartModule { }
