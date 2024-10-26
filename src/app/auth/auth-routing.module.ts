import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from '../guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'profile' , component : ProfileComponent , canActivate : [authGuard]
  },
  {
    path : 'register' , component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
