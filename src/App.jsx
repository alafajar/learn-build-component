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
    <div className="max-w-xl mx-auto p-4 bg-white">
      <div className="flex h-screen justify-center items-center">
        <Input
          value={value}
          label="nama"
          placeholder="Type name here..."
          onChange={InputChange}
          required
        />
      </div>
    </div>
  );
}

export default App;
