import React, { useEffect } from "react";
import { FormControl, Input, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  useEffect(() => {
    document.title = "Forgot Password | Sisos";
  }, []);

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
      bg="gray.50"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        mb={{ base: 0, sm: "30px", md: "30px", lg: "30px" }}
        mt={{ base: 0, sm: "40px", md: "40px", lg: "40px" }}
      >
        <Flex
          direction="column"
          w={{ lg: "445px" }}
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: 0, lg: "100px" }}
          bg="white"
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text fontSize="24px" fontWeight="bold" textAlign="center" mb="10px">
            Forgot Password?
          </Text>
          <Text
            mb="25px"
            ms="4px"
            color="gray.500"
            fontWeight="bold"
            fontSize="14px"
            textAlign="center"
          >
            Enter your email below and we'll get an email with a reset link to
            reset your password.
          </Text>
          <FormControl mb={5}>
            <Input
              type="text"
              variant="filled"
              fontSize="sm"
              placeholder="Enter your email address"
              bg="#F2F2F2"
              _hover={{ bg: "#F2F2F2" }}
              _focus={{ bg: "#F2F2F2" }}
              isRequired={true}
            />
          </FormControl>
          <Button
            w="full"
            fontSize="12px"
            variant="gray"
            loadingText="Please wait..."
          >
            SEND REQUEST
          </Button>
          <Flex mt={6} justifyContent="center">
            <Button
              as={Link}
              variant="link"
              color="black"
              to="/"
              ms="4px"
              fontSize="14px"
            >
              Back to login
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
