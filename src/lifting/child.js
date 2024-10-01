const Child = (data, { onShowClick }) => {
    return (
        <ul>
            {data.data.map(item => {
                return (
                    <li key={item.thing}>{item.info}
                        <button onClick={() => onShowClick}>Click</button>
                    </li>
                )
            })}
        </ul>
    )
}