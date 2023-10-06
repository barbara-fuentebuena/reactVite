import React from "react";
import { Box, Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

const CartItem = ({ cartItem, onRemove }) => {
  const { item, quantity } = cartItem;

  const [isTablet] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Flex

        align="center"
        justify="space-between"
        p={4}
        borderWidth={2}
        rounded="md"
        bg="white"
        boxShadow="lg"
        mb={4}
        width={isTablet ? '95%' : '60%'}
      >
        <Image
          src={item.image}
          alt={item.name}
          boxSize={isMobile ? 20 : 20}
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize={isMobile ? "sm" : "lg"} fontWeight="bold" padding={isMobile ? 0 : 5}>
            {item.name}
        </Text>
        <Box flex="1" ml={4} display={isMobile ? "block" : "flex"} justifyContent="end" alignItems="center"
        textAlign="right">
            <Text fontSize="md" padding={isMobile ? 0 : 5}>Price: DKK {item.price.toFixed(2)}</Text>
            <Text fontSize="md" padding={isMobile ? 0 : 5}>Quantity: {quantity}</Text>

            <Button
              size="sm"
              colorScheme="gray"
              color="black"
              mt={2}
              onClick={onRemove}
              padding={2}
            >
              Delete
            </Button>


        </Box>
      </Flex>
    </>
  );
};

export default CartItem;