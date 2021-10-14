import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import UserState from "./context/user/UserState";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserState>
        <App />
      </UserState>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
