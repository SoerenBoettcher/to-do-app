import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [day, setDay] = useState("");
  const [todos, setTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todosArray = todos.split(",").map((todo) => todo.trim());
    onAdd({ day, todos: todosArray });
    setDay("");
    setTodos("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Neues Todo hinzufügen</h3>
      <div style={styles.inputGroup}>
        <label htmlFor="day" style={styles.label}>
          Tag:
        </label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="todos" style={styles.label}>
          Todos (kommagetrennt):
        </label>
        <input
          type="text"
          id="todos"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.submitButton}>
        Todo hinzufügen
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    color: "#333",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
    boxSizing: "border-box",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "10px",
  },
};

export default TodoForm;
