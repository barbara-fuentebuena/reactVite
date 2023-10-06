import React from 'react'
import { NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Input } from '@chakra-ui/react';
import { PaymentContainer } from './Style';

const Address = ({ address, setAddress }) => {

    const handleInputChange = (e, field) => {
        const updatedAddress = { ...address, [field]: e.target.value };
        setAddress(updatedAddress);
    };

    return (
        <PaymentContainer>
            <div className='address-details'>
                <div className='formAddressDetails'>
                    <h3>Your address</h3>
                    <div className='input-payment-details'>
                        <Input
                            className='input-payment-field'
                            type='text'
                            placeholder='Street name'
                            value={address.street}
                            onChange={(e) => handleInputChange(e, 'street')}
                        />
                        <Input
                            className='input-payment-field'
                            type='number'
                            placeholder='Street number'
                            value={address.streetNumber}
                            onChange={(e) => handleInputChange(e, 'streetNumber')}
                        />
                    </div>
                    <div className='input-payment-details'>
                        <Input
                            className='input-payment-field'
                            type='number'
                            placeholder='Postal code'
                            value={address.postalCode}
                            onChange={(e) => handleInputChange(e, 'postalCode')}
                        />
                        <Input
                            className='input-payment-field'
                            type='text'
                            placeholder='City'
                            value={address.city}
                            onChange={(e) => handleInputChange(e, 'city')}
                        />
                    </div>
                </div>
            </div>
            <div className='payment-details'>
                <h3>Payment Information</h3>
                <div className='formAddressDetails'>
                    <div className='input-payment-details'>
                        <h4>Card number</h4>
                        <Input type="number"
                            placeholder='Insert card number'
                            className='input-payment-field'
                            value={address.cardNumber}
                            onChange={(e) => handleInputChange(e, 'cardNumber')}
                        />
                    </div>
                    <div className='input-payment-details'>
                        <h4>Name on card</h4>
                        <Input type="text"
                            className='input-payment-field'
                            placeholder='Insert name on card'
                            value={address.cardName}
                            onChange={(e) => handleInputChange(e, 'cardName')}
                        />
                    </div>
                </div>
                <div >
                    <h3>Expiry date</h3>
                    <div className='formAddressDetails'>
                        <div className='input-payment-details'>
                            <h4>Day</h4>
                            <NumberInput
                                className='input-payment-field' defaultValue={1} min={1} max={31}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='input-payment-details'>
                            <h4>Month</h4>
                            <NumberInput className='input-payment-field' defaultValue={1} min={1} max={12}

                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='input-payment-details'>
                            <h4>CVV/CVC </h4>
                            <Input type="number"
                                className='input-payment-field'
                                placeholder='Insert CVC'
                                value={address.cardCode}
                                onChange={(e) => handleInputChange(e, 'cardCode')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PaymentContainer>
    )
}

export default Address