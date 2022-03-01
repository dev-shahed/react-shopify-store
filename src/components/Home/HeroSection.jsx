import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { GreenBtn } from "../common/Buttons";

export default function HeroSection() {
  return (
    <Box>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4, md: 8 }}
          py={{ base: 6, md: 16 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            We’re in Business <br />
            <Text as={"span"} color={"green.400"}>
              to Improve Lives
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <GreenBtn size={"2xl"}>Shop Now</GreenBtn>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
