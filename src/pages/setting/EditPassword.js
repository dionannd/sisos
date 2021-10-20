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
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Old Password
        </FormLabel>
        <Input
          type="password"
          placeholder="Enter current password"
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          size="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ borderWidth: 0 }}
          isRequired={true}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          New Password
        </FormLabel>
        <Input
          type="password"
          placeholder="Enter new password"
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          size="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ borderWidth: 0 }}
          isRequired={true}
        />
      </FormControl>
      <FormControl mb={8}>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Verify New Password
        </FormLabel>
        <Input
          type="password"
          placeholder="New password (again)"
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          size="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ borderWidth: 0 }}
          isRequired={true}
        />
      </FormControl>
      <Button size="sm" fontSize="12px" color="white" variant="gray" ml={1}>
        CHANGE PASSWORD
      </Button>
    </CardSetting>
  );
}
