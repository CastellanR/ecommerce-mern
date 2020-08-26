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

          const isMatch = await BCrypt.compare(password, user.password);

          if (isMatch) {
            if (!user.isVerified)
              //Check if the user validate its account
              return done(
                "Confirm your account to log in into the application"
              );
            return done(null, user);
          }
          return done("Incorrect password.");
        } catch (err) {
          if (err.code === 400)
            return done(`User with email ${email} not found.`);

          return done(null, false, { message: err.message });
        }
      }
    )
  );
};

export default initPassport;
