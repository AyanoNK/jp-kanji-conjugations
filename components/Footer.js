import NextLink from "next/link";
import { Box, Link, Stack, StackItem } from "@chakra-ui/react";

const Footer = () => {
  const rows = [
    {
      id: 1,
      title: "ドキュメント",
      href: "https://nextjs.org/docs",
    },
    {
      id: 2,
      title: "学ぶ",
      href: "https://nextjs.org/learn",
    },
    {
      id: 3,
      title: "例",
      href: "https://github.com/vercel/next.js/tree/master/examples",
    },
    {
      id: 4,
      title: "リポジトリ",
      href: "https://github.com/AyanoNK/jp-kanji-conjugations",
    },
    {
      id: 5,
      title: "API",
      href: "https://app.kanjialive.com/api/docs",
    },
  ];

  return (
    <footer>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid #eaeaea"
        top="0"
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Stack
          spacing={{
            base: 3,
            md: 10,
          }}
          py={3}
          direction={["column", "column", "row", "row", "row"]}
        >
          {rows.map((row) => (
            <StackItem key={row.id} display="flex" justifyContent="center">
              <Link href={row.href} isExternal>
                {row.title}
              </Link>
            </StackItem>
          ))}
          <StackItem key={rows.length + 1}>
            <NextLink href="/credits" passHref>
              <Link
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
              >
                クレジット
              </Link>
            </NextLink>
          </StackItem>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
