import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { CardDetailContainer } from './Style';

const ItemDetail = ({ product }) => {
  return (
    <CardDetailContainer>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '500px' }}
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
          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Add to Cart
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </CardDetailContainer>
  );
};

export default ItemDetail;
