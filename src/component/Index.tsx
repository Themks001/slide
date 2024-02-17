import React from 'react';

interface IndexProps {
  index: number;
  id:string;
  topic: string;
}

const Index: React.FC<IndexProps> = ({ index, topic, id }) => {
  return (
    <>
      <div className="content-container" id="child-grid-1">
        <div className="content-index" id={id}>
          <strong>{index}</strong>
        </div>
        <h2 className="content-heading">
          <strong>{topic}</strong>
        </h2>
      </div>
    </>
  );
};

export default Index;
