import { Link } from "react-router-dom";
const sectionOneMain = () => {
 

 return (
  <>
   <div id="main-page">
    <div className="chapters">
     <div>
      <h1 id="heading">
       {" "}
       Some recent Discoveries that
       <br />
       were made in physic
       <br />
       in the recent years
      </h1>
      <p id='para'>
       In recent years, physics has witnessed dynamic advancements, shaping our
       understanding of the fundamental laws governing the universe. From
       breakthroughs in quantum computing to explorations in dark matter and
       energy, this introduction delves into the captivating and rapidly
       evolving landscape of recent trends in physics.
      </p>
      <div className="lower-div">
        <Link to="/physic/section2">
       <button id='button'>
        Get Started
       </button>
        </Link>
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
   <div className="image-section">
    <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWOE7CkK20RQvdLiDqtU5t1Ym0QeQ8jPATw&usqp=CAU"
     alt=""
    />
    <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNY1HfZwtMO9tEVcw8FVnDSu58mFtsAz5uA&usqp=CAU"
     alt=""
    />
    <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_G1FCbp785-Y5vLGMPrj_EeV94HQNCqz_Q&usqp=CAU"
     alt=""
    />
   </div>
  </>
 );
};

export default sectionOneMain;
