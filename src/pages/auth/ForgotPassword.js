import React, { useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  FormControl,
  InputLeftElement,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import { AuthLayout, CardAuth } from "components";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Lupa password? • Sisos";
  });

  return (
    <AuthLayout>
      <CardAuth>
        <Flex direction="column" w="100%" px={16} bg="#F6F6F6">
          <Heading fontSize="30px" py={10} textAlign="center" color="#929292">
            Sisos
          </Heading>
          <Heading fontSize="26px" textAlign="center" color="#929292" mb={5}>
            Lupa Kata Sandi?
          </Heading>
          <Box bg="#F6F6F6">
            <FormControl>
              <Input
                type="email"
                placeholder="Masukan Alamat Email"
                fontStyle="italic"
                fontSize="sm"
                bg="white"
                rounded="full"
                border={0}
                isRequired={true}
              />
            </FormControl>
            <Text textAlign="center" fontSize="sm" color="#929292" py={2}>
              o
            </Text>
            <FormControl mb={5}>
              <InputLeftElement>
                <Box bg="#AFAFAF" py={2} px={3} rounded="full">
                  <AtSignIcon color="white" />
                </Box>
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Masukan Nama Pengguna"
                fontStyle="italic"
                style={{ paddingLeft: "50px" }}
                fontSize="sm"
                bg="white"
                rounded="full"
                border={0}
                isRequired={true}
              />
            </FormControl>
            <Button
              bg="#3EC6FF"
              w="full"
              _hover={{ bg: "#37AFE1" }}
              color="white"
              rounded="full"
              mb={16}
              loadingText="Mengirim..."
            >
              Kirim
            </Button>
          </Box>
          <Flex
            alignItems="center"
            justifyItems="center"
            direction="column"
            fontSize="sm"
            color="#929292"
            fontStyle="italic"
          >
            <Text>Butuh bantuan?</Text>
            <Flex fontStyle="italic">
              <Text>Silakan hubungi</Text>{" "}
              <Text
                as={Link}
                to="#"
                ml={1}
                color="#3EC6FF"
                fontWeight="semibold"
              >
                Dukungan Teknis Sisos
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardAuth>
    </AuthLayout>
  );
}
