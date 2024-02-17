import { Link } from 'react-router-dom'
const next2 = () => {
 return (
  <div className="next2">
   <ul>
    <li>
     <h1>Table of content</h1>
     <ul>
      <li>
       {" "}
       <i className="fa-solid fa-arrow-right"></i> Holes and Electrons
      </li>
      <li>
       {" "}
       <i className="fa-solid fa-arrow-right"></i> Band TheoryProperties of
       Semiconductors
      </li>
      <li>
       {" "}
       <i className="fa-solid fa-arrow-right"></i> Types of Semiconductors
      </li>
      <li>
       {" "}
       <i className="fa-solid fa-arrow-right"></i> Intrinsic Semiconductor{" "}
      </li>
      <li>
       {" "}
       <i className="fa-solid fa-arrow-right"></i> Extrinsic Semiconductor
      </li>
     </ul>
    </li>
   </ul>
   <div className="button-div">
    <button>
     <Link to="/slide/next3">Next page</Link>
    </button>
   </div>
  </div>
 );
};

export default next2;
