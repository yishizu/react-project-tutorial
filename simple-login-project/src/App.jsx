import { useState } from "react";

import "./App.css";

import InputList from "./components/InputList";
import InputForm from "./components/UI/InputForm";
import { Box, Card } from "@mui/material";


function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("Your Name");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, age);
    setName("");
    setAge(0);
    setList([...list, { name, age }]);
  };

  return (
    <>
      <InputForm
        name={name}
        age={age}
        onNameChange={(e) => setName(e.target.value)}
        onAgeChange={(e) => setAge(e.target.value)}
        onSubmit={handleSubmit}
      ></InputForm>
      <Card>
        <InputList list={list} />
      </Card>
    </>
  );
}

export default App;
