import React from 'react'
import { BodyIndex, ButtonsCalculator, CardsContainer } from './Style'
import { useState } from "react";
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react';


const ItemListContainer = () => {

  const [quantity, setQuantity] = useState(0)

  return (
    <>
      <BodyIndex>
        <div className='buttons-container'>
          <h2>{quantity}</h2>
          <ButtonsCalculator className='buttons'>
            <button className='button-calculator' onClick={() => setQuantity(quantity + 1)}>Add</button>
            <button className='button-calculator' onClick={() =>
              setQuantity(quantity >= 1 ? quantity - 1 : 0)}>Delete</button>
          </ButtonsCalculator>
        </div>
        <CardsContainer>
          <Card className='card' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Pizza A</Heading>
                <Text>
                  Pizza's insgredients
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  DKK 105
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='gray'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='gray'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card className='card' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Pizza B</Heading>
                <Text>
                  Pizza's insgredients
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  DKK 95
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='gray'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='gray'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card className='card' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Pizza C</Heading>
                <Text>
                  Pizza's insgredients
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  DKK 110
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='gray'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='gray'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </CardsContainer>
      </BodyIndex>
    </>

  )
}

export default ItemListContainer