import {Link} from 'react-router-dom'

const Elementary = () => {
 return (
  <div className="section3">
   <div className="section-3-image"></div>
   <h1>
    Introduction To <span> Elementry Particle </span>
   </h1>

   <div id="s3-main-content">
    <div>
     <h2>
      "Elementary particles are the smallest known building blocks of matter and
      the fundamental constituents of the universe."
     </h2>
     <br />
     <p>
      Elementary particles, the tiniest known building blocks of matter, are
      surprisingly complex. Though dubbed "elementary," they might not be the
      ultimate level, and mysteries abound like antimatter's existence, elusive
      neutrinos, and the missing graviton. Ongoing research through powerful
      experiments like the Large Hadron Collider seeks to uncover new particles
      and forces, while existing knowledge already impacts fields like medicine
      and material science.
     </p>
     <div>
     <button>
       <Link to='/slide/particles'>Next slide</Link>
      </button>
      </div>
    </div>

    <div id="atom-div">
     <div className="atom">
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Elementary;
