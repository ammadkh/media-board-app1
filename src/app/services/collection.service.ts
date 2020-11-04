import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  getCollections() : Observable<any> {
    return of([
      {
        id: '1',
        imageUrl: 'https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/680ee5eaffbc07474637c76e7a62e1aa.png',
        description: 'description 1'
      }, {
        id: '2',
        imageUrl: 'https://image.freepik.com/free-vector/online-shopping-ecommerce-market-flat-illustration-with-small-people_135170-29.jpg',
        description: 'descrition 2'
      },
      {
        id: '3',
        imageUrl: 'https://images.creativemarket.com/0.1.0/ps/5788397/2340/1560/m1/fpnw/wm0/02-.jpg?1548795371&s=d08254ce6d1fa4f78d069a1e09a1f97b',
        description: 'description 3'
      },
       {
        id: '4',
         imageUrl: 'https://media.istockphoto.com/vectors/coworking-space-with-creative-people-sitting-at-the-table-business-vector-id955148220?k=6&m=955148220&s=612x612&w=0&h=j6Qw6uLeLGPWCmchIPOWw96cIWlWzR-rZ7w95jukcMs=',
      description: 'description 4',
       },
       {
        id: '5',
         imageUrl: 'https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png',
         description: 'description 5'
       }]
    );
  }
}
