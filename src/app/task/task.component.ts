import { Component, Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent{
@Input() task: Task;

  newTaskName:string = '';
  editing: boolean = false;

  constructor(private dataService: DataManagerService) {}

  deleteTask(){
    this.dataService.deleteAllTasks(this.task.listId);
  }

  editTask(){
    this.task.text = this.newTaskName;
    this.dataService.editATasks(this.task.taskId, this.task.text);
    this.editing = false;
  }

  edit(){
    this.editing = true;
  }

  cancelEdit(){
    this.editing = false;
  }

}
