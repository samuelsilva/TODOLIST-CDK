import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragDropComponent } from './list-drag-drop.component';

describe('ListDragDropComponent', () => {
  let component: ListDragDropComponent;
  let fixture: ComponentFixture<ListDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
