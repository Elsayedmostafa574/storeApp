import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path : 'cart' , component : CartComponent , canActivate : [authGuard] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
