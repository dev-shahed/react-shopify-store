import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
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
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image src={product.images[0].src} alt={product.title} />
        <Box>
          <Heading>{product.title}</Heading>
          <Text>{product.variants[0].price && product.variants[0].price}</Text>
          <Text>{product.description}</Text>
          <Button
            onClick={() =>
              addItemToCheckout(
                product.variants[0].id && product.variants[0].id,
                1
              )
            }
          >
            Add To Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Product;
