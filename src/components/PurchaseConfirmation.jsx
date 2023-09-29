import React from 'react'
import { BodyIndex } from './Style'
import { useParams } from 'react-router-dom';

const PurchaseConfirmation = () => {
  const { email } = useParams();


  return (
    <>
      <BodyIndex>
        <div>
          <h1>Your order is now confirmed!</h1>

          <p>A confirmation email has been sent to {email}. Please check your inbox.</p>
        </div>
      </BodyIndex>
    </>
  )
}

export default PurchaseConfirmation