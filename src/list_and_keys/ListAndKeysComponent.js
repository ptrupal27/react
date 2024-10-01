import React from 'react'

export default function ListAndKeysComponent() {
    let items = ['Apple','Banana','Carrot'];
    return (
        <div>
            <ul>
                {items.map((value, index) =>
                    <li key={index}>{value}</li>
                )}
            </ul>
        </div>
    )
}