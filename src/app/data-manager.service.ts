import { Injectable } from '@angular/core';

import { Task, List } from './models.interface';
import { ApiService } from './api.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  data: { lists: Array<List> } = {
    lists: [],
  };
  constructor(private api: ApiService, private router: Router) {}

  loadDataFromBackend() {
    this.api
      .getLists()
      .then((rawLists: Array<any>) => {
        console.log(rawLists);
        const lists = rawLists.map(rawList => ({
          listId: rawList.id,
          createdAt: rawList.createdAt,
          modifiedAt: rawList.updatedAt,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: List) => {
            list.tasks = await this.api.getTasks(list.listId);
            list.tasks = list.tasks.map((rawTask: any) => ({
              listId: rawTask.idlist,
              taskId: rawTask.id,
              text: rawTask.task,
              completed: false,
              color: 'white',
              createdAt: new Date(rawTask.createdAt),
              modifiedAt: new Date(rawTask.updatedAt),
            }));
            return list;
          }),
        ).then(lists => {
          this.data.lists = lists;
        });
      })
      .catch(() => this.router.navigate(['/login']));
  }

  getData() {
    this.loadDataFromBackend();
    return this.data;
  }
  addNewList(name: string) {
    
    this.api.newList(name).then(res => {
      console.log(res);
      this.loadDataFromBackend();
    });
  }
  deleteList(listId: number) {
    // this.data.lists = this.data.lists.filter(list => list.listId !== listId);
    this.api.deleteList(listId).then(res => {
      this.loadDataFromBackend();
    });
  }

  addNewTask(idlist:number, task:string) {  
    this.api.addTask(idlist, task).then(res =>{
      console.log(res);
      this.loadDataFromBackend();
    });
  }
  deleteAllTasks(idlist:number) {
    this.api.deleteAllTask(idlist).catch(res =>{
      console.log(res);
      this.loadDataFromBackend();
      
    });
  }

  editALists(idlist:number, name: string){
    this.api.editList(idlist, name).catch(res =>{
      console.log(res);
      this.loadDataFromBackend();
      
    });
  }

editATasks(taskId: number, text:string){
  this.api.editTask( taskId, text).then(res =>{
    console.log(res);
    this.loadDataFromBackend();
  })
}

}