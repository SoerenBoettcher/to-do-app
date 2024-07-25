import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3055/todos",
});

export const fetchTodos = async () => {
  try {
    const response = await api.get("/");
    return response.data.answer;
  } catch (error) {
    throw new Error("Fehler beim Laden der Todos.");
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await api.post("/", todo);
    return response.data.answer;
  } catch (error) {
    throw new Error("Fehler beim Hinzufügen eines Todos.");
  }
};

export const updateTodo = async (id, updates) => {
  try {
    const response = await api.put("/works", { id, ...updates });
    return response.data.answer;
  } catch (error) {
    throw new Error("Fehler beim Aktualisieren eines Todos.");
  }
};

export const deleteTodo = async (id) => {
  try {
    await api.delete("/", { data: { id } });
  } catch (error) {
    throw new Error("Fehler beim Löschen eines Todos.");
  }
};
