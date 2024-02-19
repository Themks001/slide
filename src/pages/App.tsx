import {useState} from 'react'
import { Link } from 'react-router-dom'
import { change } from "../context.tsx";
import Main from './chapter1/Main.tsx'
const App = () => {
 const [hidden, sethidden] = useState(false)
  return (
   <>
    <div id='main-body'>
    <Main />
   {change ? (
    ""
   ) : (
    <div>
     <Link to='/slide'>
      <button>&larr;</button>
     </Link>
     <Link to='/slide'>
      <button>&rarr;</button>
     </Link>
    </div>
   )}
    </div>
     
    </>
  )
}

export default App