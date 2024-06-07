import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(private readonly usersService: UsersService, private snackBar: MatSnackBar) {}
  

  addUser(form: NgForm) {
   
    if (form.invalid) {
     
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    const user: User = form.value;

    
    this.usersService.addUser(user).subscribe(
      (addUser) => {
        console.log('User added:', addUser);
        this.snackBar.open('User deleted successfully', 'OK', {
          duration: 3000, 
        });
       
      },
      (error) => {
        console.error('Error adding user:', error);
       
      }
    );

    form.resetForm();
  }
  
}
