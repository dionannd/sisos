import React, { useEffect } from "react";
import {
  Avatar,
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
        <Avatar width="40px" height="40px" />
        <Flex ml={6} direction="column">
          <Text fontSize="20px">Jhon Doe</Text>
          <Text
            as="button"
            color="cyan.500"
            fontSize="14px"
            fontWeight="semibold"
          >
            Change Profil Pic
          </Text>
        </Flex>
      </Flex>
      <FormControl px={3}>
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="500">Username</FormLabel>
          <Input
            type="text"
            size="sm"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="transparent"
            _focus={{ borderWidth: "2px", borderColor: "black" }}
            width="15rem"
          />
        </Flex>
      </FormControl>
      <FormControl px={3}>
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="500">Bio</FormLabel>
          <Input
            type="text"
            size="sm"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="transparent"
            _focus={{ borderWidth: "2px", borderColor: "black" }}
            width="15rem"
          />
        </Flex>
      </FormControl>
      <FormControl px={3}>
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="500">Email</FormLabel>
          <Input
            type="text"
            size="sm"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="transparent"
            _focus={{ borderWidth: "2px", borderColor: "black" }}
            width="15rem"
          />
        </Flex>
      </FormControl>
    </CardSetting>
  );
}
