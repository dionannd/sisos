import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { CardSetting } from "components";

export default function EditProfile() {
  useEffect(() => {
    document.title = "Edit Profile | Sisos";
  }, []);
  return (
    <CardSetting>
      <Flex p={4} ml="5rem" mb={4}>
        <Avatar width="40px" height="40px" ml="0.2rem" />
        <Flex ml={10} direction="column">
          <Text fontSize="24px">Jhon Doe</Text>
        </Flex>
      </Flex>
      <FormControl px={3} mb={5} ml="1rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">Old Password</FormLabel>
          <Input
            type="password"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
          />
        </Flex>
      </FormControl>
      <FormControl px={3} mb={5} ml="0.6rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">New Password</FormLabel>
          <Input
            type="password"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
          />
        </Flex>
      </FormControl>
      <FormControl px={3} mb={6} ml="-0.1rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="Bold">Verify Password</FormLabel>
          <Input
            type="password"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
          />
        </Flex>
      </FormControl>
      <Button size="sm" variant="gray" fontSize="12px" ml="11rem">
        Change Password
      </Button>
    </CardSetting>
  );
}
