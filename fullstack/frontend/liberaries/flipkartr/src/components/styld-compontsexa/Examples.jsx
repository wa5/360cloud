import React from 'react';
import styled from 'styled-components';

var MyH1 = styled.h1`
    font-size: 70px;
    background-color: red;
`;
// background: ${(props) => (props.primary ? 'green' : 'blue')};
var MyButton = styled.button`
    background: ${(props) => {
        console.log(props);
        return props.mysize;
    }};
     font-size= ${(props) => props.mysize};
`;
function Examples() {
    return (
        <>
            <MyH1>hello</MyH1>
            <MyH1>word</MyH1>
            <MyH1>univers</MyH1>
            <MyButton primary={false} mysize="yellow">
                click me
            </MyButton>
        </>
    );
}

export default Examples;
