import React, { useState, useContext } from "react";
import { MyContext } from "../../Context/myContext";

const Login = () => {
  const { lightTheme, handleLogin, formData, setFormData } =
    useContext(MyContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "" || formData.email === "") {
      alert("Please fill in all details!");
    } else {
      handleLogin();
    }
  };

  const styleBG = lightTheme ? "#FFEFC8" : "#3F4F44";

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    form: {
      background: styleBG,
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: lightTheme ? "#000" : "#FFDFEF",
      }}
    >
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: "10px",
            width: "100%",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
