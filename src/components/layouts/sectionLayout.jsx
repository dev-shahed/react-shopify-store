import { Box } from "@chakra-ui/react";
import React from "react";

const SectionLayout = ({ children }) => {
  return (
    <Box padding="16" bg="gray.100" display={'flex'} justifyContent={'center'}>
      {children}
    </Box>
  );
};

export default SectionLayout;
