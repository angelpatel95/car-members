import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string,
    model: string,
    price: number
}

export const CreateCar = () => {

{/* Creating a deconstructed value for UseForm Hook */}
const  { register, handleSubmit } = useForm<Inputs>();

const onSubmit = (data:any) => {
    console.log(data)
    server_calls.create(data)
}

    return (
        <Container>
            <h1>Create Your New Car</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Car Name</label>
                <input type="text" name="name" id="name" placeholder="Add Car Name" ref={ register }/>

                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Add Car Model" ref={ register }/>

                <label htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Add Car Price" ref={ register }/>

                <button type="submit" className="button-styles">Submit Car</button>
            </form>
        </Container>
    )
}
