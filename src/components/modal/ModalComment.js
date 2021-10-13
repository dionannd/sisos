import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  Textarea,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ModalComment = (props) => {
  const { data, isOpen, onClose, createComments } = props;
  const [comment, setComment] = React.useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex alignItems="center">
            <Avatar size="sm" name={data.username} src={data.profil_pic} />
            <Text ml={5} fontWeight="reguler">
              {data.username}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <FormControl isRequired="true">
            <Textarea
              p={0}
              border={0}
              _focus={{ border: 0 }}
              h="10rem"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment here..."
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex>
            <Button
              fontWeight="reguler"
              variant="ghost"
              _hover={{ bg: "white" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={() => createComments(comment)}
              fontWeight="reguler"
              ml={2}
            >
              Comment
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComment;
