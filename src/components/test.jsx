import React from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
    const { name,token } = useParams();
    return (
        <>
            
            <h1>hello from {name}, your token number is {token} </h1>

        </>
    )
}
export default  Test


