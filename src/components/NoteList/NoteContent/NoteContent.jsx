import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import "./NoteContent.scss";

const NoteContent = ({ currentNote, setCurrentNote }) => {
  const text = useRef("");
  text.current = currentNote?.value1 || " ";

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, value: e.currentTarget.innerText });
    console.log(1);
  };

  return (
    <div className="content-wrap">
      <ContentEditable
        className="content"
        html={text.current}
        onChange={handleChange}
      />
    </div>
  );
};
export default NoteContent;
