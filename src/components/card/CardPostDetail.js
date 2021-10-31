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
import { IconMore } from "components";
import React from "react";
import { Link } from "react-router-dom";
import homeRequest from "api/home";
import moment from "moment";

const CardPostDetail = (props) => {
  const { data, getComments } = props;
  const [comment, setComment] = React.useState("");

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
    <Flex direction="column" mt={-2}>
      <Box borderWidth={{ md: "1px", lg: "1px" }} borderBottom="0">
        <Flex py={1} alignItems="center">
          <IconButton
            as={Link}
            to="/home"
            size="md"
            borderRadius="50"
            _hover={{ bg: "gray.200" }}
            ml={1}
            icon={<ArrowBackIcon h="22px" w="22px" />}
            variant="transparant"
          />
          <Flex direction="column">
            <Text ml={7} fontWeight="bold" mt={1} fontSize="lg">
              Home
            </Text>
          </Flex>
        </Flex>
      </Box>
      {data.image !== null && (
        <Image
          alignItems="center"
          src={data.detail?.image}
          w="full"
          h="35rem"
          objectFit="cover"
        />
      )}
      <Box w="37rem" border="1px" borderColor="gray.200" rounded="sm">
        <Flex alignItems="center" p={4} justifyContent="space-between">
          <Flex>
            <Avatar w="40px" h="40px" src={data.detail?.profil_pic} />
            <Flex direction="column" ml={2}>
              <Text fontWeight="bold">{data.detail?.username}</Text>
              <Text color="gray.500" fontSize="10px">
                {moment(data.detail?.created_at).from(new Date()).toUpperCase()}
              </Text>
            </Flex>
          </Flex>
          <IconMore w="20px" h="20px" />
        </Flex>
        <Text px={4} mb={4}>
          {data.detail?.content}
        </Text>
        <Divider />
        {data.comments?.map((item, index) => (
          <Flex
            key={index}
            alignItems="center"
            px={4}
            pt={5}
            justifyContent="space-between"
          >
            <Flex>
              <Avatar size="sm" src={item.profil_pic} />
              <Flex direction="column" ml={4}>
                <Text mb={3}>
                  <b>{item.username}</b> {item.content}
                </Text>
                <Text color="gray.500" fontSize="10px" mt={-3}>
                  {moment(item.created_at).from(new Date()).toUpperCase()}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
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
                  as="button"
                  fontSize="sm"
                  color="blue.500"
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
      </Box>
    </Flex>
  );
};

export default CardPostDetail;
