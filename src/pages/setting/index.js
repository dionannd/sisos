import React from "react";
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";
import { CardSetting } from "components";

const EditProfile = () => {
  return (
    <CardSetting>
      <Flex mb={8}>
        <Avatar />
        <Text ml={4}>
          Jhon Doe
          <br />
          <Button variant="link" fontSize="14px" color="black">
            Change profile pic
          </Button>
        </Text>
      </Flex>

      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Bio</FormLabel>
        <Textarea
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <FormControl mb={7}>
        <FormLabel>Address</FormLabel>
        <Textarea
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <Flex justifyContent="right">
        <Button size="sm" color="white" variant="gray">
          Save
        </Button>
      </Flex>
    </CardSetting>
  );
};

export default EditProfile;
