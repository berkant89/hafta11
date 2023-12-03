import React, { useState } from 'react';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) =>
    setPosition({ x: e.clientX, y: e.clientY });

  return (
    <div style={ {background: "black", color:"white", width: "100%", "height": "100%"} } onMouseMove={updateMousePosition}>
      <p>Mouse Position: ({position.x}, {position.y})</p>
    </div>
  );
};

export default App;
