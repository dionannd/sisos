import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { CardSetting } from "components";

export default function EditPassword() {
  useEffect(() => {
    document.title = "Change Password | Sisos";
  }, []);
  return (
    <CardSetting>
      <Flex pt={4}>
        <Box w="8.5rem">
          <Flex justifyContent="end">
            <Flex direction="column">
              <Avatar w="40px" h="40px" ml="86px" />
              <Text mt={9} fontWeight="bold" ml={5}>
                Old Password
              </Text>
              <Text mt={7} fontWeight="bold" ml={3}>
                New Password
              </Text>
              <Text mt={7} fontWeight="bold">
                Verify Password
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box w="23rem" ml={10}>
          <Text mb={8} mt={1} fontSize="24px">
            Jhon Doe
          </Text>
          <Flex direction="column">
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
          </Flex>
          <Button size="sm" fontSize="12px" color="white" variant="gray" ml={1}>
            CHANGE PASSWORD
          </Button>
        </Box>
      </Flex>
    </CardSetting>
  );
}
