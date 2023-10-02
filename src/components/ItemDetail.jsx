import React, { useState, useContext } from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button,
} from '@chakra-ui/react';
import { BodyIndex, CardDetailContainer } from './Style';
import ItemCount from './ItemCount';
import { CartContext } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ product }) => {

  if (!product) {
    return <div>Product not found.</div>;
  }
  

  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();


  const [addedQuantity, setAddedQuantity] = useState(0);
  const [showFinishButton, setShowFinishButton] = useState(false);

  const handleAddToCart = (quantity) => {
    const productToAdd = product;
    addItem(productToAdd, quantity);
    setAddedQuantity(quantity);
    setShowFinishButton(true);
  };

  const handleFinishPurchase = () => {
    navigate('/cart');
  };

  return (
    <BodyIndex>
      <CardDetailContainer>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt={product.name}
        />
        <Stack>
          <CardBody>
            <Heading size='md'>{product.name}</Heading>
            <Text py='2'>{product.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              DKK {product.price}
            </Text>
          </CardBody>
          <CardFooter display={'block'}>
            {addedQuantity === 0 ? (
              <ItemCount onAdd={handleAddToCart} />
            ) : (
              <>
                <Button
                  variant='solid'
                  colorScheme='blue'
                  mt={4}
                  onClick={handleFinishPurchase}
                >
                  Finish purchase
                </Button>
                <Button
                  variant='outline'
                  colorScheme='teal'
                  mt={4}
                  ml={4}
                  onClick={() => navigate(`/products`)}
                >
                  Continue shopping
                </Button>
              </>
            )}
          </CardFooter>
        </Stack>
      </Card>
    </CardDetailContainer>
    </BodyIndex>
  );
};

export default ItemDetail;
