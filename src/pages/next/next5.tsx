import { Link } from 'react-router-dom'
const next5 = () => {
 return (
  <div className='next5'>
   <h1>Band Theory</h1>
   <p>
    The electrons in an atom are present at different energy levels. When we try
    to assemble a lattice of a solid with N atoms, each level of an atom must
    split into N levels in the solid. This splitting of sharp and tightly packed
    energy levels forms Energy Bands. The gap between adjacent bands
    representing a range of energies that possess no electron is called Band
    gap.
   </p>
   <div className="buton-div"><button>
     <Link to='/slide/next6'>Next Page</Link>
    </button></div>
  </div>
 );
};

export default next5;
