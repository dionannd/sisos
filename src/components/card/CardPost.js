import React, { useState } from "react";
import {
  Flex,
  Divider,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
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
import { ModalListComment } from "components";
import homeRequest from "api/home";
import moment from "moment";

export default function CardPost(props, { ...rest }) {
  const { data, likePosting, unLikePosting, user, getPost } = props;
  const [detail, setDetail] = useState({});
  const [readMore, setMore] = useState(true);
  const [comment, setComment] = React.useState("");
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenComment,
    onOpen: onOpenComment,
    onClose: onCloseComment,
  } = useDisclosure();

  const deletePosts = async (id) => {
    await homeRequest.deletePosting(id);
    getPost(user.user_id);
  };
  const getDetailPosting = async (id) => {
    const res = await homeRequest.getDetailPosting(id);
    setDetail(res);
  };

  const createComments = async (payload) => {
    await homeRequest.createComments(payload);
    getPost(user.user_id);
    setComment("");
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
        w={{ md: "35rem", lg: "36rem" }}
        {...rest}
      >
        {data.image !== null && (
          <Image
            alignItems="center"
            src={data.image}
            w="full"
            h="35rem"
            objectFit="cover"
          />
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
                to={`/${data.username}/`}
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
                  <MenuItem
                    as="button"
                    color="red.500"
                    fontSize="14px"
                    onClick={() => deletePosts(data.post_id)}
                  >
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
            {readMore && data.content.length > 100 && (
              <Text
                onClick={() => setMore(false)}
                cursor="pointer"
                fontSize="14px"
                color="gray.500"
              >
                ... more
              </Text>
            )}
          </Text>
          {Number(data.total_comment) !== 0 && (
            <>
              <Button
                variant="link"
                size="sm"
                fontWeight="normal"
                color="gray.500"
                _hover={{ bg: "white" }}
                onClick={() => {
                  getDetailPosting(data.post_id);
                  onOpenComment();
                }}
              >
                View all {data.total_comment} comments
              </Button>
              <Flex mb={3} alignItems="center">
                <Avatar src={data.comment.profil_pic} size="xs" />
                <Text ml={2} fontWeight="bold" fontSize="sm">
                  {data.comment.username}
                </Text>
                <Text ml={4} fontSize="sm">
                  {data.comment.content}
                </Text>
              </Flex>
            </>
          )}
          <Text color="gray.500" fontSize="10px">
            {moment(data.created_at).from(new Date()).toUpperCase()}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            mt={1}
          >
            <HStack>
              <Button
                as={Link}
                to={`/posting/detail/${data.post_id}`}
                size="sm"
                variant="ghost"
                _hover={{ bg: "transparent" }}
                _focus={{ bg: "transparent" }}
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
          </Flex>
          {Number(data.total_like) !== 0 && (
            <Text fontSize="12px" fontWeight="semibold">
              {data.total_like} Likes
            </Text>
          )}
        </Box>
        <Flex display={{ base: "none", md: "inline", lg: "inline" }}>
          <FormControl>
            <Divider />
            <InputGroup size="sm" alignItems="center" p={2}>
              <Input
                type="text"
                placeholder="Add a comment..."
                border="0"
                _focus={{ border: 0 }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <InputRightElement>
                <Text
                  mr={10}
                  mt={4}
                  as="button"
                  fontSize="sm"
                  color="blue.500"
                  onClick={() =>
                    createComments({ post_id: data.post_id, content: comment })
                  }
                >
                  Post
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
      </Box>

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
