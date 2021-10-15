import React from "react";
import "./TagList.scss";

const TagList = ({ tags, toggleTag, activeTag }) => {
  return (
    <div className="tag-list">
      <ul>
        {tags.map((tag) => {
          return (
            <li
              key={tag}
              active={
                activeTag.value === tag && activeTag.selected === true
                  ? "false"
                  : "true"
              }
              onClick={() => {
                toggleTag(tag);
              }}
            >{`#${tag}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagList;
