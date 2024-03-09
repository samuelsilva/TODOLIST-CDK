import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgFor, NgIf } from '@angular/common';
//import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-list-drag-drop',
  templateUrl: './list-drag-drop.component.html',
  styleUrls: ['./list-drag-drop.component.css'],
  standalone: true,
  imports: [ CdkDropList, NgFor, CdkDrag, CdkDragPlaceholder, FormsModule, NgIf ]
})

export class ListDragDropComponent {
  title = "TODO List with CDK";
  
  public tasks = '';
  public editMode = false; // boolean attribute to edit list 

  public todoList = [
    { content: 'Rocky 1', editing: false }, 
    { content: 'Rocky 2', editing: false },
    { content: 'Rocky 3', editing: false },
    { content: 'Rocky 4', editing: false },
    { content: 'Rocky 5', editing: false },
    { content: 'Rambo 1', editing: false },
    { content: 'Rambo 2', editing: false },
    { content: 'Rambo 3', editing: false },
    { content: 'Rambo 4', editing: false },
    { content: 'Rambo 5', editing: false },
    { content: 'O Demolidor', editing: false },
    { content: 'Os Mercenários 1', editing: false },
    { content: 'Os Mercenários 2', editing: false },
    { content: 'Os Mercenários 3', editing: false },
    { content: 'Os Mercenários 4', editing: false },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex,event.currentIndex);
  }

  addTasks(){
    this.todoList.push({content: this.tasks, editing: false});
    this.tasks = ''; // clean the field after the insert 
  }

  removeTasks(item: any){
    this.todoList.splice(this.todoList.indexOf(item),1);
  }

  editTasks(item: any) {
    item.editing = true;
  }

  saveTasks(item: any) {
    item.editing = false;
  }

}
