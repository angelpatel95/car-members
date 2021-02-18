import React from 'react';
// TODO: Add Bootstrap here

interface Props{
    title: string;
}


export const Home = (props:Props) => {

/* 
    props = {
        title: 'Hello from Coding Temple'
    }
*/    

    return (
        <div>
            <h1>Hello World from React!</h1>
            <h4>{ props.title } </h4>
        </div>
    )
}