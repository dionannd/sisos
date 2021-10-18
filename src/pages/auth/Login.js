import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { AuthLayout, CardAuth } from "components";
import authRequest from "api/auth";
import { useHistory, Link } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const notif = (title, message, type) => {
    toast({
      title: title,
      description: message,
      status: type,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await authRequest.login(data);
      localStorage.setItem("token", response.token);
      window.location.href = "/home";
    } catch (error) {
      notif("Ooops!", error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const isLogedIn = useCallback(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);

  React.useEffect(() => {
    isLogedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign in &bull; Sisos</title>
      </Helmet>
      <AuthLayout>
        <CardAuth>
          <Flex
            direction="column"
            w="100%"
            background="transparant"
            p="48px"
            mt={{ md: "100px", lg: "80px" }}
          >
            <Heading fontSize="32px" mb="10px">
              Sign In
            </Heading>
            <Text
              mb="20px"
              ms="4px"
              color="gray.500"
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your account to sign in.
            </Text>
            <FormControl mb={6} mt={4}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email/Username
              </FormLabel>
              <Input
                type="text"
                variant="filled"
                fontSize="sm"
                placeholder="Enter your email or username"
                bg="#F2F2F2"
                _hover={{ bg: "#F2F2F2" }}
                _focus={{ bg: "#F2F2F2" }}
                isRequired={true}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </FormControl>
            <FormControl mb={4}>
              <Flex justifyContent="space-between">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
                <Button
                  as={Link}
                  to="/forgot"
                  mb={2}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  variant="link"
                >
                  forgot password?
                </Button>
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
              variant="gray"
              fontSize="12px"
              onClick={handleLogin}
              isLoading={isLoading}
              loadingText="Please wait..."
            >
              SIGN IN
            </Button>
            <Flex mt={6} justifyContent="center">
              <Text ms="4px" fontSize="14px">
                Not registered yet?
              </Text>
              <Button
                variant="link"
                color="black"
                as={Link}
                to="/register"
                ml={1}
                ms="4px"
                fontSize="14px"
              >
                Sign up here
              </Button>
            </Flex>
          </Flex>
        </CardAuth>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100vh"
          w="50vw"
          position="absolute"
          right="0px"
          bg="#DFDFDF"
        ></Box>
      </AuthLayout>
    </>
  );
}
