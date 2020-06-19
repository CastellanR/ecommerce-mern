import { IDTOCreateUser } from "../../interfaces/IUser";
import createUser from "../../grpc/client/user/user";
import Logger from "../../loaders/logger";
import BCrypt from "../../config/bcrypt";

export default class UserService {
  async RegisterUser(
    dtoCreateUser: IDTOCreateUser
  ): Promise<{ code: number; message: string }> {
    try {
      dtoCreateUser.password = await BCrypt.hashPassword(dtoCreateUser.password)            
    } catch (error) {
      Logger.error(error)
      return { code: 500, message: error };      
    }
    
    try {
      const id = await createUser(dtoCreateUser)
    } catch (error) {
      Logger.error(error)
      return {code:400, message: error}
    }
    return {
      code: 201,
      message: "Please check your email to activate the account!",
    };
  }
}
