import React, { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Form from "./Components/Form";
import Todo from "./Components/Todo";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isEdit, setidEdit] = useState(null);

  const showAlert = (massege, classType) => {
    setAlert({ massege: massege, classType: classType });
    setTimeout(() => {
      setAlert("");
    }, 2500);
  };

  return (
    <div className="Todo-app">
      <Alert alert={alert} />
      <Form
        name={name}
        setName={setName}
        list={list}
        setList={setList}
        showAlert={showAlert}
        edit={edit}
        isEdit={isEdit}
        setEdit={setEdit}
      />
      <Todo
        list={list}
        setList={setList}
        setName={setName}
        setEdit={setEdit}
        setidEdit={setidEdit}
        showAlert={showAlert}
      />
    </div>
  );
}

export default App;
