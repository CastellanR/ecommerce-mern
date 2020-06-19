import { IDTOCreateUser } from '../../interfaces/IUser';
import createUser  from "../../grpc/client/user/user"
import Logger from "../../loaders/logger";

export default class UserService {
  async RegisterUser(dtoCreateUser: IDTOCreateUser): Promise<{ code: number; message: string }> {    
    try {
      const id = await createUser(dtoCreateUser)
    } catch (error) {
      Logger.error(error)
      return {code:400, message: error}
    }
    return {code: 201, message: "Please check your email to activate the account!"}
  };
}
