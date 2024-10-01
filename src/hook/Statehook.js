import React from 'react'
import { useState } from 'react'

export default function StateHookComponent() {
    let [count, setCount] = useState(0);
    let increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Count: {count}
            <br />
            {/* <button onClick={() => setCount(count + 1)}>Increase Count +</button> */}
            <button onClick={increaseCount}> count </button>
        </div>
    )
}