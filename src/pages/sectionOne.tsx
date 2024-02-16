import { useLayoutEffect, useRef } from "react";

import SectionOneMain from './sectionOneMain.tsx'
import gsap from "gsap";
function SectionOne() {
 const staggerValue = 0.5
 const durationValue = 1
 const comp = useRef(null);
 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   let t1 = gsap.timeline();
   t1
    .from("#intro-1", { xPercent: "-100", duration: durationValue, delay: 0 })
    .from(["#title-1", "#title-2", "#title-3"], {
     opacity: 0,
     stagger: staggerValue,
     y: "+=300"
    })
    .to(["#title-1", "#title-2", "#title-3"], {
     opacity: 0,
     stagger: staggerValue,
     y: "-=300"
    })
    .to("#intro-1", { xPercent: "-100", duration: durationValue })
    .from("#intro-2", { xPercent: "-100", duration: durationValue })
    .from(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: 0.4,
     y: "+=300"
    })
    .to(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: staggerValue,
     y: "-=300",
     duration:durationValue
    })
    .to("#intro-2", { xPercent: "-100", duration: durationValue, delay: 0 })
    .from("#homepage", { opacity: 0, duration: durationValue })
    .from("#heading", {xPercent:"100", opacity:.1, duration:durationValue})
    .from("#para", {xPercent:"-100", opacity:.1, duration:durationValue})
    .from("#button", { opacity:.1, scale:0, duration:durationValue})
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
 <SectionOneMain/>
   </div>
   </div>
  </>
 );
}

export default SectionOne;
