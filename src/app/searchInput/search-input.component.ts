import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../taskModel/task.model';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent{
  //Receber a lista de tarefas do tasks.component
  @Input() tasks: Task[] = [];
  //Enviar a tarefa pesquisada para tasks.component
  @Output() newSearchedTasks = new EventEmitter<Task[]>();
  newSearchTask = "";
  searchTasks: Task[] = [];
  
  // Vai procurar a tarefa pesquisada na lista de tarefas 
  getSearchTask(){
    this.searchTasks = this.tasks.filter(task => task.name.toLocaleLowerCase().includes(this.newSearchTask));
    this.newSearchedTasks.emit(this.searchTasks);
    this.newSearchTask = "";
  }
}