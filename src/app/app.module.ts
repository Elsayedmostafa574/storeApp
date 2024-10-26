import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthModule } from './auth/auth.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CartModule } from './cart/cart.module';
import { FeaturesModule } from './features/features.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    ToastModule,
    ProgressSpinnerModule,
    CartModule,
    FeaturesModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
