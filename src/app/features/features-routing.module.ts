import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from '../guards/auth.guard';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandProductsComponent } from './components/brand-products/brand-products.component';

const routes: Routes = [
  {
    path: 'all-products' , component : ProductsComponent
  },
  {
    path : 'favorites' , component : FavoritesComponent , canActivate : [authGuard]
  },
  {
    path : 'product-details/:id' , component : ProductDetailsComponent
  },
  {
    path : 'brands' , component : BrandsComponent
  },
  {
    path : 'productsBrand/:id' , component : BrandProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
