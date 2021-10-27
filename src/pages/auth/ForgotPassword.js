import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
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
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        mb={{ base: 0, sm: "30px", md: "30px", lg: "30px" }}
        mt={{ base: 0, sm: "40px", md: "5rem", lg: "5rem" }}
      >
        <Flex
          direction="column"
          w={{ lg: "445px" }}
          background="transparent"
          bg="white"
        >
          <Text fontSize="24px" fontWeight="bold" textAlign="center" mb="10px">
            Password Reset
          </Text>
          <Text
            mb="25px"
            color="gray.500"
            fontWeight="bold"
            fontSize="14px"
            textAlign="center"
          >
            Enter your email and we will send you a reset link.
          </Text>
          <FormControl mb={5}>
            <FormLabel fontSize="14px">Email</FormLabel>
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
