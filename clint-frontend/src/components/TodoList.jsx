import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Ihre Todos</h2>
      {todos.length === 0 ? (
        <p style={styles.emptyText}>Keine Todos vorhanden.</p>
      ) : (
        <ul style={styles.list}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
    marginTop: "20px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  },
  emptyText: {
    color: "#666",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
};

export default TodoList;
