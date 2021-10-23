import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { CardSetting } from "components";

export default function EditProfile() {
  useEffect(() => {
    document.title = "Edit Profile | Sisos";
  }, []);
  return (
    <CardSetting>
      <Flex pt={4}>
        <Box w="8.5rem">
          <Flex justifyContent="end">
            <Flex direction="column">
              <Avatar w="40px" h="40px" ml={9} />
              <Text mt={9} fontWeight="bold">
                Username
              </Text>
              <Text mt={7} fontWeight="bold" ml={8}>
                Email
              </Text>
              <Text mt={7} fontWeight="bold" ml={12}>
                Bio
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box w="23rem" ml={10}>
          <Text fontSize="20px">Jhon Doe</Text>
          <Text
            as="button"
            color="cyan.500"
            fontSize="14px"
            fontWeight="semibold"
            mb={5}
          >
            Change Profil Pic
          </Text>
          <FormControl>
            <Input
              type="text"
              size="sm"
              borderWidth="1px"
              borderColor="gray.200"
              bgColor="transparent"
              _focus={{ borderWidth: "2px", borderColor: "black" }}
              mb={5}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              size="sm"
              borderWidth="1px"
              borderColor="gray.200"
              bgColor="transparent"
              _focus={{ borderWidth: "2px", borderColor: "black" }}
              mb={5}
            />
          </FormControl>
          <FormControl>
            <Textarea size="sm" mb={5} />
          </FormControl>
          <Button size="sm" fontSize="12px" color="white" variant="gray" ml={1}>
            SAVE
          </Button>
        </Box>
      </Flex>
    </CardSetting>
  );
}
