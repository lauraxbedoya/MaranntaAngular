export type ActionType = {
  type: string,
  payload: any
};

export type UserType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  dateofbirth?: string | null;
  gender: string;
  politics: boolean;
  role: string
};

export type LoginUser = {
  email: string;
  password: string;
}

export type CardType = {
  image: string;
  reference: string;
  price: number
}

export type StockType = {
  id?: string;
  style: string;
  reference: string;
  color: string;
  size: string;
  breastsize: string;
  quantity: number;
  price: string;
  images: any[];
}

export type ResultType = {
  data: any;
  message: string;
}