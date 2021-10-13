import { Flex, Text, Box, Avatar, Image, Button } from "@chakra-ui/react";
import { IconLike, IconLikeActive, IconComment } from "components";

export default function CardUserPosting(props) {
  const { data, onOpen, likePosting, unLikePosting } = props;

  return (
    <>
      <Box
        px={6}
        py={6}
        rounded="lg"
        borderColor="#E5E5E5"
        borderWidth="1px"
        mb={8}
      >
        <Image
          alignItems="center"
          src={data.image}
          mb={5}
          w="full"
          objectFit="cover"
        />
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar
              size="sm"
              mr={4}
              name={data.username}
              src={data.profil_pic}
            />
            <Text fontWeight="semibold" fontSize="20px">
              {data.username}
            </Text>
          </Flex>
          <Text>{data.total_like} Likes</Text>
        </Flex>
        <Text mt={4} mb={4} fontSize="14px">
          {data.content}
        </Text>
        <Flex>
          <Button
            size="sm"
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            onClick={onOpen}
            p={0}
          >
            <IconComment />
          </Button>
          <Button
            size="sm"
            ml={1}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
            onClick={() => {
              if (data.has_you_like) {
                unLikePosting(data.post_id);
              } else {
                likePosting(data.post_id);
              }
            }}
            p={0}
          >
            {data.has_you_like ? <IconLikeActive /> : <IconLike />}
          </Button>
        </Flex>
      </Box>
    </>
  );
}
