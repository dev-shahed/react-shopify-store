import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ShopProvider from "./context/ShopContext";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ShopProvider>
        <App />
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
