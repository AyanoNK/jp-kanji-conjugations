import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>漢字練習</title>
        <meta name="description" content="日本語の漢字練習" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>日本語の漢字練習</h1>

        <div className={styles.grid}>
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

      <Footer />
    </div>
  );
}
