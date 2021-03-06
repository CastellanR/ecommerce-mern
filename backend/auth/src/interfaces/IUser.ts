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

export interface IDTOLoginUser {
  id: number;
  email: string;
  password: string;
  deviceName: string;
  agent: string;
  keepSessionActive: boolean;
}

export interface IDTOLoginResponse {
  id: string;
  email: string;
  token: string;
}

export interface IGetUserByEmail {
  id: number;
  email: string;
  password: string;
  isVerified: boolean;
}

export interface IDeleteUserByCondition {
  attribute: string;
  value: string;
}