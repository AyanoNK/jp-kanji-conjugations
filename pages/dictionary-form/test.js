import Head from "next/head";
import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import NextLink from "next/link";

export default function Home() {
  const defaultDirection = ["column", "column", "row", "row", "row"];

  useEffect(() => {
    fetch(
      "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?list=1",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
          "x-rapidapi-key": "SIGN-UP-FOR-KEY",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container maxW="8xl">
      <Container maxW={"6xl"} flexDirection={defaultDirection}>
        <SimpleGrid columns={1} spacingY="3rem" autoColumns>
          <HStack justifyContent="center" spacing="1rem">
            <Text margin="0" lineHeight="1.15" fontSize="4rem">
              〜ます
            </Text>
            <ArrowBackIcon color="green.500" fontSize="4rem" />
            <ArrowForwardIcon color="green.500" fontSize="4rem" />
            <Text margin="0" lineHeight="1.15" fontSize="4rem">
              辞書形式
            </Text>
          </HStack>
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize="1.25rem"
            align="center"
            _hover={{
              color: "blue.700",
            }}
          >
            「じしょ けいしき の れんしゅう」
          </Text>
          <Text margin="0" lineHeight="1.15" fontSize="1.5rem" align="center">
            開発中で
          </Text>
          <NextLink href="/" passHref>
            <Link
              _hover={{
                color: "blue.700",
                textDecoration: "underline",
              }}
            >
              <Text paddingBottom="1rem" fontSize="1.5rem" align="center">
                戻る
              </Text>
            </Link>
          </NextLink>
        </SimpleGrid>
      </Container>
    </Container>
  );
}
