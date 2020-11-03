import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'media-board-app';

  images = [
    'https://cdn.dribbble.com/users/1787323/screenshots/11310814/media/680ee5eaffbc07474637c76e7a62e1aa.png',
    'https://image.freepik.com/free-vector/online-shopping-ecommerce-market-flat-illustration-with-small-people_135170-29.jpg',
    'https://images.creativemarket.com/0.1.0/ps/5788397/2340/1560/m1/fpnw/wm0/02-.jpg?1548795371&s=d08254ce6d1fa4f78d069a1e09a1f97b',
    'https://media.istockphoto.com/vectors/coworking-space-with-creative-people-sitting-at-the-table-business-vector-id955148220?k=6&m=955148220&s=612x612&w=0&h=j6Qw6uLeLGPWCmchIPOWw96cIWlWzR-rZ7w95jukcMs=',
    'https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png',
  ];

  myImages = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.myImages);
  }

  ngOnInit() {}
}
