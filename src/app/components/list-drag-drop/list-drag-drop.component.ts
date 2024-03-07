import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-drag-drop',
  templateUrl: './list-drag-drop.component.html',
  styleUrls: ['./list-drag-drop.component.css'],
  standalone: true,
  imports: [ CdkDropList, NgFor, CdkDrag, CdkDragPlaceholder ]
})

export class ListDragDropComponent {
  movies = [
    'Rocky 1',
    'Rocky 2',
    'Rocky 3',
    'Rocky 4',
    'Rocky 5',
    'Rambo 1',
    'Rambo 2',
    'Rambo 3',
    'Rambo 4',
    'Rambo 5',
    'O Demolidor',
    'Os Mercenários 1',
    'Os Mercenários 2',
    'Os Mercenários 3',
    'Os Mercenários 4',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex,event.currentIndex);
  }
}
