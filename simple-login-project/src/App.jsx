import { useState } from "react";

import "./App.css";

import InputList from "./components/InputList";
import InputForm from "./components/UI/InputForm";
import { Box, Card } from "@mui/material";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("Your Name");
  const [age, setAge] = useState(0);

  const [showAlert, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if(name.trim().length === 0 || age.length === 0){
      setError(true);
    }
    else{
      
      setName("");
      setAge(0);
      setList((previousList) => { return [...previousList, { name, age, id: uuidv4() }] });
      setError(false);
    }
      console.log(list);
    }

  return (
    <>
      {showAlert && (<Alert onClose={() => setError(false)} severity="error">This is an error alert — check it out!</Alert>)}
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
