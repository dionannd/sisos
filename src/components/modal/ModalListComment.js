import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Divider,
  Avatar,
  Flex,
  Text,
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
    <Modal isOpen={isOpenComment} onClose={onCloseComment} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          px={5}
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
          <Box maxH="30rem" overflowY="auto">
            <Flex mb={4} px={5} pt={5}>
              <Avatar size="sm" src={data.detail?.profil_pic} />
              <Text ml={4} mt={1} fontSize="14px">
                <b>{data.detail?.username}</b>
                <Text fontSize="14px" whiteSpace="pre-line">
                  {data.detail?.content}
                </Text>
                <Text fontSize="11px" mt={2} color="gray.400">
                  {moment(data.detail?.created_at).from(new Date())}
                </Text>
              </Text>
            </Flex>
            <Divider mb={5} />
            {data.comments?.map((item, index) => (
              <Flex
                key={index}
                mb={5}
                px={5}
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex>
                  <Avatar size="sm" src={item.profil_pic} />
                  <Text ml={4} fontSize="14px">
                    <b>{item.username}</b>
                    <Text fontSize="14px" whiteSpace="pre-line">
                      {item.content}
                    </Text>
                    <Text fontSize="11px" mt={2} color="gray.400">
                      {moment(item.created_at).from(new Date())}
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
          <Divider />
          <FormControl>
            <InputGroup size="md" alignItems="center" py={4}>
              <Input
                pr="4.5rem"
                placeholder="Add a comment..."
                border={0}
                value={comment}
                _focus={{ border: 0 }}
                onChange={(e) => setComment(e.target.value)}
              />
              <InputRightElement width="4.5rem" top={4}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    createComments({
                      post_id: posting.post_id,
                      content: comment,
                    })
                  }
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalListComment;
