import React from "react";

const CurrentTag = ({ currentTag }) => {
  return (
    <div className="tags-wrap">
      {currentTag.map((tag, i) => {
        return (
          <span className="tags" key={Date.now() + i}>
            {`#${tag} `}
          </span>
        );
      })}
    </div>
  );
};

export default CurrentTag;
