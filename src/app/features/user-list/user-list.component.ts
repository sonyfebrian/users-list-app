import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  dataSource: User[] = []; 

  displayedColumns = ['username', 'actions'];

  selectedUser: User | null = null;

  constructor(private readonly usersService: UsersService, private snackBar: MatSnackBar) {}

  

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe(
      (users) => {
        this.dataSource = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }


  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe(
      () => {
        console.log(`User with ID ${userId} deleted successfully.`);
        this.getUsers(); 
        this.snackBar.open('User deleted successfully', 'OK', {
          duration: 3000, 
        });
      },
      (error) => {
        console.error(`Error deleting user with ID ${userId}:`, error);
        
      }
    );
  }

  updateUser(updatedUser: User) {
    this.usersService.updateUser(updatedUser).subscribe(
      (result) => {
        console.log('User updated successfully:', result);
        this.selectedUser = null;
        this.getUsers(); 
        this.snackBar.open('User updated successfully', 'OK', {
          duration: 3000, 
        });
      },
      (error) => {
        console.error('Error updating user:', error);
        
      }
    );
  }

  editUser(user: User) {
    this.selectedUser = { ...user }; 
  }

  
  cancelEdit() {
    this.selectedUser = null;
  }
}
