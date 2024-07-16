export interface Cart {
  id: number;
  name: string;
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  snackId: number;
  quantity: number;
}
