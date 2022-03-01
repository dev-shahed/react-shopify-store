import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  Image, Link, Text
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ShopContext } from "../../../context/ShopContext";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);
    let cartItem = checkout.lineItems?.length;

  return (
    <Box>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>
          <DrawerBody>
            {cartItem ? checkout.lineItems.map((item) => (
              <Grid templateColumns={"repeat(4, 1fr)"} gap={3} my={4} key={item.id} >
                <Flex justifyContent={'center'} alignItems={"center"}>
                  <Icon cursor={'pointer'} onClick={() => removeLineItem(item.id)} fill={'blue.300'} h={"10"} w={'10'} as={MdClose} />
                </Flex>
                <Flex justifyContent={'center'} alignItems={"center"}>
                  <Image objectFit={'cover'} src={item.variant.image.src} alt={item.title}/>
                </Flex>
                <Flex justifyContent={'center'} alignItems={"center"}>
                  <Text>{item.title}</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={"center"}>
                  <Text>{item.variant.price}</Text>
                </Flex>
              </Grid>
            )) : 
            <Box>
              <Text fontSize={18} mt={6} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>Cart is Empty</Text>
            </Box>
          }
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeCart}>
              Cancel
            </Button>
            {cartItem ? <Button colorScheme="blue"> <Link href={checkout.webUrl}>Checkout</Link></Button> : null}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Cart;
