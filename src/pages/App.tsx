import { useState } from "react";
import { Link } from "react-router-dom";
import Main from "./chapter1/Main.tsx";
const App = () => {
 const [hidden, sethidden] = useState(false);
 return (
  <>
   <div id="main-body">
     <Main /> 
   </div>
  </>
 );
};

export default App;
