import React from "react";
import { Helmet } from "react-helmet";
import { Flex, Text, Box, Avatar, Image, IconButton } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { BsChatLeftDots } from "react-icons/bs";

export default function HomePage() {
  const data = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Viewer",
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box px={5} py={6} rounded="lg" borderColor="#E5E5E5" borderWidth="2px">
        <Image src={data.imageUrl} mb={5} />
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar size="sm" mr={4} />
            <Text fontWeight="semibold" fontSize="23">
              Jhon Doe
            </Text>
          </Flex>
          <Text>1,500 Likes</Text>
        </Flex>
        <Text mt={4} mb={4}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Flex>
          <IconButton
            aria-label="comment post"
            icon={<BsChatLeftDots />}
            bg="white"
            size="lg"
          />
          <IconButton
            ml={1}
            aria-label="like post"
            icon={<FiHeart />}
            bg="white"
            size="lg"
          />
        </Flex>
      </Box>
    </>
  );
}
