import React from 'react'
import { Input, InputGroup, InputLeftAddon, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { BodyIndex } from './Style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const BookingForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "" || email === "" || phone === "" || date === "") {
            return (
                alert("You need to complete all the fields")
            )
        } 

        setLoading(true);

        setTimeout(() => {
            navigate(`/purchase-confirmation/${email}`);
            clear();
            setLoading(false);
        }, 2000);
    }

    return (
        <BodyIndex>
            <h1>Request a booking</h1>
            <form action="submit" onSubmit={handleSubmit}>
                <div>
                    <h3>Full name</h3>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Insert your full name' />
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Insert your email' />
                </div>
                <div>
                    <h3>Phone number</h3>
                    <InputGroup>
                        <InputLeftAddon children='+45' />
                        <Input type='tel' onChange={(e) => setPhone(e.target.value)} placeholder='Insert you phone number' />
                    </InputGroup>
                </div>
                <div>
                    <h3>Choose the date and time you would to book</h3>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Quantity of people</h3>
                    <NumberInput defaultValue={2} min={1} max={8}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <Button type='submit' colorScheme='blue'>Request booking</Button>
                <div>
                    {loading && <Loader />}
                </div>
            </form>
        </BodyIndex>
    )
}

export default BookingForm