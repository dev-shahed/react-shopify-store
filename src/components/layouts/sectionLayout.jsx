import { Box } from "@chakra-ui/react";
import React from "react";

export default function SectionLayout({ children }) {
  return (
    <Box
      padding="16"
      bg="gray.100"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Box>
  );
}
