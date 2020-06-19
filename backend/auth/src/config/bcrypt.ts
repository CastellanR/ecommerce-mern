import * as bcrypt from "bcrypt";

let rounds = 12;

export default class BCrypt {
  public static hashPassword(password: string): Promise<string> {
    return new Promise((resolve, reject) =>
      bcrypt.hash(password, rounds, (error, hash) => {
        if (error) {
          reject(error);
        }
        resolve(hash);
      })
    );
  }

  public static compare(password: string, dbHash: string): Promise<boolean> {
    return new Promise((resolve, reject) =>
      bcrypt.compare(password, dbHash, (err: Error, match: boolean) => {
        if (err) {
          reject(err);
        }
        resolve(match);
      })
    );
  }
}
