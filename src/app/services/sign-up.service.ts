import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable()
export class SignUpService {
  private key: string = 'LogicStudioAngularTest';
  private readonly userBehavior = new BehaviorSubject<User | null>(null);
  constructor() {}

  public signUp(user: User) {
    localStorage.setItem(this.key, JSON.stringify(user));
    this.userBehavior.next(user);
  }

  public getUser(): Observable<User | null> {
    try {
      const item = localStorage.getItem(this.key);
      if (item) {
        const user = JSON.parse(item);
        this.userBehavior.next(user);
      }
    } catch (error) {}
    return this.userBehavior.asObservable();
  }
}
