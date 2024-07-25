import { TodoModel } from "../models/todo.model.js";

export const postTodoController = async (req, res, next) => {
  try {
    console.log("Eingehende Daten:", req.body);

    if (!req.body.day || !req.body.todos) {
      return res.status(400).json({
        code: 400,
        answer: "Bitte geben Sie den Tag und die Aufgaben an.",
      });
    }

    const newTodo = await TodoModel.create(req.body);

    res.status(200).json({
      code: 200,
      answer: newTodo,
    });
  } catch (error) {
    console.error("Fehler beim Erstellen eines Todos:", error);
    next(
      new Error("Datenbankfehler: Das Erstellen des Todos ist fehlgeschlagen!")
    );
  }
};

export const putTodoController = async (req, res, next) => {
  try {
    const { id, ...updateData } = req.body;
    const updatedTodo = await TodoModel.findOneAndUpdate({ id }, updateData, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        code: 404,
        answer: "Todo nicht gefunden!",
      });
    }

    res.status(200).json({
      code: 200,
      answer: updatedTodo,
    });
  } catch (error) {
    console.error("Fehler beim Aktualisieren eines Todos:", error);
    next(
      new Error(
        "Datenbankfehler: Das Aktualisieren des Todos ist fehlgeschlagen!"
      )
    );
  }
};

export const getTodoController = async (req, res, next) => {
  try {
    const todos = await TodoModel.find();

    res.status(200).json({
      code: 200,
      answer: todos,
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Todos:", error);
    next(
      new Error("Datenbankfehler: Das Abrufen der Todos ist fehlgeschlagen!")
    );
  }
};

export const deleteTodoController = async (req, res, next) => {
  try {
    const { id } = req.body;
    const deletedTodo = await TodoModel.findOneAndDelete({ id });

    if (!deletedTodo) {
      return res.status(404).json({
        code: 404,
        answer: "Todo nicht gefunden!",
      });
    }

    res.status(200).json({
      code: 200,
      answer: "Todo erfolgreich gelöscht!",
    });
  } catch (error) {
    console.error("Fehler beim Löschen eines Todos:", error);
    next(
      new Error("Datenbankfehler: Das Löschen des Todos ist fehlgeschlagen!")
    );
  }
};
