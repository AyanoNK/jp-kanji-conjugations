import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#1a365d",
    800: "#153e75",
    700: "#0070f3",
    600: "#2a69ac",
  },
  // I can override the default colors here
  green: {
    500: "#38A169",
  },
  // Or add new colors with whatever name I want
};

const components = {
  Button: {
    bg: "red",
  },
};

const theme = extendTheme({ colors, components });

export default theme;
