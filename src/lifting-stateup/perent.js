import React, { useState } from 'react'
import Child from './Child';

export default function Parent() {
    const [data, setData] = useState('Parent Component Data.');
    const [count, setCount] = useState(100000)
    const getData = (count) => {
        setCount(count)
    }

    return (
        <div>
            <h1>Lifting State UP</h1>
            <h3>{count}</h3>
            <Child sendData={getData} />
        </div>
    )
}