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
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  IconLike,
  IconLikeActive,
  IconComment,
  IconMore,
  IconSharePost,
  IconSave,
} from "components";
import { ModalListComment, ModalMorePost } from "components";
import homeRequest from "api/home";
import moment from "moment";

export default function CardPost(props, { ...rest }) {
  const { data, likePosting, unLikePosting, user, getPost } = props;
  const [detail, setDetail] = useState({});
  const [readMore, setMore] = useState(true);
  const [readComment] = useState(true);
  const [comment, setComment] = React.useState("");

  const {
    isOpen: isOpenComment,
    onOpen: onOpenComment,
    onClose: onCloseComment,
  } = useDisclosure();

  const {
    isOpen: isOpenMore,
    onOpen: onOpenMore,
    onClose: onCloseMore,
  } = useDisclosure();

  const getDetailPosting = async (id) => {
    const res = await homeRequest.getDetailPosting(id);
    setDetail(res);
  };

  const deletePosts = async (id) => {
    await homeRequest.deletePosting(id);
    getPost(user.user_id);
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

  var idLocale = require("moment/locale/id");

  return (
    <>
      <Box
        bg="white "
        rounded="3xl"
        mb={{ base: 4, md: 8, lg: 8 }}
        w={{ md: "32rem", lg: "32rem" }}
        {...rest}
      >
        <Box>
          <Flex
            justifyContent="space-between"
            px={4}
            py={2}
            alignItems="center"
          >
            <Flex alignItems="center">
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
                fontWeight="semibold"
                fontSize="14px"
              >
                {data.username}
              </Button>
            </Flex>
            <IconButton
              pl={4}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              icon={<IconMore />}
              onClick={onOpenMore}
            />
          </Flex>
          {data.image !== null && (
            <Image
              alignItems="center"
              src={data.image}
              w="full"
              h="32rem"
              objectFit="cover"
            />
          )}
          <Flex
            py={2}
            px={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <IconButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                onClick={() => {
                  if (data.has_you_like) {
                    unLikePosting(data.post_id);
                  } else {
                    likePosting(data.post_id);
                  }
                }}
              >
                {data.has_you_like ? <IconLikeActive /> : <IconLike />}
              </IconButton>
              <IconButton
                as={Link}
                to={`/posting/detail/${data.post_id}`}
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                icon={<IconComment />}
              />
              <IconButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                icon={<IconSharePost />}
              />
            </Flex>
            <IconButton
              pl={4}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              icon={<IconSave />}
            />
          </Flex>
          {Number(data.total_like) !== 0 && (
            <Text fontSize="sm" fontWeight="semibold" px={5}>
              {data.total_like} suka
            </Text>
          )}
          <Box px={5}>
            <Text
              mb={Number(data.total_comment) !== 0 ? 0 : 3}
              fontSize="sm"
              whiteSpace="pre-line"
              isTruncated={readMore}
            >
              <Text color="black">
                <Button
                  as={Link}
                  to={`/${data.username}`}
                  variant="link"
                  color="black"
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  {data.username}
                </Button>{" "}
                {data.content}
              </Text>
              {readMore && data.content.length > 50 && (
                <Text
                  onClick={() => setMore(false)}
                  cursor="pointer"
                  fontSize="sm"
                  color="#969696"
                >
                  ... selengkapnya
                </Text>
              )}
            </Text>
            {Number(data.total_comment) !== 0 && (
              <>
                <Button
                  variant="link"
                  size="sm"
                  fontWeight="normal"
                  color="#969696"
                  _hover={{ bg: "white" }}
                  onClick={() => {
                    getDetailPosting(data.post_id);
                    onOpenComment();
                  }}
                >
                  Lihat semua {data.total_comment} komentar
                </Button>
                <Flex>
                  <Text fontSize="sm" isTruncated={readComment}>
                    <Button
                      as={Link}
                      to={`/${data.comment.username}`}
                      variant="link"
                      color="black"
                      fontWeight="semibold"
                      fontSize="14px"
                    >
                      {data.comment.username}
                    </Button>{" "}
                    {data.comment.content}
                  </Text>
                </Flex>
              </>
            )}
            <Text color="gray.500" fontSize="10px" mt={1} mb={4}>
              {moment(data.created_at)
                .locale("id", idLocale)
                .from(new Date())
                .toUpperCase()}
            </Text>
          </Box>
        </Box>
        <Flex display={{ base: "none", md: "inline", lg: "inline" }}>
          <FormControl>
            <Divider />
            <InputGroup size="sm" alignItems="center" p={2}>
              <Input
                type="text"
                placeholder="Tambahkan komentar..."
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
                  color="#00A5F9"
                  onClick={() =>
                    createComments({ post_id: data.post_id, content: comment })
                  }
                >
                  Kirim
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
      </Box>

      <ModalMorePost
        user={user}
        data={data}
        detail={detail}
        isOpenMore={isOpenMore}
        onCloseMore={onCloseMore}
        deletePosts={(id) => deletePosts(id)}
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
