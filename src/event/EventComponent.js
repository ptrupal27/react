import React from 'react'

const handelClick = () => console.log('clicked');
const handelClickWithParam = (param) => console.log(param);

export default function EventComponent() {
    return (
        <div>
            <h1>Events</h1>
            <button onClick={handelClick}>Click</button> <br />
            <button onClick={() => alert('clicked!')}>Alert</button><br />
            <button onMouseEnter={(event) => console.log(event)}>Event</button><br />
            <button onMouseEnter={() => console.log('mouse hover')}>Mouser hover</button><br />
            <button onClick={() => handelClickWithParam('This is param of click event')}>Event With Param</button><br />
        </div>
    )
}