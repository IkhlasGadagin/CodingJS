import React, { useState } from 'react';
import Home from "./components/Home";

const Names = ({ count }) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

function App() {
  const [count, setCount] = useState("ikhlas");

  return (
    <>
      <Home />
      <Names count={count} />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-blue-600 mb-2">Hello Ikhlas!</h1>
            <h1>{count}</h1>
            <p className="text-gray-600">This is a sample card with Tailwind CSS</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setCount("Varsha")}
            >
              Click me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
