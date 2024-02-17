import { useState } from "react";
import {Link} from 'react-router-dom'
const Fundamental = () => {
 const indexList = [
  '#index1',
  '#index2',
  '#index3',
  '#index4',
 ]
 const [index, setindex] = useState(0)
 const currentSelected = indexList[index]
 if(index==3){
  setindex(0)
 }
 return (
  <>
   <section className="fundamental">
   
     <div id='index1'>
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsy5fvCRV9ocZr90BuuJ1NHa1r1WqgZeCtg&usqp=CAU"
       alt=""
      />
      <h1>Gravitational Interaction</h1>
      <p>
       The invisible hand of the universe, gravity, reigns supreme through all
       scales. This fundamental interaction, described by Newton's law, pulls
       objects together with a force proportional to their mass and inversely
       proportional to the squared distance between them. secrets.
      </p>
     </div>
     <div  id='index2'>
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2zafawwQH_OMfpH0ehegpOR3O1h-UlaiTQ&usqp=CAU"
       alt=""
      />
      <h1>Weak Interaction</h1>
      <p>
       The weak interaction, one of nature's fundamental forces, holds sway over
       the subatomic world. While subtle in everyday life, it's a powerhouse in
       stars, fueling fusion that creates most elements. It governs radioactive
       decay, transforming particles and shaping Earth's interior. identities.
      </p>
     </div>
     <div  id='index3'>
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE0DoWkqYZwW2cegB6N9c_TToelSdO-njmQ&usqp=CAU"
       alt=""
      />
      <h1>Electromagnetic Interaction</h1>
      <p>
       The electromagnetic interaction, the maestro of the visible world, reigns
       over electrically charged particles. It orchestrates their attraction and
       repulsion through electric and magnetic forces, both intertwined like
       lovers in a dance. Light itself, a vibrant symphony of colors, is merely
       the electromagnetic field in motion, carrying energy across vast
       distances.
      </p>
     </div>
     <div  id='index4'>
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjT2GquByuJVCs2qI3_a6ysZXK2EJb72DEw&usqp=CAU"
       alt=""
      />
      <h1>Strong Interaction</h1>
      <p>
       The strong interaction, nature's heavyweight champion, reigns over the
       atomic nucleus. This mighty force binds tiny quarks, the fundamental
       building blocks of protons and neutrons, together with incredible
       strength. While short-range, its grasp exceeds gravity and
       electromagnetism, ensuring nuclear stability.
      </p>
     </div>
  
   </section>
   <div className='next-button'>
     <button onClick={()=>setindex(index+1)} className='button'>
    <Link to='/slide/universe'>Next page</Link>
   </button>
   <button onClick={()=>setindex(index+1)} className='button'>
    <a href={currentSelected}>Next slide</a>
   </button>
   </div>
   <div>
 
   </div>
  </>
 );
};

export default Fundamental;
