import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { ProductsComponent } from './domains/products/products.component';
import { CategoriesComponent } from './domains/categories/categories.component';
import { UsersComponent } from './domains/users/users.component';
import { OrdersComponent } from './domains/orders/orders.component';
import { CrearProductoComponent } from './domains/crear-producto/crear-producto.component';


export const routes: Routes = [
   
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'products/CrearProducto', component:CrearProductoComponent},
];