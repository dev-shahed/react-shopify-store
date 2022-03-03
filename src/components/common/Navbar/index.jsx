import { Badge, Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { MdClose, MdMenu, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../assets/a1-logo-svg-vector.svg";
import { ShopContext } from "../../../context/ShopContext";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontSize={18}
      fontWeight={400}
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <Icon cursor={"pointer"} fill={"green.400"} w={30} h={30} as={MdClose} />
);

const MenuIcon = () => (
  <Icon cursor={"pointer"} fill={"green.400"} w={30} h={30} as={MdMenu} />
);

const Navbar = (props) => {
  const { openCart, checkout} = useContext(ShopContext);
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={{ base: 8, md: 6 }}
      px={8}
      py={5}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Link to="/">
          <Image maxW={70} maxH={100} objectFit={'fill'} src={logo} />
        </Link>
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
          <MenuItem to="/">Product </MenuItem>
          <MenuItem to="/">Categories </MenuItem>
          <MenuItem to="/">Pricing </MenuItem>
          <MenuItem to="/">
            <Button
              size="sm"
              rounded="md"
              _focus={"outline:0 !important"}
              color={["primary.500","white"]}
              bg={["green.400", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.600",
                ],
              }}
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem isLast>
            <Icon
              onClick={() => openCart()}
              fill={"green.400"}
              as={MdShoppingBasket}
              w={30}
              h={30}
            />
            <Badge background={'#ff6f00'} borderRadius={'50%'}>{checkout.lineItems?.length}</Badge>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
