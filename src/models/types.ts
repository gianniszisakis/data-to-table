export type OrderItem = {
  productId: string;
  name: string;
  category: "electronics" | "books" | "home" | "fashion";
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  customer: {
    id: string;
    name: string;
    city: string;
  };
  status: "paid" | "pending" | "cancelled";
  createdAt: string;
  items: OrderItem[];
};

export interface TotalAmountData {
  id: string;
  customerName: string;
  city: string;
  status: "paid" | "pending" | "cancelled";
  total_amount: number;
  item_count: number;
}
