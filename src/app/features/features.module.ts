import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from './components/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ImageModule } from 'primeng/image';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandProductsComponent } from './components/brand-products/brand-products.component';

@NgModule({
  declarations: [
    SingleProductComponent,
    ProductsComponent,
    FavoritesComponent,
    ProductDetailsComponent,
    BrandsComponent,
    BrandProductsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CardModule,
    ButtonModule,
    NgxPaginationModule,
    ImageModule
  ],
exports: [
  SingleProductComponent
]
})
export class FeaturesModule { }
