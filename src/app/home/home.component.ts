import { CollectionService } from './../services/collection.service';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AuthService } from '../services/auth.service';
import { Collection, User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'media-board-app';
  currentUser: User;
  collection: Collection[];

  constructor(
    private authService: AuthService,
    private collectionService: CollectionService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }


  images = [

  ];

  myImages = [];

  drop(event: CdkDragDrop<any[]>) {
    debugger;
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

  ngOnInit() {
    this.myImages = this.currentUser.collection;
    this.collectionService.getCollections().subscribe(
      (res: Collection[]) => {
        console.log(this.currentUser.collection);
        this.collection = res.filter(x => this.currentUser.collection.some(c => c.id !== x.id) );
        console.log(this.collection);
      }
    );
  }
}
