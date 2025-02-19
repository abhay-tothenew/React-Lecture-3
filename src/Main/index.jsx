import React, { useState } from "react";
import { MyContext } from "../Context/myContext";
import Navbar from "../Component/Navbar";
import Login from "../Component/Login";
import Details from "../Component/Details";

const Home = () => {
  const [lightTheme, setLightTheme] = useState(true);
  const [isLogined,setIsLogined]  = useState(false);
   const [formData, setFormData] = useState({
      username: "exam",
      email: "exam@gmail.com",
    });

  const styleBG = lightTheme === true ? "#000" : "#fff";
  const handleTheme = () => {
    setLightTheme((prev) => !prev);
  };


  const handleLogin = ()=>{
    setIsLogined((prev)=> !prev);
  }

  const user_name = formData.username;
  const user_email = formData.email;

  return (
    <div
      style={{
        backgroundColor: styleBG,
        height: "100vh",
        width:"100%"
      }}
    >
      <MyContext.Provider
        value={{ lightTheme, setLightTheme, handleTheme, styleBG, isLogined, handleLogin,formData, user_name, user_email, setFormData }}
      >
        <Navbar />
        {!isLogined?<Login/>:<Details/>}
      </MyContext.Provider>
    </div>
  );
};

export default Home;
