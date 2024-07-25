export const validateTodoCreation = (req, res, next) => {
  const { day, todos } = req.body;
  if (!day || !todos || !Array.isArray(todos) || todos.length === 0) {
    return res.status(400).json({
      code: 400,
      answer:
        "Ungültige Daten: Bitte geben Sie einen gültigen Tag und eine Liste von Aufgaben an.",
    });
  }
  next();
};

export const validateTodoUpdate = (req, res, next) => {
  const { id, day, todos } = req.body;
  if (!id || (!day && (!todos || !Array.isArray(todos)))) {
    return res.status(400).json({
      code: 400,
      answer:
        "Ungültige Daten: Bitte geben Sie eine gültige ID und die zu aktualisierenden Felder an.",
    });
  }
  next();
};

export const validateTodoDeletion = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({
      code: 400,
      answer: "Ungültige Daten: Bitte geben Sie eine gültige ID an.",
    });
  }
  next();
};
