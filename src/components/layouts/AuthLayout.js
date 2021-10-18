import React from "react";
import { Flex } from "@chakra-ui/react";

export default function AuthLayout({ children, ...rest }) {
  return (
    <Flex position="relative">
      <Flex
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        pt={{ sm: "100px", md: "0px" }}
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
}
