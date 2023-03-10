import { Component } from '@angular/core';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent{
  newTask = '';
  // Variável local que guarda lista de tarefas completa
  tasks: Task[] = [];
  // Array que guarda a lista de tarefas que o utilizador pediu
  filteredTasks: Task[] = [];

  //Se existir uma nova tarefas, guarda dentro do array de tarefas
  addTask(): void{
    if(this.newTask){
      const newTask = new Task(this.newTask, 'To Do', this.tasks.length + 1);
      this.tasks.push(newTask);
      this.filteredTasks.push(newTask);
      this.newTask = '';
    }
  }
  
  // Actualizar a lista de tarefas 
  updateTask($event: Task[]){
    this.filteredTasks = $event;
  }
}
