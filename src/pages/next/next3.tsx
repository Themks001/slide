import { Link } from 'react-router-dom'
const next3 = () => {
 return (
  <div className="next3">
   <h1>Holes and Electrons</h1>
   <div>
    <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0o9nTfDKFcg_iEep-5vBQ2yvkhDvuEvmZrQ&usqp=CAU"
     alt=""
    />
   </div>
   <p>
    Holes and electrons are the types of charge carries accountable for the flow
    of current in semiconductors. Holes(valence electrons) are the positively
    charged electric charge carrier, whereas electrons are the negatively
    charged particles. Both electrons and holes are equal in magnitude but
    opposite in polarity.
   </p>
   <div className="button-div">
    <button>
     <Link to="/slide/next4">Next page</Link>
    </button>
   </div>
  </div>
 );
};

export default next3;
