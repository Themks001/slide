import SectionOne from "./sectionOne.tsx";
import SectionTwo from "./sectionTwo.tsx";
import Elementary from "./Elementary.tsx";
import Particle from "./Particles.tsx";
import Classification from "./Classificaton.tsx";
import Fundamental from "./Fundamental.tsx";
import Universe from "./universe.tsx";
import Intro from "./next/intro.tsx";
import NextTwo from "./next/next2.tsx";
import NextThree from "./next/next3.tsx";
import NextFive from "./next/next5.tsx";
import NextSix from "./next/next6.tsx";
import NextFour from "./next/inext4.tsx";
import { Route, Routes } from "react-router-dom";
const App = () => {
 return (
  <div>
   <Routes>
    <Route path="/slide/" element={<SectionOne />} />
    <Route path="/slide/elementryParticles" element={<Elementary />} />
    <Route path="/slide/section2" element={<SectionTwo />} />
    <Route path="/slide/particles" element={<Particle />} />
    <Route path="/slide/fundamental" element={<Fundamental />} />
    <Route path="/slide/universe" element={<Universe />} />
    <Route path="/slide/classification" element={<Classification />} />
    <Route path="/slide/next" element={<Intro />} />
    <Route path="/slide/next2" element={<NextTwo />} />
    <Route path="/slide/next3" element={<NextThree />} />
    <Route path="/slide/next4" element={<NextFour />} />
    <Route path="/slide/next5" element={<NextFive />} />
    <Route path="/slide/next6" element={<NextSix />} />
   </Routes>
   <div className="slider-div">
    <span>
     <i className="fa-solid fa-arrow-left"></i>
    </span>
    <span>
     <i className="fa-solid fa-arrow-right"></i>
    </span>
   </div>
  </div>
 );
};

export default App;
