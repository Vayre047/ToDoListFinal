import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  //Receber a lista de tarefas do tasks.component
  @Input() tasks: Task[] = [];
  //Enviar a lista de tarefas actualizada para tasks.component
  @Output() newTasks = new EventEmitter<Task[]>();

  ngOnInit(){
    this.sendMessage();
  }

  // Apagar tarefa da lista de tarefas
  deleteTask(index: any) {
    this.tasks.splice(index, 1);
    this.newTasks.emit(this.tasks);
  }

  //Actualizar o estado da tarefa
  isChecked(task: Task){
    if (task.status == 'Done'){
      task.status = 'To Do';
    }else{
      task.status = 'Done';
    }
  }

  //Envia a lista actualizada para a tasks
  sendMessage(){
    this.newTasks.emit(this.tasks);
  }
}