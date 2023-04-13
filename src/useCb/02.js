import React, { useState, useEffect, useCallback } from "react";

function Box({ createBoxStyle }) {
    const [style, setStyle] = useState({});
    useEffect(() => {
        console.log('박스커짐');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);
    return <div className="box" style={style}></div>;
}

const Cb2 = () => {
    const [size, setSize] = useState(100);
    const [dark, setDark] = useState(false);
    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'skyblue',
            width: `${size}px`,
            height: `${size}px`
        };
    }, [size]);

    return (
        <div>
            <div style={{ background: dark ? 'black' : 'beige' }}>
                <input type="number" value={size} onChange={(e) => { setSize(e.target.value) }} />
                <button onClick={() => { setDark(!dark); }}>🌟</button>
                <Box createBoxStyle={createBoxStyle} />
            </div>
        </div>
    );
};
export default Cb2;