import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom'
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    model: string,
    price: number
}

export const UpdateCar = () => {

    {/* Set up communication of state via the router location */}
    const location:any =  useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.car_id,data)
    }
    return (
        <Container>
            <h1>Update Your Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"> Car Name</label>
                <input type="text" name="name" placeholder="Update Your Car" ref={ register }/>
                
                <label htmlFor="model"> Car Model</label>
                <input type="text" name="model" placeholder="Update Your Car Model" ref={ register }/>
                
                <label htmlFor="price"> Car Price</label>
                <input type="text" name="price" placeholder="Update Your Car Price" ref={ register }/>

                <button type="submit" className="button-styles"> Submit </button>
            </form>
        </Container>
    )
}