import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
 

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User):  Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
 
  deleteUser(userId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(deleteUrl);
  }

  updateUser(updatedUser: User): Observable<User> {
    const updateUrl = `${this.apiUrl}/${updatedUser.id}`;
    return this.http.put<User>(updateUrl, updatedUser);
  }
}
