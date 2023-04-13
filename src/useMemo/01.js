import React, { useState, useMemo } from "react";

const hardCalc = (num) => {
  for (let i = 0; i < 9999999999999; i++) {
    console.log("🎲hardCalc");
    return num + 10000;
  }
};
const easyCalc = (num) => {
  console.log("💰easyCalc");
  return num + 1;
};

const Memo = () => {
  const [num, setNum] = useState(1);
  const [n, setN] = useState(1);

  const result = useMemo(() => {
    hardCalc(num);
  }, [num]);

  const res = easyCalc(n);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <h4>+10000={result}</h4>
      <hr />
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
      />
      <h4>+1={res}</h4>
    </div>
  );
};
export default Memo;