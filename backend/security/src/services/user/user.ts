import { IUser, IUserInputDTO } from '../../interfaces/IUser';

export default class UserService {
  async RegisterUser(userInputDTO: IUserInputDTO): Promise<{ user: IUser; token: string }> {
    const user = {
      _id: "1",
      name: "Hola",
      email: "as@gmail.com",
      password: "dsads",
      salt:"2"
    }

    return {user, token: "mundo"}
  };
}
