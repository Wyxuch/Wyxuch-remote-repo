import React, { useState } from 'react';

import './App.css';

function App() {
    const [count, setCount] = useState(0);


    return (
    <div className="App">
      <header className="App-header">
        <h1>
            Counter: {count}
        </h1>
          <button onClick={() => setCount(count + 1)}>
              +1
          </button>
          <button onClick={() => setCount(count - 1)}>
              -1
          </button>
      </header>
    </div>
  );
}

export default App;
