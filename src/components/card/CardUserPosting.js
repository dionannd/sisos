import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Avatar,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IconLike, IconLikeActive, IconComment } from "components";
import { ModalListComment, ModalComment } from "components";
import homeRequest from "api/home";

export default function CardUserPosting(props) {
  const { data, likePosting, unLikePosting, user, getPost } = props;
  const [detail, setDetail] = useState({});

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
        rounded="lg"
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
          <Text fontSize="14px" fontWeight="bold">
            {data.total_like} Likes
          </Text>
        </Flex>
        <Text mt={4} mb={2} fontSize="14px" whiteSpace="pre-line">
          {data.content}
        </Text>
        {Number(data.total_comment) !== 0 && (
          <Button
            mb={1}
            variant="link"
            size="sm"
            color="#0000FF"
            _hover={{ bg: "white" }}
            onClick={() => {
              getDetailPosting(data.post_id);
              onOpenComment();
            }}
          >
            View comment
          </Button>
        )}
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
        onCloseComment={onCloseComment}
        deleteComments={(id) => deleteComments(id)}
      />
    </>
  );
}
