export type Cart = {
  cart_id: number;
  user_id: number;
  product_id: number;
  quantity: number;
};
export type User = {
  user_id: number;
  username: string;
  email: string;
  passwords: string;
  status: number;
  province: string;
  district: string;
  ward: string;
  address: string;
  phone: number;
  avatar: string;
};
