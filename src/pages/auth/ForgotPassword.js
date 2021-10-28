import React, { useEffect } from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AuthLayout, CardAuth } from "components";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "Forgot your password? • Sisos";
  });

  return (
    <AuthLayout>
      <CardAuth>
        <Flex direction="column" w="83vh" background="transparant" mt={10}>
          <Heading fontSize="31px" mb={8} textAlign="center">
            👋
          </Heading>
          <Text textAlign="center" fontSize="23px">
            Reset your password
          </Text>
          <Box
            bg="gray.50"
            borderWidth="1.5px"
            // rounded="lg"
            mt={4}
            p={5}
            mb="5rem"
          >
            <FormControl mb={3.5}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </FormLabel>
              <Input
                type="email"
                size="sm"
                fontSize="sm"
                placeholder="Enter your email address"
                ms={1}
                bg="white"
                isRequired={true}
              />
            </FormControl>
            <Button
              mt={1}
              w="full"
              ms="1"
              size="sm"
              rounded="sm "
              variant="gray"
              fontSize="sm"
              fontWeight="normal"
              loadingText="Please wait..."
            >
              Send password reset email
            </Button>
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
