import React, { useEffect, useState } from "react";
import "./NoteContent.scss";

const NoteContent = ({ currentNote, setSaveContent, setCheckDisabledSave }) => {
  const [current, setCurrent] = useState({});
  useEffect(() => {
    setCurrent({ ...currentNote });
  }, [currentNote]);

  const handleFocus = (e) => {
    setCurrent({ ...currentNote, value1: e.target.innerText });
  };

  const handleChange = (e) => {
    setSaveContent({ ...currentNote, value: e.currentTarget.innerText });
    setCheckDisabledSave(false);
  };

  const tmpHTML = () => {
    if (currentNote?.value1 !== current?.value1) {
      return current?.value1;
    } else {
      return currentNote?.value1;
    }
  };

  const createHTML = () => {
    return { __html: tmpHTML() };
  };

  return (
    <div className="content-wrap">
      <div
        className="content"
        contentEditable="true"
        onInput={handleChange}
        onFocus={handleFocus}
        dangerouslySetInnerHTML={createHTML()}
      ></div>
    </div>
  );
};
export default NoteContent;
