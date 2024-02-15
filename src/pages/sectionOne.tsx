import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionTwo from "./sectionTwo.tsx";
import gsap from "gsap";
function SectionOne() {
 
 const comp = useRef(null);
 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   let t1 = gsap.timeline();
   t1
    .from("#intro-1", { xPercent: "-100", duration: 1, delay: 0 })
    .from(["#title-1", "#title-2", "#title-3"], {
     opacity: 0,
     stagger: 0.6,
     y: "+=300"
    })
    .to(["#title-1", "#title-2", "#title-3"], {
     opacity: 0,
     stagger: 0.6,
     y: "-=300"
    })
    .to("#intro-1", { xPercent: "-100", duration: 1 })
    .from("#intro-2", { xPercent: "-100", duration: 0.1 })
    .from(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: 0.8,
     y: "+=300"
    })
    .to(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: 0.8,
     y: "-=300"
    })
    .to("#intro-2", { xPercent: "-100", duration: 1, delay: 0 })
    .from("#homepage", { opacity: 0, duration: 1 });
  }, comp);

  return () => ctx.revert();
 }, []);

 return (
  <>
   <div className="main-div" ref={comp}>
    <div className="intro-top" id="intro-1">
     <div>
      <h1 className="intro-text" id="title-1">
       Presentation
      </h1>
      <h1 className="intro-text" id="title-2">
       Of
      </h1>
      <h1 className="intro-text" id="title-3">
       Physic
      </h1>
     </div>
    </div>

    <div className="intro-top" id="intro-2">
     <div>
      <h1 className="intro-text" id="title-4">
       Made by
      </h1>
      <h1 className="intro-text" id="title-5">
       Manish Kumar Shah
       <br />&
      </h1>
      <h1 className="intro-text" id="title-6">
       Presna Shrestha
      </h1>
     </div>
    </div>
    <div className="homepage-div" id="homepage">
     <div id="main-page">
      <div className="chapters">
       <div>
        <h1>
         {" "}
         Some recent Discoveries that
         <br />
         were made in physic
         <br />
         in the recent years
        </h1>
        <p>
         In recent years, physics has witnessed dynamic advancements, shaping
         our understanding of the fundamental laws governing the universe. From
         breakthroughs in quantum computing to explorations in dark matter and
         energy, this introduction delves into the captivating and rapidly
         evolving landscape of recent trends in physics.
        </p>
        <div className="lower-div">
         <button>
          <Link to="/physic/section2">Get Started</Link>
         </button>
  
        </div>
       </div>
      </div>
        <div className="image-div">
         <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Yicr_kyPxeiOwcVDjy5seg.jpeg"
          alt=""
         />
        </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default SectionOne;
