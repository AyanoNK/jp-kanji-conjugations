import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Footer from "./footer";
import Header from "./header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} theme={theme} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
