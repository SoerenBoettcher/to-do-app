import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  day: String,
  todos: [String],
});

export const TodoModel = model("todos", todoSchema, "works");
