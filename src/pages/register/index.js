import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import { AuthLayout, CardAuth } from "components";
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
      duration: 5000,
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

  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <AuthLayout>
        <CardAuth p={20}>
          <Center fontWeight="semibold" fontSize="30px">
            Sign Up
          </Center>
          <FormControl mb={4} mt={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              variant="filled"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </FormControl>
          <FormControl mb={4} mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              variant="filled"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormControl>
          <FormControl mb={4} mt={8}>
            <Flex justifyContent="space-between">
              <FormLabel>Password</FormLabel>
            </Flex>
            <Input
              type="password"
              variant="filled"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </FormControl>
          <Button
            mt={5}
            w="full"
            variant="gray"
            onClick={handleRegister}
            isLoading={isLoading}
            loadingText="Please wait..."
          >
            Sign Up
          </Button>
          <Flex mt={5} justifyContent="center">
            <Button as={Link} variant="link" color="black" to="/">
              Sign in here
            </Button>
          </Flex>
        </CardAuth>
        <CardAuth
          bg="#DFDFDF"
          py={isNotSmallerScreen ? "50vh" : "0"}
          px={isNotSmallerScreen ? "20" : "0"}
        ></CardAuth>
      </AuthLayout>
    </>
  );
}
