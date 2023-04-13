import React, { useEffect, useState } from 'react';

const Section3 = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const textChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        console.log('렌더완료');
    });

    useEffect(() => {
        console.log('마운트완료');
    }, []);
    useEffect(() => {
        console.log('⏰카운트가 변경됨');
    }, [count]);

    return (
        <div>
            <h2>클릭한 횟수: {count}</h2>
            <button type="button" onClick={(e) => setCount((count) => count + 1)}>
                Click Me!
            </button>
            <hr/>
            <p>
                <input type="text" value={text} onChange={textChange} />
                &nbsp;입력한 글자 : {text}
            </p>
        </div>
    );
};

export default Section3;
