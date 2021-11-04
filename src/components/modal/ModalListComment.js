import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Divider,
  Avatar,
  Flex,
  Text,
  Image,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  ModalHeader,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import UserContext from "context/user/UserContext";
import React from "react";
import moment from "moment";
import homeRequest from "api/home";

const ModalListComment = (props) => {
  const {
    data,
    isOpenComment,
    onCloseComment,
    deleteComments,
    getComments,
    posting,
  } = props;
  const { userProfile } = React.useContext(UserContext);
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
    <Modal isOpen={isOpenComment} onClose={onCloseComment} size="lg">
      <ModalOverlay />
      <ModalContent>
        <Flex>
          <Flex direction="column" w="35rem">
            <ModalHeader
              px={4}
              py={2}
              display="flex"
              alignItems="center"
              borderBottom="1px"
              borderColor="gray.200"
            >
              <Avatar size="sm" src={data.detail?.profil_pic} />
              <Text ml={4} fontSize="14px">
                {data.detail?.username}
              </Text>
            </ModalHeader>
            <ModalBody px={0} p={0}>
              {data.detail?.image !== null && (
                <Image
                  alignItems="center"
                  src={data.detail?.image}
                  w="full"
                  h="35rem"
                />
              )}
              <Box maxH="25rem" overflowY="auto">
                <Flex mt={4} mb={2} px={5} pt={5} alignItems="center">
                  <Avatar size="sm" src={data.detail?.profil_pic} />
                  <Flex direction="column" ml={2}>
                    <Text fontSize="14px">
                      <b>{data.detail?.username}</b>
                    </Text>
                  </Flex>
                </Flex>
                <Flex direction="column" pl={5} pr={3} mb={2}>
                  <Text fontSize="14px" whiteSpace="pre-line" mb={5}>
                    {data.detail?.content}
                  </Text>
                  <Text fontSize="11px" color="gray.400">
                    {moment(data.detail?.created_at)
                      .from(new Date())
                      .toUpperCase()}
                  </Text>
                </Flex>
                {data.comment === null && <Text>No comments yet</Text>}
                {data.comments?.map((item, index) => (
                  <Flex
                    key={index}
                    mb={4}
                    px={5}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Flex>
                      <Avatar size="xs" src={item.profil_pic} />
                      <Text ml={4} fontSize="14px">
                        <b>{item.username}</b> {item.content}
                        <Text fontSize="10px" mt={2} color="gray.400">
                          {moment(item.created_at)
                            .from(new Date())
                            .toUpperCase()}
                        </Text>
                      </Text>
                    </Flex>
                    {userProfile?.user_id === item.user_id && (
                      <Button
                        variant="ghost"
                        _hover={{ bg: "transparent" }}
                        size="xs"
                        onClick={() => deleteComments(item.comment_id)}
                      >
                        <DeleteIcon color="red.500" />
                      </Button>
                    )}
                  </Flex>
                ))}
              </Box>
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
                      type="submit"
                      fontSize="sm"
                      color="blue.500"
                      onClick={() =>
                        createComments({
                          post_id: posting.post_id,
                          content: comment,
                        })
                      }
                    >
                      Post
                    </Text>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </ModalBody>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalListComment;
