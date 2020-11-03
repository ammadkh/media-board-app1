import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(email: string, password: string) {
    if (email === 'userone@gmail.com' && password === 'userone') {
        return {
          username: 'userone',
          collection: [
            { imageUrl: 'https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/680ee5eaffbc07474637c76e7a62e1aa.png',
             description: 'description 1'}
          ]
        };
    }
    console.log(email, password);
  }
}
