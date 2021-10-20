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

export default function EditProfile(props) {
  const { user } = props;
  return (
    <CardSetting>
      <Flex mb={8}>
        <Avatar size="md" />
        <Text ml={4}>
          Jhon Doe
          <br />
          <Button variant="link" fontSize="14px" color="black">
            Change Profile Pic
          </Button>
        </Text>
      </Flex>

      <FormControl mb={4}>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Username
        </FormLabel>
        <Input
          type="text"
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          size="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
          value={user?.uername}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Email
        </FormLabel>
        <Input
          type="text"
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          size="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
          Bio
        </FormLabel>
        <Textarea
          variant="filled"
          bg="#F2F2F2"
          ms="4px"
          fontSize="sm"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ bg: "#F2F2F2" }}
        />
      </FormControl>
      <Button size="sm" fontSize="12px" color="white" variant="gray" ml={1}>
        SAVE
      </Button>
    </CardSetting>
  );
}
