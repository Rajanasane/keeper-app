import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();

    if (note.title.trim() === "" || note.content.trim() === "") {
      alert("Both title and content are required.");
      return;
    }

    props.onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form className="mb-4" onSubmit={submitNote}>
      <div className="mb-3">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          rows="3"
          className="form-control"
          placeholder="Take a note..."
        />
      </div>
      <button type="submit" className="btn btn-warning">Add</button>
    </form>
  );
}

export default CreateArea;
