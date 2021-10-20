import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Avatar,
  Image,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IconLike, IconLikeActive, IconComment } from "components";
import { ModalListComment, ModalComment } from "components";
import homeRequest from "api/home";
import moment from "moment";

export default function CardUserPosting(props) {
  const { data, likePosting, unLikePosting, user, getPost } = props;
  const [detail, setDetail] = useState({});
  const [readMore, setMore] = React.useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenComment,
    onOpen: onOpenComment,
    onClose: onCloseComment,
  } = useDisclosure();

  const getDetailPosting = async (id) => {
    const res = await homeRequest.getDetailPosting(id);
    setDetail(res);
  };

  const createComments = async (payload) => {
    await homeRequest.createComments(payload);
    onClose();
    getPost();
  };

  const deleteComments = async (id) => {
    await homeRequest.deleteComments(id);
    onCloseComment();
    getPost();
  };

  return (
    <>
      <Box
        px={4}
        py={4}
        rounded="sm"
        borderColor="#E5E5E5"
        borderWidth={{ base: 0, sm: 0, md: "1px" }}
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
            <Text fontWeight="semibold" fontSize="14px">
              {data.username}
            </Text>
          </Flex>
        </Flex>
        <Text
          mt={4}
          mb={Number(data.total_comment) !== 0 ? 0 : 4}
          fontSize="14px"
          whiteSpace="pre-line"
          isTruncated={readMore}
        >
          {data.content}
        </Text>
        {readMore && data.content.length > 200 && (
          <Text
            onClick={() => setMore(false)}
            cursor="pointer"
            fontSize="14px"
            color="gray.400"
          >
            read more
          </Text>
        )}
        {Number(data.total_comment) !== 0 && (
          <Button
            mb={4}
            variant="link"
            size="sm"
            color="gray.400"
            _hover={{ bg: "white" }}
            onClick={() => {
              getDetailPosting(data.post_id);
              onOpenComment();
            }}
          >
            View comment
          </Button>
        )}
        <Flex alignItems="center" justifyContent="space-between">
          <HStack>
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
            {Number(data.total_comment) !== 0 && (
              <Text fontSize="12px" fontWeight="semibold">
                {data.total_comment} Comment
              </Text>
            )}
            {Number(data.total_like) !== 0 && (
              <Text fontSize="12px" fontWeight="semibold">
                {data.total_like} Likes
              </Text>
            )}
          </HStack>
          <Text color="gray.400" fontSize="14px" fontWeight="600">
            {moment(data.created_at).from(new Date())}
          </Text>
        </Flex>
      </Box>

      <ModalComment
        data={user}
        isOpen={isOpen}
        onClose={onClose}
        createComments={(comment) =>
          createComments({ post_id: data.post_id, content: comment })
        }
      />

      <ModalListComment
        data={detail}
        isOpenComment={isOpenComment}
        posting={data}
        onCloseComment={onCloseComment}
        deleteComments={(id) => deleteComments(id)}
        getComments={() => getDetailPosting(data.post_id)}
      />
    </>
  );
}
