import React from 'react'

const Index = ({index, topic}) => {
  return (
    <>
       <div className="content-container" id="child-grid-1">
       <div className="content-index">
       <bold>
       {index}
       </bold>
       </div>
       <h2 className="content-heading">
       <strong>
       {topic}
       </strong>
       </h2>
      </div>
      
    </>
  )
}

export default Index