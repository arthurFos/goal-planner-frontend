import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

  getAllUsers(): Observable<User[]> {

  }

  getUserById(userId: String): Observable<User> {

  }

  createUser(user: User): Observable<User> {

  }

  updateUser(userId: String, lastname: String, firstname: String): Observable<User> {

  }

}
