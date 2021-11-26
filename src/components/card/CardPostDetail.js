import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Divider,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconMore, IconLike, IconComment } from "components";
import homeRequest from "api/home";
import moment from "moment";

const CardPostDetail = (props) => {
  const { data, getComments, user } = props;
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
  return (
    <Box w="35rem" border="1px" borderColor="gray.200" rounded="sm">
      <Flex direction="column">
        <Flex
          py={1}
          alignItems="center"
          borderBottom="1px"
          borderBottomColor="gray.200"
        >
          <IconButton
            as={Link}
            to="/home"
            size="sm"
            borderRadius="50"
            _hover={{ bg: "gray.200" }}
            ml={1}
            icon={<ArrowBackIcon h="20px" w="20px" />}
            variant="transparant"
          />
          <Flex direction="column">
            <Text ml={3} fontWeight="bold" mt={1} fontSize="md">
              Home
            </Text>
          </Flex>
        </Flex>
        {data.detail?.image !== null && (
          <Image
            alignItems="center"
            src={data.detail?.image}
            w="full"
            h="35rem"
          />
        )}
        <Flex alignItems="center" p={4} justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar w="40px" h="40px" src={data.detail?.profil_pic} />
            <Text ml={2} fontWeight="bold">
              {data.detail?.username}
            </Text>
          </Flex>
          <IconMore w="20px" h="20px" />
        </Flex>
        <Text px={4} mb={8} mt={-1}>
          {data.detail?.content}
        </Text>
        <Text px={4} mb={2} color="gray.500" fontSize="10px">
          {moment(data.detail?.created_at).from(new Date()).toUpperCase()}
        </Text>
        <Flex ml={4} mb={2}>
          <Text as="button">
            <IconComment />
          </Text>
          <Text as="button">
            <IconLike ml={2} />
          </Text>
        </Flex>
        <Divider mb={4} />
        <Box maxH="30rem" overflowY="auto">
          {data.comments?.map((item, index) => (
            <Flex
              key={index}
              alignItems="center"
              mb={1}
              mx={4}
              justifyContent="space-between"
            >
              <Flex>
                <Avatar size="sm" src={item.profil_pic} />
                <Flex direction="column">
                  <Flex alignItems="center">
                    <Box ml={1} px={2} py={1} mb={0.5}>
                      <Flex alignItems="center">
                        <Text>
                          <b>{item.username}</b> {item.content}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex
                    color="gray.500"
                    ml={1}
                    fontSize="12px"
                    alignItems="center"
                  >
                    <Text ml={2} fontWeight="bold">
                      Likes
                    </Text>
                    {item.user_id === user.user_id && (
                      <Text ml={2} fontWeight="bold">
                        Edit
                      </Text>
                    )}
                    <Text ml={2} fontSize="10px">
                      {moment(item.created_at).from(new Date()).toUpperCase()}{" "}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Box>
        <Flex display={{ base: "none", md: "inline", lg: "inline" }}>
          <FormControl mt={4}>
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
                  as="Button"
                  fontSize="sm"
                  color="blue.500"
                  type="submit"
                  onClick={() =>
                    createComments({
                      post_id: data.detail?.post_id,
                      content: comment,
                    })
                  }
                >
                  Post
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardPostDetail;
