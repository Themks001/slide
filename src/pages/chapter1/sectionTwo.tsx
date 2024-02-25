import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Index from '../../component/Index.tsx'
const sectionTwo = () => {
 const contents = ['Elementry Particle', 'Particle and Anti-Particle', 'Classificaton Of Elementry Particles', 'Fundamental Interaction', 'Leptons', 'Hadrons','Quarks', 'Universe' ]
 const comp = useRef(null);

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
   const t1 = gsap.timeline();
   t1.from(["#child-grid-2", "#child-grid-4", "#child-grid-6"], {
    xPercent: "400",
    duration: 0.4,
    stagger: 0.1
   });
   t1.from(["#child-grid-1", "#child-grid-3", "#child-grid-5"], {
    xPercent: "-400",
    duration: 0.4,
    stagger: 0.1
   });
  }, comp);

  return () => {
   ctx.revert();
  };
 }, []);

 return (
  <div className="section-2" ref={comp}>
   <h1>Table Of Content</h1>
   <section>
    <br />
    <div className='main'>
     <div className="content-grid">
{
  contents.map((items, index) => {
    return <Index key={index} index={index} topic={items} id={`chlid-grid-${index}`} />;
  })
}

     </div>
     <div>
      <Link to="/slide/elementryParticles">
       <button>Next        
       <i
          className="fa-solid fa-arrow-right"
          style={{ margin: "0 10px" }}
         ></i></button>
      </Link>
     </div>
    </div>
   </section>
  </div>
 );
};

export default sectionTwo;
