import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/domains/home/home.component';
import { ProductsComponent } from './app/domains/products/products.component';
import { CategoriesComponent } from './app/domains/categories/categories.component';
import { OrdersComponent } from './app/domains/orders/orders.component';
import { UsersComponent } from './app/domains/users/users.component';
import { routes } from './app/app.routes';
import { HeaderComponent } from './app/components/header/header.component';
import { CrearProductoComponent } from './app/domains/crear-producto/crear-producto.component';

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
    RouterModule.forRoot(routes) 
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