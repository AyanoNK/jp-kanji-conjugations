import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme/theme";
import Footer from "../components/index/Footer";
import Header from "../components/index/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minH="100vh" justifyContent="space-between">
        <Header />
        <Box display="flex">
          <Component {...pageProps} theme={theme} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
