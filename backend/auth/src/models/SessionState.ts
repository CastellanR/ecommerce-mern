import mongoose, { Schema } from "mongoose";

import { BaseSchema } from "./Base";
import { extendSchema } from "../helpers/mongoose";
import { ISessionState } from "../interfaces/ISessionState";

const SessionStateSchema: Schema = extendSchema(BaseSchema, {
  name: { type: String, required: true },
});

export default mongoose.model<ISessionState>(
  "SessionState",
  SessionStateSchema
);
