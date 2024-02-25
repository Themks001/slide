
import { Link } from "react-router-dom";

const next9 = () => {
 return (
  <div className="next9">
   <h1> Properties of Semiconductor </h1>
   <li>
    Semiconductors act like insulators at zero kelvin. On increasing the
    temperature, they work as conductors.
   </li>
   <li>
    Due to their exceptional electrical properties, semiconductors can be
    modified by doping to make semiconductor devices suitable for energy
    conversion, switches and amplifiers.
   </li>
   <li>Lesser power losses.</li>
   <li>Semiconductors are smaller in size and possess less weight.</li>
   <li>
    Their resistivity is higher than conductors but lesser than insulators
   </li>
   <button>
    <Link to="/slide/next10">Next slide</Link>
   </button>
  </div>
 );
};

export default next9;
