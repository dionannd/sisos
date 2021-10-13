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
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { IconGallery } from "components";
import homeRequest from "api/home";

const ModalPosting = (props) => {
  const { isOpen, onClose } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const inputFile = React.useRef(null);

  const selectFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const getPosting = async () => {
    await homeRequest.getUserPosting();
  };

  const submitPosting = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formData = new FormData(e.target);
      await homeRequest.newPosting(formData);
      onClose();
      getPosting();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={submitPosting} encType="multipart/form-data">
          <ModalHeader>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="reguler">New Posting</Text>
              <Button
                variant="ghost"
                onClick={() => inputFile.current.click()}
                p={0}
              >
                <input
                  type="file"
                  id="file"
                  name="image_posting"
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={(e) => selectFile(e)}
                />

                <IconGallery h="30px" w="30px" />
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex>
              <FormControl isRequired="true" mr={2}>
                <Textarea
                  p={0}
                  name="content"
                  border={0}
                  _focus={{ border: 0 }}
                  placeholder="Write a caption..."
                />
              </FormControl>
              {file && <Image src={file} boxSize="50px" />}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                ml={2}
                isLoading={isLoading}
                loadingText="Please wait..."
              >
                Post
              </Button>
            </Flex>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalPosting;
