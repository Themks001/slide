import {useState } from "react";
import {Link} from 'react-router-dom'
const Classificaton = () => {
 const [elementary, setelementry] = useState(false);
 const [lepton, setlepton] = useState(false)
 const [meson, setmeson] = useState(false)
 const [bayons, setbayons] = useState(false)
 return (
  <>
   <h1 className='headig-class'>Classificaton Of Elementry Particle</h1>
   <div className="classification">
    <ul>
     <li>
      <h2
       onClick={() => {
        setelementry(p => !p);
       }}
      >
       Elementary Particles
      </h2>
      {elementary ? (
       <ul>
        <li>
         <h2 onClick={()=>setlepton(p=>!p)}>Leptons</h2>
         {lepton?
         <ul>
          <li>electrons</li>
          <li>electron neutrino</li>
          <li>muon</li>
          <li>muon neutrino</li>
          <li>tau</li>
          <li>tau neutrino</li>
         </ul>:''
         }
        </li>
        <li>
         <h2 onClick={()=>setmeson(p=>!p)}>Mesons </h2>
         {meson?
         <ul>
          <li>eta</li>
          <li>πmeson</li>
          <li>k Mesons</li>
         </ul>:''
         }
        </li>
        <li>
         <h2 onClick={()=>setbayons(p=>!p)}>Baryons</h2>
         {bayons?
         <ul>
          <li>Nucleons</li>
          <li>Hyperons</li>
         </ul>:''
         }
        </li>
       </ul>
      ) : (
       ""
      )}
     </li>
    </ul>
   </div>
   <div className="">
   <button>
    <Link to='/slide/fundamental'>Next page</Link>
   </button>
   </div>
  </>
 );
};

export default Classificaton;
