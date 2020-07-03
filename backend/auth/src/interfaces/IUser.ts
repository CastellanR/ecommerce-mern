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
  deviceName: string;
  agent: string;
}

export interface IDTOLoginUser {
  id: number;
  email: string;
  password: string;
  keepActive: boolean;
}

export interface IGetUserByEmail {
  id: number;
  email: string;
  password: string;
}
