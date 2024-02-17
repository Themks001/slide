import React from 'react';

interface IndexProps {
  index: number;
  topic: string;
}

const Index: React.FC<IndexProps> = ({ index, topic }) => {
  return (
    <>
      <div className="content-container" id="child-grid-1">
        <div className="content-index">
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
