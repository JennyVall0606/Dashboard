import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
   
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  titulo = 'WillVelsAdmin';
imagenPrincipal = 'https://content.revistainteriores.es/medio/2023/12/12/velas-aromaticas-artesanales_12a5b249_231212162955_1280x794.jpg';

  imagenListaProducto =
    'https://cdn-icons-png.flaticon.com/512/1554/1554591.png';
  imagenListaCategorias =
  'https://cdn-icons-png.flaticon.com/512/2422/2422208.png';
  imagenListaOrdenes = 'https://cdn-icons-png.flaticon.com/512/9252/9252151.png';
  imagenUsuarios = 'https://cdn-icons-png.flaticon.com/512/32/32441.png';

  }
