import React from "react";
import {
  Divider,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

const ModalSearch = (props) => {
  const { isOpenMore, onCloseMore } = props;

  return (
    <Modal isOpen={isOpenMore} onClose={onCloseMore} isCentered size="sm">
      <ModalOverlay />
      <ModalContent rounded="3xl">
        <ModalBody>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            fontSize="sm"
          >
            <Text fontWeight="semibold" pb={3} pt={2} color="#ED4956">
              Laporkan
            </Text>
            <Divider />
            <Text py={3}>Buka Kiriman</Text>
            <Divider />
            <Text py={3}>Bagikan ke...</Text>
            <Divider />
            <Text py={3}>Salin Tautan</Text>
            <Divider />
            <Text pt={3} pb={2}>
              Batal
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalSearch;
