import Head from "next/head";
import { Container, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import SelectionCard from "../components/index/SelectionCard";

export default function Home() {
  const defaultDirection = ["column", "column", "row", "row", "row"];

  const cards = [
    {
      id: 1,
      title: "辞書形式の練習",
      description: "開発中で",
      link: "/dictionary-form/test",
    },
    {
      id: 2,
      title: "開発中で",
      description: "ニャ。",
      link: "/posts/first-post",
    },
    {
      id: 3,
      title: "開発中で",
      description: "ニャ。",
      link: "/posts/first-post",
    },
    {
      id: 4,
      title: "開発中で",
      description: "ニャ。",
      link: "/posts/first-post",
    },
  ];

  return (
    <Container maxW="8xl">
      <main>
        <Container
          maxW={["sm", "md", "lg", "xl", "3xl"]}
          flexDirection={defaultDirection}
        >
          <SimpleGrid columns={1} spacingY="3rem" autoColumns>
            <Tooltip label="「にほんごのかんじれいしゅう」" placement="top">
              <Text
                margin="0"
                lineHeight="1.15"
                fontSize="4rem"
                textAlign="center"
              >
                日本語の漢字練習
              </Text>
            </Tooltip>
            <SimpleGrid
              columns={[1, 1, 2, 2, 2]}
              spacingX="1rem"
              spacingY="2rem"
              autoRows
            >
              {cards.map((indexCard) => (
                <SelectionCard
                  key={indexCard.id}
                  link={indexCard.link}
                  title={indexCard.title}
                  description={indexCard.description}
                />
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </main>
    </Container>
  );
}
