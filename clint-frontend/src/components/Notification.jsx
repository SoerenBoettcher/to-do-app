const Notification = ({ message, isError }) => {
  if (!message) return null;

  return (
    <div
      style={{
        ...styles.notification,
        ...styles[isError ? "error" : "success"],
      }}
    >
      {message}
    </div>
  );
};

const styles = {
  notification: {
    padding: "15px",
    margin: "15px 0",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  success: {
    backgroundColor: "rgba(76, 175, 80, 0.75)",
  },
  error: {
    backgroundColor: "rgba(244, 67, 54, 0.75)",
  },
};

export default Notification;
