import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
}

export default App;
