import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <p>hello from react</p>
        <button
          onClick={() => {
            counter();
          }}
        >
          Counter {count}
        </button>
      </div>
    </>
  );
}

export default App;
