import { Box, Grid, Image, Skeleton, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import SectionLayout from "../layouts/sectionLayout";


function ProdsListSkeleton() {
  const fakeArr = new Array(30).fill(0);
  return (
    <Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8} 
      >
        {fakeArr.map((item, index) => (
          <Box key={index}>
            <Skeleton w={'27vw'} h={400}>
              {item}
            </Skeleton>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  console.log(products);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <SectionLayout>
      <Grid 
        
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8} 
      >
        {products.length ? (
          products.map((pd) => {
            return (
              <Link to={`/product/${pd.handle}`} key={pd.id}>
                <Box _hover={{ opacity: "80%" }} textAlign="center">
                  <Image src={pd.images[0].src} alt={pd.title}></Image>
                  <Text fontSize={18} fontWeight={500}>
                    {pd.title}
                  </Text>
                  <Text fontWeight={700}> ${pd.variants[0].price}</Text>
                </Box>
              </Link>
            );
          })
        ) : (
          <ProdsListSkeleton />
        )}
      </Grid>
    </SectionLayout>
  );
};

export default Home;
