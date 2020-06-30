import mongoose, { Schema } from "mongoose";
import { IBase } from "../interfaces/IBase";

export const BaseSchema: Schema = new Schema({
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
});

export default mongoose.model<IBase>("Base", BaseSchema);
