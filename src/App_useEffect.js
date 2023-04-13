import { useState } from 'react';
import Section3 from "./useEffect1/useEffect1";
import Timer from "./useEffect1/useEffect2";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => { setShow(!show); }}>
        정지
      </button>
      {show && <Timer />}
      <Section3></Section3>
    </div>
  );
}

export default App;