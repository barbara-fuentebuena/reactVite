import React from 'react'
import { BodyIndex, FormContainer } from './Style'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Select, Textarea, Button, Input } from '@chakra-ui/react';
import Address from './Address';
import Loader from './Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendOrder = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [delivery, setDelivery] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { clear } = useContext(CartContext);
    const [address, setAddress] = useState({
        street: '',
        streetNumber: '',
        postalCode: '',
        city: '',
        cardNumber: '',
        cardName: '',
        cardCode: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAddressEmpty = delivery === 'option2' && Object.values(address).some((val) => val === '');



        if (name === '' || email === '' || isAddressEmpty) {
            return toast.error('You need to complete all the fields')
        }

        setLoading(true);

        setTimeout(() => {
            navigate(`/purchase-confirmation/${email}`);
            clear();
            setLoading(false);
        }, 2000);
    };

    return (


        <BodyIndex>
            <FormContainer>
                <h1>Finish your purchase</h1>
            <form onSubmit={handleSubmit}>
                <div className='formTextDetails'>
                    <h3>Full name</h3>
                    <Input type="text" onChange={(e) => setName(e.target.value)} placeholder='Insert your full name' />
                </div>
                <div className='formTextDetails'>
                    <h3>Email</h3>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Insert your email' />
                </div>
                <div className='formTextDetails'>
                    <h3>Choose home delivery or pick up</h3>
                    <Select placeholder='Select option' onChange={(e) => setDelivery(e.target.value)} value={delivery}>
                        <option value='option1'>Pick up (Pay at the counter)</option>
                        <option value='option2'>Delivery</option>
                    </Select>
                </div>
                {delivery === 'option2' && (<Address address={address} setAddress={setAddress}
                />)}
                <div className='formTextDetails'>
                    <h3>Would you like to tell us anything special?</h3>
                    <Textarea placeholder='Insert allegies or any special requirement' />
                </div>


                <Button type='submit' colorScheme='blue' onClick={handleSubmit}>Place order</Button>
                <div>
                    {loading && <Loader />}
                </div>
            </form>
            </FormContainer>
        </BodyIndex>

    )
}

export default SendOrder