import React from 'react'
import { NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper } from '@chakra-ui/react';

const Address = ({ address, setAddress }) => {

    const handleInputChange = (e, field) => {
        const updatedAddress = { ...address, [field]: e.target.value };
        setAddress(updatedAddress);
    };

    return (
        <>
            <div>
                <h3>Insert your address</h3>
                <div>
                    <input
                        type='text'
                        placeholder='Street name'
                        value={address.street}
                        onChange={(e) => handleInputChange(e, 'street')}
                    />
                    <input
                        type='number'
                        placeholder='Street number'
                        value={address.streetNumber}
                        onChange={(e) => handleInputChange(e, 'streetNumber')}
                    />
                    <input
                        type='number'
                        placeholder='Postal code'
                        value={address.postalCode}
                        onChange={(e) => handleInputChange(e, 'postalCode')}
                    />
                    <input
                        type='text'
                        placeholder='City'
                        value={address.city}
                        onChange={(e) => handleInputChange(e, 'city')}
                    />
                </div>
            </div>
            <div>
                <h3>Payment Information</h3>
                <div>
                    <div>
                        <h4>Card number</h4>
                        <input type="number"
                            placeholder='Insert card number'
                            value={address.cardNumber}
                            onChange={(e) => handleInputChange(e, 'cardNumber')}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Name on Card</h4>
                        <input type="text"
                            placeholder='Insert name on card'
                            value={address.cardName}
                            onChange={(e) => handleInputChange(e, 'cardName')}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Expiry date</h4>
                        <div>
                            <h4>Day</h4>
                            <NumberInput defaultValue={15} min={1} max={31}
                                
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div>
                            <h4>Month</h4>
                            <NumberInput defaultValue={7} min={1} max={12}
                                
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>CVV/CVC </h4>
                        <input type="number"
                            placeholder='Insert CVC'
                            value={address.cardCode}
                            onChange={(e) => handleInputChange(e, 'cardCode')}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address