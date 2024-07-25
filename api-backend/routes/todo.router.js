import { Router } from "express";
import {
  postTodoController,
  putTodoController,
} from "../controller/todo.controller.js";

export const TodoRouter = Router();

TodoRouter.post("/", postTodoController);

TodoRouter.put("/", putTodoController);

TodoRouter.get("/");

TodoRouter.delete("/");
