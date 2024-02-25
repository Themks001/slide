import { useLayoutEffect, useRef } from "react";
import SectionOneMain from "./sectionOneMain.tsx";
import gsap from "gsap";
function SectionOne() {
 const staggerValue = 0.002;
 const durationValue = 0.001;
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
     y: "-=300",
     delay: 0.6
    })
    .to("#intro-1", { xPercent: "-100", duration: durationValue })
    .from("#intro-2", { xPercent: "-100", duration: durationValue })
    .from(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: staggerValue,
     y: "+=300"
    })
    .to(["#title-4", "#title-5", "#title-6"], {
     opacity: 0,
     stagger: staggerValue,
     y: "-=300",
     duration: durationValue,
     delay: 0.6
    })
    .to("#intro-2", { xPercent: "-100", duration: durationValue, delay: 0.6 })
    .from("#homepage", { opacity: 0, duration: durationValue })
    .from("#heading", {
     xPercent: "100",
     opacity: 0.1,
     duration: durationValue
    })
    .from("#para1", { xPercent: "-100", opacity: 0.1, duration: durationValue })
    .from("#para2", { xPercent: "100", opacity: 0.1, duration: durationValue })
    .from("#para3", { xPercent: "-100", opacity: 0.1, duration: durationValue })
    .from("#para4", { xPercent: "100", opacity: 0.1, duration: durationValue })
    .from("#para5", { xPercent: "-100", opacity: 0.1, duration: durationValue })
    .from("#button", { scale: 0, duration: durationValue });
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
       Presana Shrestha
      </h1>
     </div>
    </div>
    <div className="homepage-div" id="homepage">
     <SectionOneMain />
    </div>
   </div>
  </>
 );
}

export default SectionOne;
