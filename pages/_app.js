import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme/theme";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>漢字練習</title>
        <meta name="description" content="日本語の漢字練習" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" minH="100vh" justifyContent="space-between">
        <Header />
        <Box py={["3rem", "3rem", 0, 0, 0]}>
          <Component {...pageProps} theme={theme} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
