
import { Link } from 'react-router-dom'
const intro = () => {
 return (
  <>
   <section className="next">
    <h1>Introduction</h1>
    <h1>
     {" "}
     <i className="fa-solid fa-arrow-right"></i> What Are{" "}
     <span>Semiconductor</span>
    </h1>
    <p>
     {" "}
     <span>Semiconductors</span> are materials which have a conductivity between conductors
     and non-conductors or insulators. Semiconductors can be compounds, such as
     gallium arsenide or pure elements, such as <span>germanium</span> or <span>silicon</span>.
    </p>
    <div className="button-div">
    <button>
      <Link to='/slide/next2'>Next page</Link>
     </button></div>
   </section>
  </>
 );
};

export default intro;
