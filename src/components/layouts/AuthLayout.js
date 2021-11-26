import { Flex } from "@chakra-ui/react";

export default function AuthLayout({ children, ...rest }) {
  return (
    <Flex>
      <Flex
        w="100%"
        maxW="100vw"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  );
}
