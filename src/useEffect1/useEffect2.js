import React, { useEffect } from 'react';
function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 째각째각');
        }, 1000);

        console.log('렌더시 실행');

        return () => {
            clearInterval(timer);
            console.log('종료');
        };
    });

    return <p>타이머</p>;
}
export default Timer;
