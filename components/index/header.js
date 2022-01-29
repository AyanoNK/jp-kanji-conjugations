import React from "react";
import { Stack, Heading, Flex, Text, Image, Link } from "@chakra-ui/react";

import NextLink from "next/link";

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="teal.500"
      color="white"
      position="sticky"
      top="0"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <NextLink href="/" passHref>
            <Link>
              <Image src="/logo.webp" h="1.5em" alt="Dan Abramov" />
            </Link>
          </NextLink>
        </Heading>
      </Flex>

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box> */}

      <Stack
        direction={{ base: "column", md: "row" }}
        // display={{ base: isOpen ? "block" : "none", md: "flex" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>ニャ</Text>
      </Stack>
    </Flex>
  );
};

export default Header;
