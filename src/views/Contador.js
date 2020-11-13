import React, { useState } from 'react';

function Contador() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        clickeame!
      </button>
    </div>
  );
}

export default Contador
