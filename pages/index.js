import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Box, Container, Grid, SimpleGrid, Stack } from "@chakra-ui/react";
import SelectionCard from "../components/index/selection_card";

export default function Home() {
  const defaultDirection = ["column", "column", "row", "row", "row"];

  const cards = [
    {
      id: 1,
      title: "開発中で",
      description: "ニャ。",
      link: "/posts/first-post",
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
      <Head>
        <title>漢字練習</title>
        <meta name="description" content="日本語の漢字練習" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container
          maxW={["sm", "md", "lg", "xl", "3xl"]}
          flexDirection={defaultDirection}
        >
          <SimpleGrid columns={1} spacingY="3rem" autoColumns>
            <h1 className={styles.title}>日本語の漢字練習</h1>

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
