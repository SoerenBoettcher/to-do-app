import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Notification from "./components/Notification";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./services/api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch the todos when the component mounts
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        setTodos(todos);
      } catch (error) {
        setMessage(error.message);
        setIsError(true);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const addedTodo = await createTodo(newTodo);
      setTodos([...todos, addedTodo]);
      setMessage("Todo erfolgreich hinzugefügt!");
      setIsError(false);
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setMessage("Todo erfolgreich gelöscht!");
      setIsError(false);
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  const handleEditTodo = async (id, updates) => {
    try {
      const updatedTodo = await updateTodo(id, updates);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      setMessage("Todo erfolgreich aktualisiert!");
      setIsError(false);
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  return (
    <div style={styles.backgroundimage}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Todo Manager</h1>
        <Notification message={message} isError={isError} />
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default App;
