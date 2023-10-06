import React from 'react'
import { useCartContext } from "../context/ShoppingCartContext";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { OrderSummaryContainer } from './Style';
import BackgroundImage from '../assets/img/background-order-summary.jpeg'

const OrderSummary = () => {

  const { cart } = useCartContext();
  const totalPrice = cart.reduce(
    (total, item) => total + item.item.price * item.quantity, 0);


  return (
    <OrderSummaryContainer
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='background-table-order-summary'>
        <h3>Order Summary</h3>
        <TableContainer>
          <Table size='md'          >
            <Thead>
              <Tr>
                <Th>PRODUCT</Th>
                <Th>UNIT PRICE</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((item) => (
                <Tr key={item.item.id}>
                  <Td>{item.item.name} x {item.quantity}</Td>
                  <Td>{item.item.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <h3 fontSize="lg">Total: DKK {totalPrice.toFixed(2)}</h3>
      </div>
    </OrderSummaryContainer>
  )


}

export default OrderSummary