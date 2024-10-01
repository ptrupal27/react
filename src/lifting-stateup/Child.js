import React, { useState } from 'react'

export default function Child({ sendData }) {
    const [count, setCount] = useState(100000);

    const increaseCount = () => {
        
        const newcount = count + 1;
        console.log(increaseCount);
        setCount(newcount)
        sendData(newcount)
    }


    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={increaseCount}>Send Data</button>
        </div>
    )
}