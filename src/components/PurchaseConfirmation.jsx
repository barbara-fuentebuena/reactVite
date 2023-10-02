import React from 'react'
import { BodyIndex, ConfirmationContainer } from './Style'
import { useParams } from 'react-router-dom';
import { CheckCircleIcon } from '@chakra-ui/icons';

const PurchaseConfirmation = () => {
  const { email } = useParams();


  return (
    <>
      <BodyIndex>
        <ConfirmationContainer>
          <div>
            <CheckCircleIcon boxSize={10} />
          </div>
          <h1>Your order is now confirmed!</h1>

          <p>A confirmation email has been sent to {email}. Please check your inbox.</p>
        </ConfirmationContainer>
      </BodyIndex>
    </>
  )
}

export default PurchaseConfirmation