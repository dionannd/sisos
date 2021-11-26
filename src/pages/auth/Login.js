import React, { useState, useCallback } from "react";
import {
  Alert,
  AlertDescription,
  Box,
  Divider,
  CloseButton,
  HStack,
  Text,
  Heading,
  FormControl,
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
    document.title = "Masuk • Sisos";
  }, [isLogedIn]);

  return (
    <AuthLayout>
      <CardAuth>
        <Flex direction="column" w="100%" px={16} bg="#F6F6F6">
          <Heading fontSize="30px" py={10} textAlign="center" color="#929292">
            Sisos
          </Heading>
          {alert && (
            <Alert
              status="error"
              rounded="full"
              mb={5}
              bg="red.50"
              border="1px"
              borderColor="red.200"
            >
              <AlertDescription fontSize="13px" textAlign="center">
                Nama pengguna atau Kata sandi salah.
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
          <Box>
            <FormControl mb={5}>
              <Input
                type="text"
                placeholder="Alamat Email atau Nama Pengguna"
                fontStyle="italic"
                bg="white"
                fontSize="sm"
                ms={1}
                isRequired={true}
                rounded="full"
                border={0}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </FormControl>
            <FormControl mb={5}>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Kata Sandi"
                  fontStyle="italic"
                  bg="white"
                  fontSize="sm"
                  ms="1"
                  isRequired={true}
                  rounded="full"
                  border={0}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
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
              w="full"
              rounded="full"
              ms="1"
              bg="#30BA00"
              _hover={{ bg: "#289901" }}
              color="white"
              onClick={handleLogin}
              isLoading={isLoading}
              loadingText="Memasuki..."
            >
              Masuk
            </Button>
          </Box>
          <Button
            variant="link"
            fontWeight="normal"
            textAlign="center"
            mt={3}
            mb={5}
            as={Link}
            to="/password_reset"
            fontSize="13px"
            style={{ fontStyle: "italic" }}
          >
            Lupa Kata Sandi?
          </Button>
          <Divider height="2px" bg="gray.600" style={{}} mb={5} />
          <Button
            as={Link}
            to="/signup"
            bg="#3EC6FF"
            _hover={{ bg: "#37AFE1" }}
            mb={14}
            ms="1px"
            color="white"
            rounded="full"
          >
            Daftar Akun
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
