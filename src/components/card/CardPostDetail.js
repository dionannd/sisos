import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import {
  IconLike,
  IconLikeActive,
  IconComment,
  IconMore,
  IconSharePost,
  IconSave,
} from "components";
import homeRequest from "api/home";
import moment from "moment";

const CardPostDetail = (props) => {
  const { data, getComments } = props;
  const [comment, setComment] = useState("");

  const createComments = async (payload) => {
    try {
      await homeRequest.createComments(payload);
      getComments();
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  var idLocale = require("moment/locale/id");

  return (
    <Flex>
      {data.detail?.image !== null && (
        <Image
          alignItems="center"
          src={data?.detail?.image}
          w="32rem"
          h="32rem"
          objectFit="cover"
          bg="white"
          roundedLeft="3xl"
        />
      )}
      <Box
        w={data.detail?.image === null ? "32rem" : "22rem "}
        h="32rem"
        bg="white"
        roundedRight="3xl"
        roundedLeft={data.detail?.image === null ? "3xl" : "0"}
        borderLeft={data.detail?.image !== null ? "1px" : "0"}
        borderLeftColor="#E5E5E5"
      >
        <Flex
          alignItems="center"
          px={4}
          py={3}
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="#E5E5E5"
        >
          <Flex alignItems="center">
            <Avatar
              size="sm"
              mr={4}
              name={data.detail?.username}
              src={data.detail?.profil_pic}
            />
            <Button
              as={Link}
              to={`/${data.detail?.username}`}
              variant="link"
              color="black"
              fontWeight="semibold"
              fontSize="14px"
            >
              {data.detail?.username}
            </Button>
          </Flex>
          <IconMore w="20px" h="20px" />
        </Flex>
        <Box px={4} py={5} h="19rem" overflowY="auto">
          <Flex mb={3}>
            <Avatar
              size="sm"
              mr={4}
              name={data.detail?.username}
              src={data.detail?.profil_pic}
            />
            <Text color="black" fontSize="sm" whiteSpace="pre-line">
              <Button
                mt={1}
                as={Link}
                to={`/${data.detail?.username}`}
                variant="link"
                color="black"
                fontWeight="semibold"
                fontSize="sm"
              >
                {data.detail?.username}
              </Button>{" "}
              {data.detail?.content}
              <Text color="gray.500" fontSize="10px" pt={3}>
                {moment(data.created_at)
                  .locale("id", idLocale)
                  .from(new Date())
                  .toUpperCase()}
              </Text>
            </Text>
          </Flex>
          {data.comments?.map((item, index) => (
            <Flex key="index">
              <Avatar
                size="sm"
                mr={4}
                name={item.username}
                src={item.profil_pic}
              />
              <Text color="black" fontSize="sm" whiteSpace="pre-line">
                <Button
                  mt={1}
                  as={Link}
                  to={`/${item.username}`}
                  variant="link"
                  color="black"
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  {item.username}
                </Button>{" "}
                {item.content}
                <Text color="gray.500" fontSize="10px" py={3}>
                  {moment(item.created_at)
                    .locale("id", idLocale)
                    .from(new Date())
                    .toUpperCase()}
                </Text>
              </Text>
            </Flex>
          ))}
        </Box>
        <Box>
          <Flex
            py={1}
            px={4}
            alignItems="center"
            justifyContent="space-between"
            borderTop="1px"
            borderColor="#E5E5E5"
          >
            <Flex alignItems="center">
              <IconButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                // onClick={() => {
                //   if (data.has_you_like) {
                //     unLikePosting(data.post_id);
                //   } else {
                //     likePosting(data.post_id);
                //   }
                // }}
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
            <IconSave />
          </Flex>
          {Number(data.detail?.total_like) !== 0 && (
            <Text fontSize="sm" fontWeight="semibold" px={5}>
              {data.detail?.total_like} suka
            </Text>
          )}
          <Text color="gray.500" fontSize="10px" px={5} mt={1} mb={3}>
            {moment(data.created_at)
              .locale("id", idLocale)
              .from(new Date())
              .toUpperCase()}
          </Text>
        </Box>
        <Flex borderTop="1px" borderColor="#E5E5E5">
          <FormControl>
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
                  as="Button"
                  fontSize="sm"
                  color="#00A5F9"
                  type="submit"
                  onClick={() =>
                    createComments({
                      post_id: data.detail?.post_id,
                      content: comment,
                    })
                  }
                >
                  Kirim
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardPostDetail;
