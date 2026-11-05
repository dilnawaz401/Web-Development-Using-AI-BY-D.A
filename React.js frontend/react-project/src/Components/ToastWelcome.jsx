import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastWelcome = () => {
  const handleClick = () => {
    toast.success("Welcome To React Project", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.emoji}>🚀</h1>
        <h2 style={styles.title}>React Toastify Demo</h2>
        <p style={styles.subtitle}>
          Click the button below to see a beautiful notification.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          onClick={handleClick}
        >
          Show Welcome Message
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "16px",
    margin: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    padding: "40px 50px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    fontFamily: "Segoe UI, sans-serif",
  },
  emoji: { fontSize: "48px", margin: "0 0 10px" },
  title: { margin: "0 0 8px", fontSize: "26px" },
  subtitle: { margin: "0 0 24px", opacity: 0.9, fontSize: "15px" },
  button: {
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#764ba2",
    background: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
};

export default ToastWelcome;
