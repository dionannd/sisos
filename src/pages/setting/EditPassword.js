import React from "react";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { CardSetting } from "components";

export default function EditProfile() {
  return (
    <CardSetting>
      <Flex mb={8} alignItems="center">
        <Avatar size="md" />
        <Text ml={4} fontSize="18px">
          Jhon Doe
        </Text>
      </Flex>
      <FormControl mb={4}>
        <FormLabel>Old Password</FormLabel>
        <Input
          type="password"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ border: "0" }}
          isRequired={true}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ border: "white" }}
          isRequired={true}
        />
      </FormControl>
      <FormControl mb={8}>
        <FormLabel>Confirm New Password</FormLabel>
        <Input
          type="password"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ border: "white" }}
          isRequired={true}
        />
      </FormControl>
      <Button size="sm" color="white" variant="gray">
        Change Password
      </Button>
    </CardSetting>
  );
}
