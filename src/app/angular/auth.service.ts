import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';
import { Account } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public signUp(user: User): Observable<Account> {
    const account: Account = {
      id: uuidv4(),
      name: user.name,
      email: user.email,
    };
    return of(account);
  }
}
