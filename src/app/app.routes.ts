import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { ProductsComponent } from './domains/products/products.component';
import { CategoriesComponent } from './domains/categories/categories.component';
import { UsersComponent } from './domains/users/users.component';
import { OrdersComponent } from './domains/orders/orders.component';
import { CrearProductoComponent } from './domains/crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './domains/crear-usuario/crear-usuario.component';
import { EditarProductoComponent } from './components/editar-producto-component/editar-producto-component.component';
import { LoginComponent } from './domains/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './domains/register/register.component';




export const routes: Routes = [
   
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'products/CrearProducto', component: CrearProductoComponent },
    { path: 'users/CrearUsuario', component: CrearUsuarioComponent },
    { path: 'products/EditarProducto/:id', component: EditarProductoComponent },
    { path: 'register', component: RegisterComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }