import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Girilen değer: {inputValue}</p>
    </div>
  );
};

export default App;
