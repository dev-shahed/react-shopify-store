import { Button } from "@chakra-ui/react";

export const GreenBtn = ({ children, ...rest }) => {
  return (
    <Button
      color={["primary.500", "white"]}
      backgroundColor={"green.400"}
      _hover={{
        bg: ["primary.100", "primary.600"],
      }}
      _focus={"outline:0 !important"}
      rounded={'full'}
    >{children}</Button>
  );
};
