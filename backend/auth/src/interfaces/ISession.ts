import {IBase} from "./IBase"

export interface ISession extends IBase {
  idUser: number;
  token: string;
  deviceName: string;
  agent: string;
  idSessionState: string;
}