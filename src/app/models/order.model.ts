
export interface Purchase {
    _id: string;
    user: string; 
    products: string[]; 
    total: number;
    paymentMethod: {
      name: string;
      id: number;
    };
    
}