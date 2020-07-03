import passportLocal from "passport-local";

import BCrypt from "./bcrypt";
import { getUserByEmail } from "../grpc/client/user/user";

const LocalStrategy = passportLocal.Strategy;

const initPassport = (passport: any) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", session: false }, // Default options are usernameField username and passwordField password
      async (email, password, done) => {
        try {
          const user = await getUserByEmail(email);
          if (!user) {
            return done(undefined, false, {
              message: `User with email ${email} not found.`,
            });
          }

          const isMatch = await BCrypt.compare(password, user.password);

          if (isMatch) {
            return done(undefined, user);
          }
          return done(undefined, false, {
            message: "Incorrect password.",
          });
        } catch (err) {
          return done(err);
        }
      }
    )
  );
}

export default initPassport
