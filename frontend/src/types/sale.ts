import { Seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller
}

export type SalePage = {
  content?: Array<Sale>;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size?: number;
  number: number;
  first: boolean;
  numberOfElements?: number;
  empty?: boolean;
}

export type SaleSum = {
  sellerName: string;
  sum: number
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number
}
