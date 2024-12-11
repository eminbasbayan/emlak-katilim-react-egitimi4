import { useState } from 'react';

function App() {
  const [state, setState] = useState('Ahmet Demir');

  function handleClick() {
    setState('Emin Başbayan');
  }

  console.log('component çalıştı!');

  return (
    <div className="app">
      <p id="fullName">{state}</p>
      <button id="myBtn" onClick={handleClick}>
        İsmi Değiştir
      </button>
    </div>
  );
}

export default App;
