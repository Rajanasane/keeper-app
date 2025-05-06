import React from "react";

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="card m-3 shadow-sm" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <button onClick={handleClick} className="btn btn-sm btn-danger float-end">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
