import React from 'react'
import lottie from 'lottie-web';
import lottieAni from './box.json';
import logo from './logo.svg'

function Lottie() {
    const box = React.useRef();
    React.useEffect(()=>{
        lottie.loadAnimation({
            container: box.current,
            animationData: lottieAni,
            loop: true,
            autoplay: true,
          });
    },[])
    return (
        <div ref={box} style={{width:100, position:'relative'}}>
            <img src={logo} alt="logo" style={{width:50, height:50, position:'absolute'}}/>
        </div>
    )
}

export default Lottie;