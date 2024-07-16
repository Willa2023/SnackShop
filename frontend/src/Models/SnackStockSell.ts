export interface Snack {
  id: number;
  name: string;
  costPrice: number;
  sellPrice: number;
  brand: string;
  image: string;
}

export interface Stock {
  id: number;
  snackId: number;
  snack: Snack;
  totalStock: number;
  currentStock: number;
  soldQuantity: number;
  sells: Sell[];
  totalCost: number;
  totalSell: number;
  totalProfit: number;
}

export interface Sell {
  id: number;
  snackId: number;
  snack: Snack;
  quantity: number;
  date: Date;
  stockId: number;
  totalPrice: number;
  profit: number;
}
