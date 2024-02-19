import { Link } from "react-router-dom";
import Svg from './imges/SVG.tsx'
const sectionOneMain = () => {
 return (
  <>
   <div id="main-page">
    <div className="chapters">
     <div>
      <h1 id="heading">
       {" "}
       Some recent <span>Discoveries </span>that
       <br />
       were made in <span className='physic'>physic</span>
       <br />
       in the <span>recent years</span>
      </h1>
      <p id="para1">
       In recent years, physics has witnessed dynamic advancements, shaping our
      </p>
      <p id="para1">
      </p>
      <p id="para2">
       understanding of the fundamental laws governing the universe. 
      </p>
      <p id="para3">
       From breakthroughs in quantum computing to explorations in dark matter and
      </p>
      <p id="para4">
       energy, this introduction delves into the captivating and rapidly
      </p>
      <p id="para5">
       evolving landscape of recent trends in physics.
      </p>
      <div className="lower-div">
       <Link to="/slide/section2">
        <button id="button"> Next <i className="fa-solid fa-arrow-right" style={{margin: '0 10px'}}></i></button>
       </Link>
      </div>
     </div>
    </div>
    <div className="image-div">
    <Svg/>
    </div>
   </div>
  </>
 );
};

export default sectionOneMain;
