import Home from "./Main";
import Details from "./Component/Details";
import { Route, Routes } from "react-router-dom";

function App(){
  return (
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/home" element = {<Details/>}/>
    </Routes>
  )

}

export default App;