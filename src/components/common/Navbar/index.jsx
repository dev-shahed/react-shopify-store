import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { MdClose, MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <Icon cursor={"pointer"} fill={"blue.500"} w={30} h={30} as={MdMenu} />
);

const MenuIcon = () => (
  <Icon cursor={"pointer"} fill={"blue.500"} w={30} h={30} as={MdClose} />
);

const Navbar = (props) => {
  const {openCart, openMenu, checkout} = useContext(ShopContext)
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Text
          fontSize="lg"
          fontWeight="bold"
          w="100px"
          color={["blue", "blue", "primary.500", "primary.500"]}
        >
          Logo
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/signup">
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["blue", "blue", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem isLast>
        <Icon onClick={() => openCart()} fill={"blue.500"} as={MdShoppingBasket} w={30} h={30} />
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
