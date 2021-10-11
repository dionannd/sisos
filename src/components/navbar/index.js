import { Flex, Text } from "@chakra-ui/react";
import { Avatar, Input, InputGroup } from "@chakra-ui/react";

const Navbar = () => {
  // const logout = () => {
  //   localStorage.clear();
  //   window.location.href = "/";
  // };

  return (
    <>
      <Flex
        height="5rem"
        px="10rem"
        alignItems="center"
        bg="white"
        boxShadow="sm"
        justifyContent="space-between"
      >
        <Text fontWeight="semibold" fontSize="22px">
          SISOS
        </Text>
        <InputGroup mr={20} ml={20}>
          <Input
            type="tel"
            placeholder="Search email or username"
            bg="#F2F2F2"
            _focus={{
              borderColor: "gray.600",
            }}
          />
        </InputGroup>
        <Flex ml={10}>
          <Avatar size="sm" />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
