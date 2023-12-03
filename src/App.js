import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('red');

  const changeColor = (newColor) => setColor(newColor);

  return (
    <div>
      <p style={{ color, background: "lightyellow" }}>Seçilen Renk: {color}</p>
      
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('green')}>Green</button>
      <button onClick={() => changeColor('blue')}>Blue</button>
    </div>
  );
};

export default App;
