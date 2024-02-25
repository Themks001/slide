
import {Link } from 'react-router-dom'
const next8 = () => {
 return (
  <div className="next8">
   <h1>
    Difference Between Intrinsic Semiconductor and Extrinsic Semiconductor
   </h1>

   <div>
    <div>
     <div>Intrinsic Semiconductor</div>
     <div>Extrinsic Semiconductor</div>
    </div>
    <div>
     <div>No impurities</div>
     <div>Impure Semiconductor</div>
    </div>
    <div>
     <div>The density of electrons is equal to the density of holes</div>
     <div>The density of electrons is not equal to the density of holes</div>
    </div>
    <div>
     <div>Electrical conductivity is low </div>
     <div>Electrical conductivity is high</div>
    </div>
    <div>
     <div>Dependence on temperature only</div>
     <div>Depends on temperature, as well as on the amount of impurity</div>
    </div>
    <div>
     <div>No impurities</div>
     <div>Trivalent impurity and pentavalent impurity</div>
    </div>
   </div>
   <button>
    <Link to='/slide/next9'>Next slide</Link>
   </button>
  </div>
 );
};

export default next8;
