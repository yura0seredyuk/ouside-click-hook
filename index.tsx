import React, { useRef, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import useOutsideClick from "./useOutsideClick";

const App = () => {
  const ref = useRef();
  const [show, setSate] = useState(false);

  useOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  return (
    <div>
      <button onClick={() => setSate(!show)}>
        Menu
      </button>

      {show && (
        <div ref={ref}>
          <h4>
            This is a menu <small>(Click outside to close)</small>
          </h4>
        </div>
      )}
    </div>
  )
}

render(<App />, document.getElementById('root'));
