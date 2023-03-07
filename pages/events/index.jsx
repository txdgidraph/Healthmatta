import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

const EVENTS = (users) => {
  const [imageUrl, setImageUrl] = useState("");
  const [query, setQuery] = useState({
    event_Name: "",
    event_Description: "",
  });
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleEventNameChange = (e) => {
    e.preventDefault();
    const name = "event_Name";
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventDescriptionChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    console.log(" ===> ", query.event_Name);
  };

  async function handleProfileImageUpload(e) {
    console.log("uploading file");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    // Check that file is in proper format before making request

    await fetch(`/api/image/posterImgUpload`, {
      method: "POST",
      body: formData,
      "Content-Type": "image/jpg",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
      });
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1>Hello Hello Hello</h1>
      <h1>Hello Hello Hello</h1>
      <input name="event-name" onChange={handleEventNameChange} />
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
      <br />
      <button onClick={handleButtonClick}>Click Me Please!</button>
      <br />
      <label htmlFor="file-upload">
        <div>
          {/* <img src={profileImage} className="" /> */}
          <div id="dashboard-image-hover">Upload Image</div>
        </div>
      </label>
      <input id="file-upload" type="file" onChange={handleProfileImageUpload} />
      <br />
      <br />
    </div>
  );
};

export default EVENTS;
