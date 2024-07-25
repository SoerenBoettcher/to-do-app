import { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDay, setUpdatedDay] = useState(todo.day);
  const [updatedTodos, setUpdatedTodos] = useState(todo.todos.join(", "));

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(todo.id, { day: updatedDay, todos: updatedTodos.split(", ") });
    setIsEditing(false);
  };

  return (
    <li style={styles.item}>
      {isEditing ? (
        <div style={styles.editContainer}>
          <input
            type="text"
            value={updatedDay}
            onChange={(e) => setUpdatedDay(e.target.value)}
            style={styles.input}
          />
          <textarea
            value={updatedTodos}
            onChange={(e) => setUpdatedTodos(e.target.value)}
            style={styles.textarea}
          />
          <button onClick={handleSave} style={styles.saveButton}>
            Speichern
          </button>
        </div>
      ) : (
        <div style={styles.content}>
          <span style={styles.day}>{todo.day}:</span>
          <ul style={styles.todos}>
            {todo.todos.map((task, index) => (
              <li key={index} style={styles.todo}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div style={styles.buttons}>
        <button onClick={() => onDelete(todo.id)} style={styles.deleteButton}>
          Löschen
        </button>
        <button onClick={handleEdit} style={styles.editButton}>
          {isEditing ? "Abbrechen" : "Bearbeiten"}
        </button>
      </div>
    </li>
  );
};

const styles = {
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "15px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 16px rgba(31, 38, 135, 0.37)",
    marginBottom: "15px",
  },
  content: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  day: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },
  todos: {
    listStyleType: "circle",
    paddingLeft: "20px",
    color: "#555",
  },
  todo: {
    marginBottom: "5px",
    lineHeight: "1.5",
  },
  editContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
    boxSizing: "border-box",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#4d79ff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default TodoItem;
