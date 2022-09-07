import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input 
        type="checkbox"
        id="disable-check-box"
        defaultChecked={disabled}
        onClick={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disable-check-box">Disable button</label>
    </div>
  );
}

export default App;
