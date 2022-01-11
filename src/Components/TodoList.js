import React from "react";

function TodoList({ alist, handleTrash, editItem }) {
  const check = () => {
    document.querySelector(".title").classList.toggle("active");
  };

  return (
    <div>
      <div className="text-list mt-4">
        <p className="title">{alist.title}</p>
        <div>
          <button className="check" onClick={check}>
            <i class="bi bi-check"></i>
          </button>
          <button className="square" onClick={() => editItem(alist.id)}>
            <i class="bi bi-pencil-square"></i>
          </button>
          <button className="trash" onClick={() => handleTrash(alist.id)}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
