import React from "react";
import { Flex } from "@chakra-ui/react";

export default function AuthLayout({ children, ...rest }) {
  return (
    <Flex alignItems="center" justifyContent="center" margin="auto" {...rest}>
      {children}
    </Flex>
  );
}
