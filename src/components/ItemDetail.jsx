import React, { useState, useContext } from 'react';
import {
  Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, useMediaQuery
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

  const [isTablet] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <BodyIndex>
      <CardDetailContainer>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            maxW={{ base: '100%', sm: '400px' }}
            src={product.image}
            alt={product.name}
            boxSize={isMobile ? 0 : 400}
          />
          <Stack>
            <CardBody>
              <Heading size='md'>{product.name}</Heading>
              <Text py='2' maxW={250}>{product.description}</Text>
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
                    variant='outline'
                    colorScheme='orange'
                    m={2}
                    onClick={() => navigate(`/products`)}
                  >
                    Continue shopping
                  </Button>
                  <Button
                    variant='solid'
                    colorScheme='orange'
                    m={2}
                    onClick={handleFinishPurchase}
                  >
                    Finish purchase
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
