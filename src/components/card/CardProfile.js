import React, { useState, useEffect } from "react";
import { Avatar, Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { CardUserPosting } from "components";
import homeRequest from "api/home";

const CardProfile = ({ user, ...rest }) => {
  const [posting, setPosting] = useState([]);
  const getPostingSelf = async () => {
    const response = await homeRequest.getPostingSelf();
    setPosting(response.data);
  };

  useEffect(() => {
    getPostingSelf();
  }, []);

  return (
    <>
      <Flex mb={10} {...rest} px={{ base: "1rem", sm: "1rem" }}>
        <Avatar width="150px" height="150px" />
        <Box ml={20}>
          <Flex mb={4}>
            <Text fontSize="26px" fontWeight="normal">
              {user?.username}
            </Text>
            <Button size="sm" variant="edit-profile" ml={4} mt="0.5">
              Edit Profile
            </Button>
          </Flex>
          <Flex mb={4}>
            <Text>
              <b>0</b> posts
            </Text>
            <Text ml={10}>
              <b>0</b> followers
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
      <Box mt={5} mb={5}></Box>
      <Flex
        px={{ base: "1rem", sm: "1rem" }}
        justifyContent="center"
        direction="column"
      >
        <Text mb={5}>Posting</Text>
        {posting.map((item, index) => (
          <CardUserPosting data={item} key={index} getPost={getPostingSelf} />
        ))}
      </Flex>
    </>
  );
};

export default CardProfile;
