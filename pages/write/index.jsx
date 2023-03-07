import Head from "next/head";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const WritePage = () => {
  const editorRef = useRef();
  function handleClick(){
    console.log(editorRef.current.getContent())
  }
  return (
    <div>
      <Head></Head>

      <div className="write-conainer">
        <Editor onInit={(evt, editor) => (editorRef.current = editor)} />
      </div>
      <button onClick={handleClick}>Publish</button>
    </div>
  );
};

export default WritePage;
