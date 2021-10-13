import { Flex, Text, Box, Avatar, Image, Button } from "@chakra-ui/react";

export default function CardUserPosting(props) {
  const { data, onOpen } = props;

  return (
    <>
      <Box
        px={6}
        py={6}
        rounded="lg"
        borderColor="#E5E5E5"
        borderWidth="2px"
        mb={8}
      >
        <Image alignItems="center" src={data.image} mb={5} />
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar
              size="sm"
              mr={4}
              name={data.username}
              src={data.profil_pic}
            />
            <Text fontWeight="semibold" fontSize="20px">
              {data.username}
            </Text>
          </Flex>
          <Text>{data.total_like} Likes</Text>
        </Flex>
        <Text mt={4} mb={4}>
          {data.content}
        </Text>
        <Flex>
          <Button
            size="sm"
            bg="white"
            _hover={{ bg: "white" }}
            onClick={onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
            >
              <g data-name="icons comment">
                <g data-name="message-square">
                  <rect width="6" height="8" opacity="0" />
                  <circle cx="12" cy="11" r="1" />
                  <circle cx="16" cy="11" r="1" />
                  <circle cx="8" cy="11" r="1" />
                  <path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
                </g>
              </g>
            </svg>
          </Button>
          <Button size="sm" bg="white" _hover={{ bg: "white" }} ml={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
            >
              <g data-name="icons like">
                <g data-name="heart">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
                </g>
              </g>
            </svg>
          </Button>
        </Flex>
      </Box>
    </>
  );
}
