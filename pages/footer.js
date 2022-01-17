import Link from "next/link";
import { Box, extendTheme, StylesProvider } from "@chakra-ui/react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const rows = [
    {
      id: 1,
      title: "ドキュメント",
      href: "https://nextjs.org/docs",
    },
    {
      id: 1,
      title: "学ぶ",
      href: "https://nextjs.org/learn",
    },
    {
      id: 1,
      title: "例",
      href: "https://github.com/vercel/next.js/tree/master/examples",
    },
    {
      id: 1,
      title: "リポジトリ",
      href: "https://github.com/AyanoNK/jp-kanji-conjugations",
    },
    {
      id: 1,
      title: "API",
      href: "https://app.kanjialive.com/api/docs",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Box
        w="100%"
        display="flex"
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        {rows.map((row) => (
          <a href={row.href} target="_blank" rel="noopener noreferrer">
            {row.title}
          </a>
        ))}
        <Link href="/credits">クレジット</Link>
      </Box>
    </footer>
  );
};

export default Footer;
