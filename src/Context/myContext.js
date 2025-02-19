import { Children, createContext, useState } from "react";

export const MyContext = createContext();

export const ThemeProvider = ()=>{
    const [lightTheme,setLightTheme] = useState(true);


    const handleTheme = () => {
        setLightTheme((prev) => !prev);
      };

      return (
        <MyContext.Provider value = {{lightTheme,handleTheme}}>
            {Children}
        </MyContext.Provider>
      )
}