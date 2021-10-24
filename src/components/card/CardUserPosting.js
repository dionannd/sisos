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
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IconLike, IconLikeActive, IconComment, IconMore } from "components";
import { ModalListComment, ModalComment } from "components";
import homeRequest from "api/home";
import moment from "moment";

export default function CardUserPosting(props, { ...rest }) {
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
    getPost(user.user_id);
  };

  const deleteComments = async (id) => {
    await homeRequest.deleteComments(id);
    onCloseComment();
    getPost(user.user_id);
  };

  return (
    <>
      <Box
        rounded="sm"
        borderColor="#E5E5E5"
        borderWidth={{ base: 0, sm: 0, md: "1px" }}
        mb={{ base: 4, md: 8, lg: 8 }}
        w={{ md: "36rem", lg: "36rem" }}
        {...rest}
      >
        {data.image !== null && (
          <Box borderColor="gray.200">
            <Image
              alignItems="center"
              src={data.image}
              w="full"
              objectFit="cover"
            />
          </Box>
        )}
        <Box px={{ base: "1rem", lg: 4 }} py={{ base: "1rem", lg: 2 }}>
          <Flex justifyContent="space-between">
            <Flex alignItems="center" mt={2}>
              <Avatar
                size="sm"
                mr={4}
                name={data.username}
                src={data.profil_pic}
              />
              <Button
                as={Link}
                to={`/${data.username}`}
                variant="link"
                color="black"
                _hover={{ color: "gray.500" }}
                fontWeight="semibold"
                fontSize="14px"
              >
                {data.username}
              </Button>
            </Flex>
            <Menu isLazy>
              <MenuButton>
                <IconMore />
              </MenuButton>
              <MenuList>
                <MenuItem fontSize="14px">Send</MenuItem>
                <MenuItem fontSize="14px">Save</MenuItem>
                {data.user_id === user.user_id && <MenuDivider />}
                {data.user_id === user.user_id && (
                  <MenuItem color="red.500" fontSize="14px">
                    Delete
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
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
              ... more
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
              View all {data.total_comment} comments
            </Button>
          )}
          <Flex alignItems="center" justifyContent="space-between" mb={2}>
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
            </HStack>
            <Text color="gray.400" fontSize="14px" fontWeight="600">
              {moment(data.created_at).from(new Date())}
            </Text>
          </Flex>
          {Number(data.total_like) !== 0 && (
            <Text fontSize="12px" fontWeight="semibold">
              {data.total_like} Likes
            </Text>
          )}
        </Box>
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
        onCloseComment={() => {
          onCloseComment();
          getPost(user.user_id);
        }}
        deleteComments={(id) => deleteComments(id)}
        getComments={() => getDetailPosting(data.post_id)}
      />
    </>
  );
}
