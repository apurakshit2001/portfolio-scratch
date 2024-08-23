import React, { useRef } from 'react'

const Map = () => {
    const numbersRef = useRef();
    const outputRef = useRef();

   let splitedNumberArray = numbersRef.current.outerHTML.split(',');
   let numbersArray = splitedNumberArray.map((item) => item * 2);

   outputRef.current.outerHTML = numbersArray.join(', ');
    
    
    return (
        <div>
            <h1 ref={numbersRef}>1,2,3,4,5,6,7,8,9,10</h1>
            <h2 ref={outputRef}></h2>
        </div>
    )
}

export default Map
