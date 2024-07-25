import { TodoModel } from "../models/todo.model";

export const postTodoController = async (req, res, next) => {
  try {
    await TodoModel.create(req.body);

    res.status(200).json({
      code: 200,
      answer: req.body,
    });
  } catch (error) {
    next("Datenbank Fehler!");
  }
};

export const putTodoController = async (req, res, next) => {
  try {
    await TodoModel.updateOne(req.body);

    res.status(200).json({
      code: 200,
      answer: req.body,
    });
  } catch (error) {
    next("Datenbank Fehler!");
  }
};
