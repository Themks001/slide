import { Link } from "react-router-dom";
import "../../style/universe.css";
const universe = () => {
 return (
  <>
   <div className="main-universe">
    <div className="sun">
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
     <div className="earth"></div>
    </div>
   </div>
   <button>
    <Link to="/slide/next">Next Chapter</Link>
   </button>
  </>
 );
};

export default universe;
