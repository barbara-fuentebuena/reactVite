import React from 'react'
import { BodyIndex } from './Style'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Select, Textarea, Button } from '@chakra-ui/react';
import Address from './Address';
import Loader from './Loader'

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
            return alert('You need to complete your information');
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
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Full name</h3>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='insert name' />
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='insert email' />
                </div>
                <div>
                    <h3>Would you like to pick it up at our restaurant or get it delivered to your home?</h3>
                    <Select placeholder='Select option' onChange={(e) => setDelivery(e.target.value)} value={delivery}>
                        <option value='option1'>Pick up (Pay at the counter)</option>
                        <option value='option2'>Delivery</option>
                    </Select>
                </div>
                {delivery === 'option2' && (<Address address={address} setAddress={setAddress}
                />)}
                <div>
                    <h3>Would you like to tell us anything special?</h3>
                    <Textarea placeholder='Insert allegies or any message you would like us to received' />
                </div>


                <Button type='submit' colorScheme='blue' onClick={handleSubmit}>Place order</Button>
                <div>
                    {loading && <Loader />}
                </div>
            </form>
        </BodyIndex>

    )
}

export default SendOrder