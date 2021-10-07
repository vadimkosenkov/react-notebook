import React, { useRef, useEffect } from "react";
import ContentEditable from "react-contenteditable";

const NoteContent = ({ currentNote, setCurrentNote }) => {
  //   const divRef = useRef();
  //   useEffect(() => {
  //     if (currentNote?.id && text.current) {
  //       divRef.current.focus();
  //     }
  //   });

  const text = useRef("");
  text.current = currentNote?.value1 || "";

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, value: e.currentTarget.innerText });
  };

  return (
    <div className="content-wrap">
      <ContentEditable
        className="content"
        html={text.current}
        onChange={handleChange}
        // innerRef={divRef}
      />
    </div>
  );
};
export default NoteContent;
