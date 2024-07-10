export interface Snack {
  id: number;
  name: string;
  costPrice: number;
  sellPrice: number;
  brand: string;
}

export interface Stock {
  id: number;
  snackId: number;
  snack: Snack;
  totalStock: number;
  currentStock: number;
  soldQuantity: number;
  sells: Sell[];
}

export interface Sell {
  id: number;
  snackId: number;
  snack: Snack;
  quantity: number;
  date: Date;
  stockId: number;
  stock: Stock;
}
