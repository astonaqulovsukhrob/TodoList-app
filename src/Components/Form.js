import React from "react";

function Form({ name, setName, list, setList, showAlert, edit, isEdit, setEdit }) {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      showAlert("Please Enter Something", "warning");
    } else if (name && edit) {
      setList(
        list.map((item) => {
          if (item.id == isEdit) {
            return {...item, title:name}
          }
          return item
        })
        
        );
      setName("")
      setEdit(false)
    } else {
      const newItem = {
        id: Math.random(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      console.log(list);
    }
  };

  return (
    <>
      <h1>Todo app</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control main-form"
            onChange={handleChange}
            autoComplete="off"
            value={name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {edit ? "Edit" : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Form;
