import React, { useState, useEffect } from "react";
import {
  HStack,
  Heading,
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
      notif("Sukses!", "Silahkan masuk", "success");
      setData({});
    } catch (error) {
      notif("Error!", error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Daftar • Sisos";
  }, []);

  return (
    <AuthLayout>
      <CardAuth>
        <Flex direction="column" w="100%" px={16} bg="#F6F6F6">
          <Heading fontSize="30px" py={10} textAlign="center" color="#929292">
            Sisos
          </Heading>
          <Button
            rounded="full"
            bg="#AFAFAF"
            _hover={{ bg: "#929292" }}
            leftIcon={<FaGoogle />}
          >
            Masuk dengan Google
          </Button>
          <Text textAlign="center" fontSize="sm" color="#929292" py={2}>
            o
          </Text>
          <FormControl id="email" mb={5}>
            <Input
              type="email"
              placeholder="Alamat Email"
              fontSize="sm"
              fontStyle="italic"
              bg="white"
              border={0}
              rounded="full"
              isRequired
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormControl>
          <FormControl id="fullname" mb={5}>
            <Input
              type="text"
              placeholder="Nama Lengkap"
              fontSize="sm"
              fontStyle="italic"
              bg="white"
              border={0}
              rounded="full"
              isRequired={true}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
            />
          </FormControl>
          <FormControl id="username" mb={5} isRequired>
            <Input
              type="text"
              placeholder="Nama Pengguna"
              fontSize="sm"
              fontStyle="italic"
              bg="white"
              border={0}
              rounded="full"
              isRequired={true}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </FormControl>
          <FormControl id="password" mb={5}>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Kata Sandi"
                fontSize="sm"
                rounded="full"
                fontStyle="italic"
                bg="white"
                border={0}
                isRequired
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <InputRightElement>
                <Text
                  as="button"
                  onClick={handleClick}
                  fontSize="lg"
                  h="20px"
                  color="#929292"
                  mt="-5px"
                  mr="8px"
                >
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            bg="#3EC6FF"
            _hover={{ bg: "#37AFE1" }}
            color="white"
            rounded="full"
            onClick={handleRegister}
            isLoading={isLoading}
            loadingText="Mendaftar..."
          >
            Daftar Akun
          </Button>
          <Text pt={2} pb={4} fontSize="xs" textAlign="center" color="gray.500">
            Dengan mendaftar, Anda menyetujui Ketentuan, Kebijakan Data, dan
            Kebijakan Cookie kami.
          </Text>
          <Button
            as={Link}
            mb={5}
            to="/"
            rounded="full"
            bg="#30BA00"
            _hover={{ bg: "#289901" }}
            color="white"
          >
            Masuk
          </Button>
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
