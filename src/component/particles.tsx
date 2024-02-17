import React, { useState } from "react";
interface ParticleProps {
 description: string;
 description2: string;
 title: string;
}

const particles: React.FC<ParticleProps> = ({
 description,
 heading,
 description2
}) => {
 const [shown, setshown] = useState(false);
 return (
  <>
   <div className="partice-div">
    <h1 className="particle-heading">{heading}</h1>
    <p className="particle-description">{description}</p>
    {
     shown?
    <p className="particle-description">{description2}</p>
    : ''
    }
    {shown ? (
     <button className="button" onClick={()=>{setshown(false)}}>Show Less</button>
    ) : (
     <button className="button" onClick={()=>{setshown(true)}}>show more</button>
    )}
   </div>
  </>
 );
};

export default particles;
