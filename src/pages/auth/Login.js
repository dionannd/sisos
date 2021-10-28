import React, { useState, useCallback } from "react";
import {
  Alert,
  AlertDescription,
  Box,
  CloseButton,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthLayout, CardAuth } from "components";
import authRequest from "api/auth";
import { useHistory, Link } from "react-router-dom";

export default function LoginPage() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const history = useHistory();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await authRequest.login(data);
      localStorage.setItem("token", response.token);
      window.location.href = "/home";
    } catch (error) {
      setAlert(true);
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
    document.title = "Sign in • Sisos";
  }, [isLogedIn]);

  return (
    <AuthLayout>
      <CardAuth px={{ base: "8" }}>
        <Flex direction="column" w="48vh" background="transparant" mt={10}>
          <Heading fontSize="31px" mb={8} textAlign="center">
            👋
          </Heading>
          <Text textAlign="center" fontSize="24px">
            Sign in to Sisos
          </Text>
          {alert && (
            <Alert
              status="error"
              rounded="sm"
              px={8}
              mt={4}
              bg="red.50"
              border="1px"
              borderColor="red.200"
            >
              <AlertDescription fontSize="13px" textAlign="center">
                Incorrect username or password.
              </AlertDescription>
              <CloseButton
                position="absolute"
                size="sm"
                color="red.500"
                right="20px"
                top="11px"
                onClick={() => setAlert(false)}
                _hover={{ bg: "transparant" }}
                _active={{ bg: "transparant" }}
              />
            </Alert>
          )}
          <Box
            bg="gray.50"
            borderWidth="1.5px"
            // rounded="lg"
            mt={4}
            p={5}
            mb={4}
          >
            <FormControl mb={3.5}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Username or email address
              </FormLabel>
              <Input
                type="text"
                size="sm"
                fontSize="sm"
                ms={1}
                bg="white"
                isRequired={true}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </FormControl>
            <FormControl mb={5}>
              <Flex justifyContent="space-between">
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
                <Text
                  as={Link}
                  to="/password_reset"
                  mb={2}
                  ms="4px"
                  fontSize="xs"
                  color="blue.500"
                >
                  Forgot password?
                </Text>
              </Flex>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  size="sm"
                  ms="1"
                  fontSize="sm"
                  bg="white"
                  isRequired={true}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <InputRightElement>
                  <Text
                    as="button"
                    onClick={handleClick}
                    h="5vh"
                    fontWeight="normal"
                    color="gray.500"
                    fontSize="xs"
                    mt="-5px"
                    mr="5px"
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Text>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              w="full"
              rounded="sm"
              ms="1"
              size="sm"
              variant="gray"
              fontSize="sm"
              fontWeight="normal"
              onClick={handleLogin}
              isLoading={isLoading}
              loadingText="Signing in..."
            >
              Sign in
            </Button>
          </Box>
          <Box borderWidth="1px" py={3} mb="5rem">
            <Flex justifyContent="center" alignItems="center">
              <Text ms="4px" fontSize="14px">
                New to Sisos?
              </Text>
              <Button
                as={Link}
                to="/signup"
                ml={1}
                ms="4px"
                variant="link"
                fontSize="sm"
                fontWeight="normal"
                color="blue.500"
              >
                Create an account
              </Button>
              <Text>.</Text>
            </Flex>
          </Box>
          <Flex
            alignItems="center"
            color="gray.500"
            fontSize="xs"
            direction="column"
          >
            <HStack spacing={4} mb={1}>
              <Button
                as={Link}
                to="#"
                variant="link"
                color="blue.500"
                fontSize="xs"
                fontWeight="normal"
              >
                Terms
              </Button>
              <Button
                as={Link}
                to="#"
                variant="link"
                color="blue.500"
                fontSize="xs"
                fontWeight="normal"
              >
                Privacy
              </Button>
              <Button
                as={Link}
                to="#"
                variant="link"
                color="blue.500"
                fontSize="xs"
                fontWeight="normal"
              >
                Security
              </Button>
              <Button
                as={Link}
                to="#"
                variant="link"
                fontSize="xs"
                fontWeight="normal"
                _hover={{ color: "blue.500" }}
              >
                Contact Dev
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </CardAuth>
    </AuthLayout>
  );
}
