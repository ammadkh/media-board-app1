import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = [
    {
      email: 'userone@gmail.com',
      name: 'userone',
      password: 'userone',
      collection: [
        {
          id: '1',
          imageUrl:
            'https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/680ee5eaffbc07474637c76e7a62e1aa.png',
          description: 'description 1',
        },
      ],
    },
    {
      email: 'usertwo@gmail.com',
      name: 'usertwo',
      password: 'usertwo',
      collection: [
        {
          id: '2',
          imageUrl: 'https://image.freepik.com/free-vector/online-shopping-ecommerce-market-flat-illustration-with-small-people_135170-29.jpg',
          description: 'descrition 2'
        },
        {
          id: '1',
          imageUrl:
            'https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/680ee5eaffbc07474637c76e7a62e1aa.png',
          description: 'description 1',
        }
      ],
    },
  ];
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  currentUser = this.currentUserSubject.asObservable();
  constructor() {}

  getAuthToken(email: string, password: string): Observable<any> {
    debugger;
    const user = this.users.find((x) => x.email === email && x.password === password);
      if (!user) { throw Error('Username or password is incorrect'); }
      // save user to local storage

    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return of(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
