import React from 'react'
import { BodyIndex, FormContainer} from './Style'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import { Textarea, Button, Input, RadioGroup, Stack, Radio } from '@chakra-ui/react';
import Address from './Address';
import Loader from './Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import OrderSummary from './OrderSummary';

const SendOrder = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [delivery, setDelivery] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { clear, getTotalCart } = useContext(CartContext);
    const [address, setAddress] = useState({
        street: '',
        streetNumber: '',
        postalCode: '',
        city: '',
        cardNumber: '',
        cardName: '',
        cardCode: '',
    });
    const [requirements, setRequirements] = useState("")
    const db = getFirestore()
    const [orderId, setOrderId] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();

        const isAddressEmpty = delivery === 'option2' && Object.values(address).some((val) => val === '');



        if (name === '' || email === '' || isAddressEmpty) {
            return toast.error('You need to complete all the fields')
        }

        setLoading(true);

        addDoc(orderCollection, order).then(({ id }) =>
            setOrderId(id))

        setTimeout(() => {
            navigate(`/purchase-confirmation/${email}`);
            clear();
            setLoading(false);
        }, 2000);


    };

    const orderCollection = collection(db, "customers")

    const order = {
        buyer: { name, email },
        items: getTotalCart(),
        address: !Object.values(address).every((val) => val === '')
            ? address
            : 'pick up',
        requirements: requirements,
    };

    return (

        <BodyIndex>
            <FormContainer>
            <h1>CHECK OUT</h1>
            <h2>You are almost there!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='formTextDetails'>
                        <h3>Full name *</h3>
                        <Input type="text" onChange={(e) => setName(e.target.value)} placeholder='Insert your full name' />
                    </div>
                    <div className='formTextDetails'>
                        <h3>Email *</h3>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Insert your email' />
                    </div>
                    <div className='formTextDetails'>
                        <RadioGroup onChange={setDelivery} value={delivery}>
                            <Stack direction='row'>
                                <Radio value='option1'>Pick up (Pay at the counter) </Radio>
                                <Radio value='option2'>Delivery</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>
                    {delivery === 'option2' && (<Address address={address} setAddress={setAddress}
                    />)}
                    <div className='formTextDetails'>
                        <h3>Would you like to tell us anything special?</h3>
                        <Textarea
                            onChange={(e) => setRequirements(e.target.value)}
                            placeholder='Insert allegies or any special requirement' />
                    </div>
                    <OrderSummary/>
                    <Button type='submit' colorScheme='orange' onClick={handleSubmit} mb={5}>
                        Place order
                    </Button>
                    <div>
                        {loading && <Loader />}
                        <p>Order ID: {orderId}</p>
                    </div>
                </form>
            </FormContainer>
        </BodyIndex>
    );
}

export default SendOrder;
