import { Schema, model } from "mongoose";

function generateEuropeanId() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${day}.${month}.${year}-${hours}${minutes}${seconds}`;
}

const todoSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: generateEuropeanId,
  },
  day: {
    type: String,
    required: true,
  },
  todos: {
    type: [String],
    required: true,
  },
});

export const TodoModel = model("Todo", todoSchema, "works");
