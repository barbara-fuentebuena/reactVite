import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { CardDetailContainer, ButtonsCalculator } from './Style';
import { useState } from 'react';

const ItemDetail = ({ product }) => {

  const [quantity, setQuantity] = useState(0)
  return (
    <CardDetailContainer>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />
        <Stack>
          <CardBody>
            <Heading size='md'>{product.name}</Heading>
            <Text py='2'>
              {product.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              DKK {product.price}
            </Text>
          </CardBody>
          <CardFooter display={'block'}>
            <Button variant='solid' colorScheme='blue'>
              Add to Cart



            </Button>

            <div className='buttons-container'>
              <h2>{quantity}</h2>
              <ButtonsCalculator className='buttons'>
                <button className='button-calculator' onClick={() =>
                  setQuantity(quantity >= 1 ? quantity - 1 : 0)}>-</button>
                <button className='button-calculator' onClick={() => setQuantity(quantity + 1)}>+</button>

              </ButtonsCalculator>
            </div>


          </CardFooter>
        </Stack>
      </Card>
    </CardDetailContainer>
  );
};

export default ItemDetail;
