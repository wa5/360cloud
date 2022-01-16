import React, { useEffect, useState } from 'react';

function UseEffect() {
    var [Data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((a) => setData(a));
    },[]);

    console.log(Data[0].title);
    return (
        <>
            <h1>hello</h1>
            <h1>{Data[0].title}</h1>
        </>
    );
}

export default UseEffect;
