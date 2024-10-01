import React, { useState } from "react";
import ReactDOM from "react-dom";

const Parent = () => {
    const data = [
        {
            thing: 1,
            info: "this is thing 1"
        },
        {
            thing: 2,
            info: "this is thing 1"
        },
        {
            thing: 3,
            info: "this is thing 3"
        }
    ];

    function handleClick(item) {
        console.log(item);
    }

    return (
        <div>
            <h1> This is the Parent </h1>
            <Child data={data} onShowClick={handleClick} />
        </div>
    )
};