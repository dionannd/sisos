import React, { useState, useEffect } from "react";
import { Avatar, Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { CardProfile, CardUserPosting } from "components";
import homeRequest from "api/home";

export default function Profile(props) {
  const [posting, setPosting] = useState([]);

  const { user } = props;

  const getPostingSelf = async () => {
    const response = await homeRequest.getPostingSelf();
    setPosting(response.data);
  };

  useEffect(() => {
    getPostingSelf();
  }, []);

  return (
    <CardProfile>
      <Flex mb={10}>
        <Box>
          <Avatar width="120px" height="120px" />
        </Box>
        <Box ml={20}>
          <Flex mb={4}>
            <Text fontSize="26px">{user?.username}</Text>
            <Button
              size="sm"
              ml={4}
              mt="0.5"
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{ bg: "white" }}
              _active={{ bg: "white" }}
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
              <b>0</b> follower
            </Text>
            <Text ml={10}>
              <b>0</b> following
            </Text>
          </Flex>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          </Text>
        </Box>
      </Flex>
      <Divider />
      <Box mt={5} mb={5}>
        <Text>Posting</Text>
      </Box>
      {posting.map((item, index) => (
        <CardUserPosting
          data={item}
          user={user}
          key={index}
          getPost={getPostingSelf}
        />
      ))}
    </CardProfile>
  );
}
