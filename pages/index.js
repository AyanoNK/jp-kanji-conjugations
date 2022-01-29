import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Box, Container } from "@chakra-ui/react";
import SelectionCard from "../components/index/selection_card";

export default function Home() {
  return (
    <Container maxW="8xl">
      <Head>
        <title>漢字練習</title>
        <meta name="description" content="日本語の漢字練習" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>日本語の漢字練習</h1>

        <div className={styles.grid}>
          <SelectionCard
            link="/posts/first-post"
            title="開発中で"
            description="ニャ。2"
          />
          <Link href="/posts/first-post">
            <a className={styles.card}>
              <h2>開発中で</h2>
              <p>ニャ。</p>
            </a>
          </Link>

          <a className={styles.card}>
            <h2>開発中で</h2>
            <p>ニャ。</p>
          </a>

          <a className={styles.card}>
            <h2>開発中で</h2>
            <p>ニャ。</p>
          </a>

          <a className={styles.card}>
            <h2>開発中で</h2>
            <p>ニャ。</p>
          </a>
        </div>
      </main>
    </Container>
  );
}
