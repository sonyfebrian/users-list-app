import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatTableModule, MatButtonModule, MatIconModule, MatCardModule,MatCardModule,  MatFormFieldModule, MatButtonModule, MatInputModule ];

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule,FormsModule, ...MATERIAL_MODULES],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class UserListModule {}
