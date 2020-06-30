import mongoose, { Schema } from "mongoose";

import { BaseSchema } from "./Base";
import { extendSchema } from "../helpers/mongoose";
import { ISession } from "../interfaces/ISession";

const SessionSchema: Schema = extendSchema(BaseSchema,{
  userId: { type: Number, required: true },
  token: { type: String, required: false },
  deviceName: { type: String, required: true },
  agent: { type: String, required: true },
  idSessionState: { type: String, required: true },
  BaseSchema,
});

export default mongoose.model<ISession>("Session", SessionSchema);
