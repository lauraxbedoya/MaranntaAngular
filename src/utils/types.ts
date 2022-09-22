export type ActionType = {
  type: string,
  payload: any
};

export type UserType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  offers: boolean;
  politics: boolean;
};

export type AdminType = {
  name: string,
  lastname: string,
  email: string,
  password: string,
  isAdmin: boolean
};