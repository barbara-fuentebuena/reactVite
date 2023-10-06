import React from 'react'
import { Input, InputGroup, InputLeftAddon, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { BodyIndex, FormContainer } from './Style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {collection, getFirestore, addDoc} from 'firebase/firestore'



const BookingForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false) 

    const db = getFirestore()
    const [bookingId, setBookingId] = useState(null)
    


    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || phone === "" || date === "") {
            return (
                toast.error('You need to complete all the fields')
            )
        } 

        setLoading(true);

        setTimeout(() => {
            navigate(`/booking-confirmation`);
            setLoading(false);
        }, 2000);

        addDoc (bookingCollection, booking).then(({id}) =>
        setBookingId(id))
    }

    const booking = {
        name, email, phone, date, quantity
    }

    const bookingCollection = collection (db, "bookings")

    return (
        <BodyIndex>
            <FormContainer>
            <h1>REQUEST A BOOKING</h1>
            <form action="submit" onSubmit={handleSubmit}>
                <div className='formTextDetails'>
                    <h3>Full name *</h3>
                    <Input type="text" onChange={(e) => setName(e.target.value)} placeholder='Insert your full name' />
                </div>
                <div className='formTextDetails'>
                    <h3>Email *</h3>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Insert your email' />
                </div>
                <div className='formTextDetails'>
                    <h3>Phone number *</h3>
                    <InputGroup>
                        <InputLeftAddon children='+45' />
                        <Input type='tel' onChange={(e) => setPhone(e.target.value)} placeholder='Insert you phone number' />
                    </InputGroup>
                </div>
                <div className='formTextDetails'>
                    <h3>Choose the date and time you would like to book *</h3>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className='formTextDetails'>
                    <h3>Quantity of people *</h3>
                    <NumberInput defaultValue={2} min={1} max={8}
                    onChange={(valueString) => setQuantity(parseInt(valueString))} >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <Button type='submit' colorScheme='orange'>Request booking</Button>
                <div>
                    {loading && <Loader />}
                </div>
            </form>
            </FormContainer>
        </BodyIndex>
    )
}

export default BookingForm