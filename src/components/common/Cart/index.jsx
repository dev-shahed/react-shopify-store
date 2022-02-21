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

  return (
    <Box>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems && checkout.lineItems.map((item) => (
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
            ))}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeCart}>
              Cancel
            </Button>
            <Button colorScheme="blue"> <Link href={checkout.webUrl}>Checkout</Link></Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Cart;
