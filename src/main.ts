import { routes } from './app/app.routes';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/domains/home/home.component';
import { ProductsComponent } from './app/domains/products/products.component';
import { CategoriesComponent } from './app/domains/categories/categories.component';
import { OrdersComponent } from './app/domains/orders/orders.component';
import { UsersComponent } from './app/domains/users/users.component';
import { HeaderComponent } from './app/components/header/header.component';
import { CrearProductoComponent } from './app/domains/crear-producto/crear-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    UsersComponent,
    CrearProductoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule ,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent], 

  exports: [
    HeaderComponent, 
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));