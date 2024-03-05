import { Link } from "react-router-dom";
import "../../style/universe.css";
const universe = () => {
 return (
  <>
   <div class="main-universe">
    <div class="sun">
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
     <div class="earth"></div>
    </div>
   </div>
   <button>
    <Link to="/slide/next">Next Chapter</Link>
   </button>
  </>
 );
};

export default universe;
