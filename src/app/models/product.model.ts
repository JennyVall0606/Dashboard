export interface Product {
  
  name: string;
  descripcion: string;
  size: { code: string }[];
  price: { price: number }[];
  aroma: string[];
  color: string[]; 
  stock: string[];
 
}

