import React from "react";
import { Flex } from "@chakra-ui/react";

export default function AuthLayout({ children, ...rest }) {
  return (
    <Flex position="relative">
      <Flex
        w="100%"
        maxW="100vw"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
}
