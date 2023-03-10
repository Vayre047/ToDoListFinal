import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit{
  filterTasks: Task[] = [];
  //Receber a lista de tarefas da tasks.component
  @Input() tasks: Task[] = [];
  //Enviar lista de tarefas concluidas ou por fazer para tasks.component
  @Output() newTasks = new EventEmitter<Task[]>();
  newStatus!: FormGroup;

  constructor(private fb:FormBuilder){  }

  ngOnInit() {
    this.newStatus = this.fb.group({
      status: [null]
    });
  }

  //Objecto de estados de uma tarefa
  filterStatus = [
    {
      id: 0,
      status: 'All',
    },
    {
      id: 1,
      status: 'To Do',
    },
    {
      id: 2,
      status: 'Done',
    }
  ];

  //Criar a lista de tarefas concluidas ou por fazer
  getFilterStatus(){
     if(this.newStatus.value.status === this.filterStatus[1].status){
      this.filterTasks = this.tasks.filter(task => task.status.includes(this.filterStatus[1].status));
     } else if (this.newStatus.value.status === this.filterStatus[2].status){
       this.filterTasks = this.tasks.filter(task => task.status.includes(this.filterStatus[2].status));
    }else{
       this.filterTasks = this.tasks;
      }
      this.newTasks.emit(this.filterTasks);
  }
}
