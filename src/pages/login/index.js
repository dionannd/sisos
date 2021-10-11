import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
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
import { useHistory, Link } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const toast = useToast();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await authRequest.login(data);
      localStorage.setItem("token", response.token);

      toast({
        title: "Succes!",
        description: "Sign In success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      window.location.href = "/home";
    } catch (error) {
      toast({
        title: "Oops!",
        description: error.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  const isLogedIn = useCallback(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);

  React.useEffect(() => {
    isLogedIn();
  });

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <AuthLayout>
        <CardAuth p={20}>
          <Center fontWeight="semibold" fontSize="30px">
            Sign In
          </Center>
          <FormControl mb={4} mt={4}>
            <FormLabel>Email/Username</FormLabel>
            <Input
              type="text"
              variant="filled"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </FormControl>
          <FormControl mb={4} mt={8}>
            <Flex justifyContent="space-between">
              <FormLabel>Password</FormLabel>
              <Button mb={2} color="black" fontWeight="reguler" variant="link">
                forgot password?
              </Button>
            </Flex>
            <Input
              type="password"
              variant="filled"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </FormControl>
          <Button
            mt={6}
            w="full"
            variant="gray"
            onClick={handleLogin}
            isLoading={isLoading}
            loadingText="Please wait..."
          >
            Sign In
          </Button>
          <Flex mt={6} justifyContent="center">
            <Text mr={1}>Not registered yet?</Text>
            <Button variant="link" color="black" as={Link} to="/register">
              Sign up here
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
