import { useState } from "react";
import "./App.css";

//Parent Component
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");
  const handleInputChange = (val) => {
    // ✅ Nama function lebih deskriptif
    setValue(val);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-500">
      {" "}
      {/* ✅ Layout lebih clean */}
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-sm">
        <Input
          value={value}
          label="nama"
          placeholder="Type name here..."
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
}

export default App;
