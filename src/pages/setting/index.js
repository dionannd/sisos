import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
} from "@chakra-ui/react";

export default function EditProfile() {
  return (
    <Flex mt="8rem">
      <Box mr={10}>
        <Button>Edit Profile</Button>
        <Button>Change Password</Button>
        <Button>Activity</Button>
        <Button>Sign Out</Button>
      </Box>
      <Box ml={10}>
        <Flex mb={8}>
          <Avatar />
          <Text ml={4} mt={2}>
            Jhon Doe
          </Text>
        </Flex>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="text" variant="filled" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bio</FormLabel>
          <Textarea />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Address</FormLabel>
          <Textarea />
        </FormControl>
      </Box>
    </Flex>
  );
}
