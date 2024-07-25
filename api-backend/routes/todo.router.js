import { Router } from "express";
import {
  deleteTodoController,
  getTodoController,
  postTodoController,
  putTodoController,
} from "../controllers/todo.controller.js";
import {
  validateTodoCreation,
  validateTodoDeletion,
  validateTodoUpdate,
} from "../middlewares/todo.middleware.js";

export const TodoRouter = Router();

TodoRouter.post("/", validateTodoCreation, postTodoController);

TodoRouter.put("/works", validateTodoUpdate, putTodoController);

TodoRouter.get("/", getTodoController);

TodoRouter.delete("/", validateTodoDeletion, deleteTodoController);
