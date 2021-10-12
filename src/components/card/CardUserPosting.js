import { Flex, Text, Box, Avatar, Image, IconButton } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { BsChatLeftDots } from "react-icons/bs";

export default function CardUserPosting(props) {
  const { data, onOpen } = props;

  return (
    <Box
      px={6}
      py={6}
      rounded="lg"
      borderColor="#E5E5E5"
      borderWidth="2px"
      mb={8}
    >
      <Image alignItems="center" src={data.image} mb={5} />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar size="sm" mr={4} name={data.username} src={data.profil_pic} />
          <Text fontWeight="semibold" fontSize="20px">
            {data.username}
          </Text>
        </Flex>
        <Text>{data.total_like} Likes</Text>
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
