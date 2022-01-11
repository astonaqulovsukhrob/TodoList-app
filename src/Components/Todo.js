import React from "react";
import TodoList from "./TodoList";

function Todo({ list, setList, setName, setEdit, setidEdit, showAlert }) {
  const handleTrash = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert('Delete List', 'danger');
  };

  const editItem = (id) => {
    setEdit(true);
    setidEdit(id);
    setName(list.find((item) => item.id === id).title);
    showAlert("Edit List", "warning");
  };
  return (
    <div className="list-item">
      {list.map((alist) => {
        return (
          <TodoList
            key={alist.id}
            alist={alist}
            setList={setList}
            list={list}
            editItem={editItem}
            handleTrash={handleTrash}
          />
        );
      })}
    </div>
  );
}

export default Todo;
