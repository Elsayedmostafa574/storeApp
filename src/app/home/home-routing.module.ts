import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path : 'home' , component : LandingComponent
  },
  {
    path : 'categories' , component : CategoriesComponent
  },
  {
    path : '' , redirectTo : 'home' , pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
