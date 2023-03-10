import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from '../taskList/task.component';
import { SearchInputComponent } from '../searchInput/search-input.component';
import { DropdownMenuComponent } from '../dropdownMenu/dropdown-menu.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    SearchInputComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
