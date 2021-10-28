import React, { useState, useEffect } from "react";
import {
  Divider,
  HStack,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import authRequest from "api/auth";
import { Link } from "react-router-dom";
import { AuthLayout, CardAuth } from "components";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const toast = useToast();
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

  const handleClick = () => setShow(!show);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await authRequest.register(data);
      notif("Success!", "Please sign in", "success");
    } catch (error) {
      notif("Error!", error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Sign up • Sisos";
  }, []);

  return (
    <AuthLayout>
      <CardAuth bg="gray.50">
        <Flex alignItems="center" justifyContent="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            my={{ base: "4", sm: "8", md: "8", lg: "8" }}
            w="22rem"
            direction="column"
          >
            <Flex
              direction="column"
              p={10}
              background="transparent"
              bg="white"
              border="1px"
              borderColor="gray.300"
            >
              <Text
                fontSize="24px"
                fontWeight="bold"
                textAlign="center"
                mb="5px"
              >
                Sisos
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
              <Button rounded="sm" leftIcon={<FaGoogle />} size="sm">
                Sign in with Google
              </Button>
              <Flex alignItems="center" color="gray.500" mt={3} mb={3}>
                <Divider />
                <Text fontSize="xs" mx={5} fontWeight="bold">
                  ATAU
                </Text>
                <Divider />
              </Flex>
              <FormControl id="email" mb={2}>
                <Input
                  type="email"
                  placeholder="Email address"
                  fontSize="12px"
                  rounded="sm"
                  bg="gray.50"
                  _hover={{ borderColor: "gray.200" }}
                  _focus={{ borderColor: "gray.400" }}
                  isRequired={true}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </FormControl>
              <FormControl id="fullname" mb={2}>
                <Input
                  type="text"
                  placeholder="Fullname"
                  fontSize="12px"
                  rounded="sm"
                  bg="gray.50"
                  _hover={{ borderColor: "gray.200" }}
                  _focus={{ borderColor: "gray.400" }}
                  isRequired={true}
                  onChange={(e) =>
                    setData({ ...data, fullname: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="username" mb={2} isRequired>
                <Input
                  type="text"
                  placeholder="Username"
                  fontSize="12px"
                  rounded="sm"
                  bg="gray.50"
                  _hover={{
                    borderColor: "gray.200",
                  }}
                  _focus={{ borderColor: "gray.400" }}
                  isRequired={true}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" mb={4}>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    fontSize="12px"
                    rounded="sm"
                    bg="gray.50"
                    _hover={{ borderColor: "gray.200" }}
                    _focus={{ borderColor: "gray.400" }}
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
                      mt="-2px"
                      mr="5px"
                    >
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Text>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                mb={4}
                size="sm"
                fontWeight="normal"
                w="full"
                rounded="sm"
                variant="gray"
                onClick={handleRegister}
                isLoading={isLoading}
                loadingText="Signing up..."
                isDisabled={data === "" ? true : false}
              >
                Sign up
              </Button>
              <Text fontSize="xs" textAlign="center" color="gray.500">
                Dengan mendaftar, Anda menyetujui Ketentuan, Kebijakan Data, dan
                Kebijakan Cookie kami.
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              border="1px"
              py={5}
              bg="white"
              borderColor="gray.300"
              mt={3}
              mb={5}
              w="22rem"
              justifyContent="center"
            >
              <Text ms="4px" fontSize="14px">
                Have an account?
              </Text>
              <Text
                as={Link}
                color="blue.500"
                to="/"
                ml={1}
                ms="4px"
                fontSize="14px"
              >
                Sign in
              </Text>
            </Flex>
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
        </Flex>
      </CardAuth>
    </AuthLayout>
  );
}
