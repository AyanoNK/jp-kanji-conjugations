import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Header from "./header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} theme={theme} />
    </ChakraProvider>
  );
}

export default MyApp;
