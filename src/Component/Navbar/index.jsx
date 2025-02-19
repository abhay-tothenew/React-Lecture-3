import React from "react";
import { useContext } from "react";
import { MyContext } from "../../Context/myContext";

const Navbar = () => {
  const { lightTheme, setLightTheme, handleTheme, isLogined, handleLogin } =
    useContext(MyContext);
  //   const styleBG = lightTheme === true ? "#000" : "#fff";
  //   const navBG = lightTheme === true ? "#B9B28A" : "#FFDFEF";

  return (
    <div
      style={{
        backgroundColor: lightTheme ? "#000" : "#FFDFEF",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleTheme}
        style={{
          backgroundColor: lightTheme ? "#FFDFEF" : "#000",
          color: lightTheme ? "#000" : "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {lightTheme === true ? "Light Theme" : "Dark Theme"}
      </button>

      {isLogined ? (
        <button
          style={{
            color: "red",
          }}
          onClick={handleLogin}
        >
          LOGOUT
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
