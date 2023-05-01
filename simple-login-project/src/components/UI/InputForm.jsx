import React, { useReducer } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const emailReducer = (state, action) => {
    return {value: "", isValid: false};
}


const InputForm = ({name, age, onNameChange, onAgeChange,onSubmit}) => {


    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: false});

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="outlined-name-input"
        label="Name"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      <TextField
        id="outlined-number"
        label="Age"
        type="number"
        value={age}
        onChange={onAgeChange}
        inputProps={{
          pattern: "\\d*",
          inputMode: "numeric",
        }}
      />
      <div>
        <Button variant="contained" type="submit">
          Add To List
        </Button>
      </div>
    </Box>
  );
};

export default InputForm;
