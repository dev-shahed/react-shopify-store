import {
  Box, Button, Flex,
  Grid,
  Heading, Image,
  Text
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Product = () => {
  const { handle } = useParams();
  const { handleProduct, addItemToCheckout, product } = useContext(ShopContext);

  useEffect(() => {
    handleProduct(handle);
  }, [handleProduct]);
  if (!product.title) return <div>Loading</div>;
  return (
    <Box p={"2rem"} id='shop'>
      <Grid m={"auto"} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image
            objectFit={"cover"}
            src={product.images[0].src}
            alt={product.title}
          />
        </Flex>
        <Flex
          px={{ md: "2rem", xs: "1rem" }}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={4}
        >
          <Heading>{product.title}</Heading>
          <Text fontWeight={700}>
            {product.variants[0].price && product.variants[0].price}
          </Text>
          <Text color={"gray.500"} px={{ sm: "20px" }}>
            {product.description}
          </Text>
          <Button
            color={["primary.500", "white"]}
            backgroundColor={"green.400"}
            _hover={{
              bg: ["primary.100", "primary.600"],
            }}
            _focus={"outline:0 !important"}
            rounded={"full"}
            onClick={() =>
              addItemToCheckout(
                product.variants[0].id && product.variants[0].id,
                1
              )
            }
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Product;
