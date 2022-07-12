import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [stateTest, setStateTest] = useState(0);
  useEffect(() => {
    console.log('Rendered');
  }, []);

  useEffect(() => {
    if (stateTest === 10) setStateTest(0);
    console.log('Executed due to depency update');
  }, [stateTest]);

  function incrementInteger() {
    setStateTest((prev) => {
      return prev + 1;
    });
  }

  return (
    <div
      onClick={() => {
        incrementInteger();
      }}
    >
      Incrementar valor: {stateTest}
    </div>
  );
}

export default App;
