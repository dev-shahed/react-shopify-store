import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Skeleton,
  Text
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import SectionLayout from "../layouts/sectionLayout";

const Product = () => {
  const { handle } = useParams();
  const { handleProduct, addItemToCheckout, product } = useContext(ShopContext);

  useEffect(() => {
    handleProduct(handle);
  }, [handleProduct]);

  function ProductSkeleton() {
    return (
      <Grid p={'30px'} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={10}>
        <Skeleton w={'40vw'} h={500}>
        </Skeleton>
        <Skeleton mt={'8%'} w={'50vw'} h={400}>
        </Skeleton>
      </Grid>
    );
  }
  return (
    <SectionLayout>
      {product.title ? (
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
      ) : (
        <ProductSkeleton />
      )}
    </SectionLayout>
  );
};

export default Product;
