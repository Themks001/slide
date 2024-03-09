import { Link } from "react-router-dom";
import "../../style/universe.css";
const universe = () => {
 return (
  <>
   <button>
    <Link to="/slide/next">Next Chapter</Link>
   </button>
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

  </>
 );
};

export default universe;
