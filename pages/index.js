import Head from "next/head";
import styles from "../styles/Home.module.css";

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

          <a className={styles.card}>
            <h2>開発中で</h2>
            <p>ニャ。</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          ドキュメント
        </a>
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          学ぶ
        </a>
        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          例
        </a>
        <a
          href="https://github.com/AyanoNK/jp-kanji-conjugations"
          target="_blank"
          rel="noopener noreferrer"
        >
          リポジトリ
        </a>
      </footer>
    </div>
  );
}
