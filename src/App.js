import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => setItems(eskiDeger=> [...eskiDeger, `Item ${eskiDeger.length + 1}`]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default App;
