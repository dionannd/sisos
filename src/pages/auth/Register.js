import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import authRequest from "api/auth";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const toast = useToast();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const notif = (title, message, type) => {
    toast({
      title: title,
      description: message,
      status: type,
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await authRequest.register(data);
      notif("Success!", "Please sign in", "success");
    } catch (error) {
      notif("Ooops!", error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign up &bull; Sisos</title>
      </Helmet>
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
            <Text
              fontSize="24px"
              fontWeight="bold"
              textAlign="center"
              mb="10px"
            >
              Sign up
            </Text>
            <Text
              mb="20px"
              ms="4px"
              color="gray.500"
              fontWeight="bold"
              fontSize="14px"
            >
              Sign up to see photos and videos from your friends.
            </Text>
            <FormControl mb={4} mt={4}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Username
              </FormLabel>
              <Input
                type="text"
                variant="filled"
                fontSize="sm"
                placeholder="Enter your username"
                bg="#F2F2F2"
                _hover={{ bg: "#F2F2F2" }}
                _focus={{ bg: "#F2F2F2" }}
                isRequired={true}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                type="text"
                variant="filled"
                fontSize="sm"
                placeholder="Enter your email address"
                bg="#F2F2F2"
                _hover={{ bg: "#F2F2F2" }}
                _focus={{ bg: "#F2F2F2" }}
                isRequired={true}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </FormControl>
            <FormControl mb={4}>
              <Flex justifyContent="space-between">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
              </Flex>
              <Input
                type="password"
                variant="filled"
                fontSize="sm"
                placeholder="Enter your password"
                bg="#F2F2F2"
                _hover={{ bg: "#F2F2F2" }}
                _focus={{ bg: "#F2F2F2" }}
                isRequired={true}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </FormControl>
            <Button
              mt={4}
              w="full"
              fontSize="12px"
              variant="gray"
              onClick={handleRegister}
              isLoading={isLoading}
              loadingText="Please wait..."
            >
              SIGN UP
            </Button>
            <Flex mt={6} justifyContent="center">
              <Text ms="4px" fontSize="14px">
                Have an account?
              </Text>
              <Button
                as={Link}
                variant="link"
                color="black"
                to="/"
                ml={1}
                ms="4px"
                fontSize="14px"
              >
                Sign in here
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
