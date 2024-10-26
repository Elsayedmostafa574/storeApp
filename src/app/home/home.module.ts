import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselModule } from 'primeng/carousel';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [
    LandingComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    FeaturesModule
  ]
})
export class HomeModule { }
