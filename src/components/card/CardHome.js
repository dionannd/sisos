import { Flex, Text, Box, Avatar, Image, IconButton } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { BsChatLeftDots } from "react-icons/bs";

export default function CardHome(props) {
  const { data, onOpen } = props;

  return (
    <Box px={6} py={6} rounded="lg" borderColor="#E5E5E5" borderWidth="2px">
      <Image src={data.image} mb={5} />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar size="sm" mr={4} />
          <Text fontWeight="semibold" fontSize="20px">
            {data.user_id.username}
          </Text>
        </Flex>
        <Text>1,500 Likes</Text>
      </Flex>
      <Text mt={4} mb={4}>
        {data.content}
      </Text>
      <Flex>
        <IconButton
          aria-label="comment post"
          icon={<BsChatLeftDots />}
          bg="white"
          size="lg"
          onClick={onOpen}
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
  );
}
