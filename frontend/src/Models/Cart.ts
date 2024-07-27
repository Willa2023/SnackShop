export interface Cart {
  id: number;
  userId: string;
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  snackId: number;
  quantity: number;
}
