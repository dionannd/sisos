import { CloseIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Divider,
  Avatar,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

const ModalListComment = (props) => {
  const { data, isOpenComment, onCloseComment, deleteComments } = props;

  return (
    <Modal isOpen={isOpenComment} onClose={onCloseComment} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody mb={4} pt={5}>
          <Flex mb={4}>
            <Avatar size="sm" src={data.detail?.profil_pic} />
            <Text ml={4} mt={1} fontSize="14px">
              <b>{data.detail?.username}</b>
              <Text fontSize="14px" whiteSpace="pre-line">
                {data.detail?.content}
              </Text>
            </Text>
          </Flex>
          <Divider mb={5} />
          {data.comments?.map((item, index) => (
            <Flex
              key={index}
              mb={5}
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex>
                <Avatar size="sm" src={item.profil_pic} />
                <Text ml={4} mt={1} fontSize="14px">
                  <b>{item.username}</b>
                  <Text fontSize="14px" whiteSpace="pre-line">
                    {item.content}
                  </Text>
                </Text>
              </Flex>
              <Button
                variant="ghost"
                _hover={{ bg: "transparent" }}
                size="xs"
                onClick={() => deleteComments(item.comment_id)}
              >
                <CloseIcon color="red.500" />
              </Button>
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalListComment;
