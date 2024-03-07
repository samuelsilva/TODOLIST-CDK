import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
//import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-list-drag-drop',
  templateUrl: './list-drag-drop.component.html',
  styleUrls: ['./list-drag-drop.component.css'],
  standalone: true,
  imports: [ CdkDropList, NgFor, CdkDrag, CdkDragPlaceholder, FormsModule ]
})

export class ListDragDropComponent {
  title = "TODO List with CDK";
  
  public tasks = '';
  
  public todoList = [
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
    moveItemInArray(this.todoList, event.previousIndex,event.currentIndex);
  }

  addTasks(){
    this.todoList.push(this.tasks);
  }

  removeTasks(item: any){
    this.todoList.splice(this.todoList.indexOf(item),1);
  }
  
}
