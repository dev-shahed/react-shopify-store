import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import SectionLayout from "../layouts/sectionLayout";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  console.log(products);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <SectionLayout>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {products.map((pd) => {
          return (
            <Link to={`/product/${pd.handle}`} key={pd.id}>
              <Box _hover={{opacity: "80%"}} textAlign='center'>
                <Image src={pd.images[0].src} alt={pd.title}></Image>
                <Text>{pd.title}</Text>
                <Text>{pd.variants[0].price}</Text>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </SectionLayout>
  );
};

export default Home;
