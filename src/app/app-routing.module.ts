import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'board', component: BoardComponent,
  },
  {
    path: 'logout', component: LogoutComponent, 
  },
  {
    path: 'login', component: LoginViewComponent,
  },
  {
    path: 'register', component: RegisterViewComponent,
  },

  {
    path: '**', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'logout', redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
