import { Component, Input } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { List } from '../models.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
@Input() list: List;
oldName:string;
newName:string = '';
editing = false;

  constructor(private dataService: DataManagerService) {}

delete(){
  this.dataService.deleteList(this.list.listId);
}

newTask(ev){
  const text = ev.target.value.trim();
  if(text != ''){
    this.dataService.addNewTask(this.list.listId, ev.target.value.trim());
    ev.target.value = '';
  }
}

// deleteTask(){
//   this.dataService.deleteAllTasks(this.list.listId);
// }

editName(){
  this.list.name = this.newName;
  this.dataService.editALists(this.list.listId, this.list.name);
  this.editing = false;
}

edit(){
  
  this.editing = true;
}

cancelEdit(){
  this.editing = false;
}


}
