import React, { useState } from 'react';

const App = () => {

  const [isToggled, setToggle] = useState(false);

  const toggle = () => setToggle(eskiDeger => !eskiDeger);

  return (
    <div>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Aç/Kapa</button>
    </div>
  );

};

export default App;
