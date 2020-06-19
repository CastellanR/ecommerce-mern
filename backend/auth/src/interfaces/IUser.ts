export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IDTOCreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}