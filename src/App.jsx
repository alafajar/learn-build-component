import { useState } from "react";
import "./App.css";

//Parent Component
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");
  const InputChange = (val) => {
    setValue(val);
  };

  return (
    <>
      <Input
        value={value}
        label="nama"
        placeholder="Type name here..."
        onChange={InputChange}
        required
      />
    </>
  );
}

export default App;
