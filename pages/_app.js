import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Footer from "./footer";
import Header from "./header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box display="flex" minHeight="90vh">
        <Component {...pageProps} theme={theme} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
