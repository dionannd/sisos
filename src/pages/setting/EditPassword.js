import React from "react";
import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { CardSetting } from "components";

export default function EditProfile() {
  return (
    <CardSetting>
      <FormControl mb={4} isRequired>
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
      <FormControl mb={4} isRequired>
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
      <FormControl mb={5} isRequired>
        <FormLabel>New Password Confirm</FormLabel>
        <Input
          type="password"
          variant="filled"
          bg="#F2F2F2"
          _hover={{ bg: "#F2F2F2" }}
          _focus={{ border: "white" }}
          isRequired={true}
        />
      </FormControl>
      <Flex justifyContent="right">
        <Button size="sm" color="white" variant="gray">
          Save
        </Button>
      </Flex>
    </CardSetting>
  );
}
