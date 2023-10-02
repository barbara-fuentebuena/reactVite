import React from 'react'
import { ButtonsCalculator } from './Style'
import { useState } from 'react';
import { Button } from '@chakra-ui/react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({ onAdd }) => {
    const [quantity, setQuantity] = useState(0)

    const clear = () => {
        setQuantity(0);
    };

    const handleAdd = () => {
        onAdd(quantity);
        clear();
    };

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        } else {
            toast.error('Maximum quantity reached (10 items)');
        }
    };

    return (
        <ButtonsCalculator>
            <div className='buttons'>
                <button className='button-calculator' onClick={() =>
                    setQuantity(quantity >= 1 ? quantity - 1 : 0)}>-</button>
                <h2>{quantity}</h2>
                <button className='button-calculator' onClick={handleIncrement}>+</button>

            </div>
            <div className='buttons-cart'>
                <Button colorScheme="blue" onClick={clear} mr={2}>
                    Clear
                </Button>
                <Button colorScheme="green" onClick={handleAdd} mr={2}>
                    Add to cart
                </Button>
            </div>

        </ButtonsCalculator>
    )
}

export default ItemCount