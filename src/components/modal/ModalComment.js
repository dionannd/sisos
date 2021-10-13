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

const ModalTransaction = (props) => {
  const { data, isOpen, onClose } = props;

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
              focusBorderColor="#C4C4C4"
              h="10rem"
              placeholder="Comment here..."
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex>
            <Button
              fontWeight="reguler"
              bg="white"
              _hover={{ bg: "white" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button fontWeight="reguler" bg="#C4C4C4" ml={2}>
              Comment
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalTransaction;
