import React, { useContext } from "react";
import { MyContext } from "../../Context/myContext";

const Details = () => {
  const { formData,lightTheme } = useContext(MyContext);

  const style = lightTheme?"#fff":"#000"
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style = {{
        color:style
      }}>Welcome, {formData.username}!</h2>
      <p style = {{
        color:style
      }}><strong>Email:</strong> {formData.email}</p>
    </div>
  );
};

export default Details;
