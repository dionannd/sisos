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

  const isLogedIn = useCallback(() => {
    if (localStorage.getItem("token")) {
      history.push("/home");
    }
  }, [history]);

  React.useEffect(() => {
    isLogedIn();
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <AuthLayout display="flex">
        <CardAuth
          p={{ base: 20, md: 10, lg: 20, sm: 5 }}
          mx={{ base: 0, sm: 10, md: 10, lg: 0 }}
          my={{ base: 0, sm: 20, md: 0, lg: 0 }}
        >
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
          <FormControl mb={4} mt={6}>
            <Flex justifyContent="space-between">
              <FormLabel>Password</FormLabel>
              <Button mb={2} fontWeight="reguler" variant="link">
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
            mt={4}
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
          py={{ base: 0, lg: "50vh", md: "50vh", sm: "50vh" }}
          px={{ base: 0, lg: "12vh", md: "25%", sm: "20vh" }}
        ></CardAuth>
      </AuthLayout>
    </>
  );
}
