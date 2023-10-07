import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { BodyIndex } from './Style';
import BackgroundImage from '../assets/img/background-order-summary.jpeg'



const Cart = () => {

  const { cart, removeItem, clear } = useCartContext();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );

  return (
    <BodyIndex>
      <Box p={4}>
      {cart.length === 0 ? (
        <VStack spacing={4}>
          <Text fontSize="lg">Your cart is empty</Text>
          <Button variant='outline' colorScheme='orange' mt={4} ml={4} onClick={() => navigate('/')}>Back to home page</Button>
        </VStack>
      ) : (
        <VStack spacing={4}>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.item.id}
              cartItem={cartItem}             
              onRemove={() => removeItem(cartItem.item.id)} 
            />
          ))}
          <Text fontSize="lg">Total: DKK {totalPrice.toFixed(2)}</Text>
          <Button colorScheme="orange" 
          variant='outline'
          onClick={clear}>
            Clear cart
          </Button>
          <Link to={`/sendorder`}>
            <Button colorScheme="orange">
              Confirm purchase</Button>
          </Link>
        </VStack>
      )}
    </Box>
    </BodyIndex>
  );
  
}

export default Cart