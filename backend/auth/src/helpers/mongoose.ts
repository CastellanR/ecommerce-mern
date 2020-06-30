import mongoose, { Schema } from "mongoose";

// Extend function
export const extendSchema = (schema: Schema, obj: Object) => (
  new mongoose.Schema(
    Object.assign({}, obj, schema.obj)
  )
);