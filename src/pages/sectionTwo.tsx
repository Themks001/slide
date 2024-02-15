import { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'
const sectionTwo = () => {
 const comp = useRef(null)
 
 useLayoutEffect(() => {
   const ctx = gsap.context(()=>{
    const t1 = gsap.timeline()
    t1.from(['#child-grid-2', '#child-grid-4', "#child-grid-6"], {xPercent: '200', duration:.4, stagger:.3})
    t1.from(['#child-grid-1', '#child-grid-3', "#child-grid-5"], {xPercent: '-200', duration:.4, stagger:.3})
   
   }, comp)
 
   return () => {
     ctx.revert()
   };
 }, [])
 
 
  return (
    <div className='section-2' ref={comp}>
    <h1>Table Of Content</h1>
    <section>
    <br/>
    <div className="content-grid" >
    <div className="content-container" id='child-grid-1'>
    <div className="content-index">01</div>
    <h2 className="content-heading">Elementry Particle</h2>
    </div>
    <div className="content-container" id='child-grid-2'>
    <div className="content-index">02</div>
    <h2 className="content-heading">Particle and antiparticle</h2>
    </div>
    <div className="content-container" id='child-grid-3'>
    <div className="content-index">03</div>
    <h2 className="content-heading">Classification of Elementry Particle</h2>
    </div>
    <div className="content-container" id='child-grid-4'>
    <div className="content-index">04</div>
    <h2 className="content-heading">Fundamental Interactions</h2>
    </div>
    <div className="content-container" id='child-grid-5'>
    <div className="content-index">05</div>
    <h2 className="content-heading">Leptons</h2>
    </div>
    <div className="content-container" id='child-grid-6'>
    <div className="content-index">06</div>
    <h2 className="content-heading">Hadrons</h2>
    </div>
    <div className="content-container" id='child-grid-6'>
    <div className="content-index">06</div>
    <h2 className="content-heading">Quarks</h2>
    </div>
    <div className="content-container" id='child-grid-7'>
    <div className="content-index">07</div>
    <h2 className="content-heading">Universe</h2>
    </div>
    </div>
    <div className='next-div'>
    <Link to='/physic/elementryPerticle'>
    <button className='next-button'>Next Slide</button>
    </Link>
    </div>
    </section>
    </div>
  )
}

export default sectionTwo