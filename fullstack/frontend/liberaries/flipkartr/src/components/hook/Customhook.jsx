import React from 'react';

var usedata = (name) => {
    var name = name;
    function setName(da) {
        name = da;
        return name;
    }
    return [name, setName];
};

function Customhook() {
    var d = usedata('jiju');
    var [name, setName] = d;
    console.log(setName('khushbu'));
    return (
        <>
            <h1>hello</h1>
        </>
    );
}

export default Customhook;
