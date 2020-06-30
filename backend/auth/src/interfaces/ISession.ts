import {IBase} from "./IBase"

export interface ISession extends IBase {
  userId: number;
  token: string;
  deviceName: string;
  agent: string;
  idSessionState: string;
}