import React from 'react'
import { BodyIndex, ConfirmationContainer } from './Style'
import { CheckCircleIcon } from '@chakra-ui/icons'


const BookingConfirmation = () => {


    return (
        <>
            <BodyIndex>
                <ConfirmationContainer>
                <div>
                    <CheckCircleIcon boxSize={10} />
                </div>
                <div>
                    <h1>Your booking request has been sent!</h1>

                    <p>If the date and time you selected are still available, you will get a confirmation soon. Please check your inbox.</p>
                </div>
                </ConfirmationContainer>
            </BodyIndex>
        </>
    )
}

export default BookingConfirmation