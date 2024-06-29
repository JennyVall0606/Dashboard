import { routes } from './app/app.routes';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { appConfig } from './app/app.config';
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
import { CrearUsuarioComponent } from './app/domains/crear-usuario/crear-usuario.component';
import { CardProductComponent } from './app/components/card-product/card-product.component';
import { EditarProductoComponent } from './app/components/editar-producto-component/editar-producto-component.component';




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
    CrearUsuarioComponent,
    CardProductComponent,
    EditarProductoComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
    HttpClientModule
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

