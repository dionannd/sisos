import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CardProfile } from "components";

export default function Profile() {
  return (
    <CardProfile>
      <Flex mb={10}>
        <Box>
          <Avatar width="120px" height="120px" />
        </Box>
        <Box ml={20}>
          <Flex mb={4}>
            <Text fontSize="26px">Jhon Doe</Text>
            <Button
              size="sm"
              ml={4}
              mt="0.5"
              bg="white"
              borderWidth="1px"
              _hover={{ bg: "white" }}
              _focus={{ bg: "white", color: "gray.500", borderWidth: "1px" }}
            >
              Edit Profile
            </Button>
          </Flex>
          <Flex mb={4}>
            <Text>
              <b>0</b> posts
            </Text>
            <Text ml={10}>
              <b>0</b> posts
            </Text>
            <Text ml={10}>
              <b>0</b> posts
            </Text>
          </Flex>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          </Text>
        </Box>
      </Flex>
      <Divider />
      <Tabs mt={5}>
        <TabList>
          <Tab>Post</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Testing</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CardProfile>
  );
}
