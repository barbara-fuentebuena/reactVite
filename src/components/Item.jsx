import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {

  const [isTablet] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
      <Card className='card' maxW='300px'>
        <CardBody>
          <Image
            src={image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              DKK {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/product/${id}`}>
              <Button variant='solid' colorScheme='orange'>
                View details
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
  )
}

export default Item