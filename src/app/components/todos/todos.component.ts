import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Form, FormBuilder, Validators } from '@angular/forms';
import { iTask } from 'src/app/model/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

todoForm! : FormGroup;
tasks: iTask []= [];
inprogress: iTask []= [];
qualityAssurance: iTask []= [];
done: iTask []= [];
  constructor(private fb : FormBuilder){}

  ngOnInit(): void{
     this.todoForm = this.fb.group({
      item: ['', Validators.required]
    })
  }
  drop(event: CdkDragDrop<iTask[]>){
    if(event.previousContainer ===event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
