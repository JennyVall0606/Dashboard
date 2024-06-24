import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  _id?: number;
  name: String; 
  price: Number;
  description: String;
  tamaño: String; 
  stock: Number;
  color: String;
  aroma:String;



  constructor(name: String, price: Number, description: String, tamaño: String, stock: Number, color: String, aroma:String) { 

    this.name = name;
    this.price = price;
    this.description = description;
    this.tamaño = tamaño;
    this.stock = stock;
    this.color = color;
    this.aroma = aroma;
    

  }
}
