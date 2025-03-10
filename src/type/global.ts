
export type SortItem = 'latest' | 'low' | 'high';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  variant: string[];
  description: string;
}

export interface IProductRes {
  status: number,
  message: string,
  data: IProduct[] | null
}