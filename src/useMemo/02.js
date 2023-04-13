import React, { useState, useMemo, useEffect } from 'react';

const Memo2 = () => {
  const [num, setNum] = useState(0);
  const [nation, setNation] = useState(true);
  // const location = nation ? '국내' : '해외';
  // const location = {
  //   country: nation ? "국내" : "해외"
  // };
  const location = useMemo(() => {
    return {
      country: nation ? '국내' : '해외'
    }
  }, [nation]);

  const msg = (msg) => {
    alert(`${msg}-티켓예매완료`);
  };
  useEffect(() => {
    console.log('useEffect 호출, 여기에 넣으면 location 의 값이 바뀔때만 호출');
  }, [location]);
  return (
    <div>
      <h3>몇명인가요?</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <hr />
      <p>여행지: {location.country} </p>
      <button
        onClick={() => {
          setNation(!nation);
          msg(location.country);
        }}>
        티켓예매
      </button>
    </div>
  );
};
export default Memo2;