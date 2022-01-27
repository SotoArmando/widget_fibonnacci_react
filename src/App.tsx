import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Fibonacci from './Brain';

function App() {
  const [sequencyNumbers, setSequencyNumber] = useState<number>(10);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 

  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setSequencyNumber(parseInt(e.currentTarget.value));
  }

  return (
    <div className="App" >
    <input value={sequencyNumbers} type="number" onChange={handleSequencyUpdate} />
    <div>Output: </div>
      {
        [Fibonacci(sequencyNumbers).map(e =>
          <div>{e}</div>
        ),
        <span className="error">{exceptionNumberisnotreal(sequencyNumbers)}</span>
        ]
      }
    </div>
  );
}

export default App;
