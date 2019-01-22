import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { ListComponent } from './list/list.component';
import { BoardComponent } from './board/board.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DataManagerService} from './data-manager.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowListsComponent,
    ListComponent,
    BoardComponent,
    AddNewListComponent,
    TaskComponent,
    RegisterViewComponent,
    LoginViewComponent,
    NavbarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    DataManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
