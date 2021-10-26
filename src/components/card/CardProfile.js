import {
  Avatar,
  Button,
  Box,
  Flex,
  Text,
  Stack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CardProfile = ({ stats, self, children, ...rest }) => {
  return (
    <>
      <Flex
        {...rest}
        px={{ sm: "1rem", lg: -2 }}
        mt={{ base: -8, lg: -2 }}
        direction="column"
      >
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
              <Text ml={7} fontWeight="bold" mt={1} fontSize="xl">
                {stats?.fullname}
              </Text>
              <Text ml={7} color="gray.500" fontSize="sm" mt={-2}>
                {stats?.total_post} Posts
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box borderWidth="1px">
          <Flex px={5} justifyContent="space-between">
            <Avatar
              mt={2}
              width="130px"
              height="130px"
              src={self?.profil_pic}
            />
            {stats.user_id === self.user_id && (
              <Button
                mt={2}
                variant="outline"
                rounded="sm"
                size="sm"
                fontSize="14px"
              >
                Edit Profile
              </Button>
            )}
            {stats.user_id !== self.user_id && (
              <Button
                mt={2}
                rounded="sm"
                colorScheme="blue"
                size="sm"
                fontSize="14px"
              >
                Follow
              </Button>
            )}
          </Flex>
          <Stack spacing={2} mb={5} ml={5} mt={2}>
            <Flex direction="column">
              <Heading fontSize={"xl"} fontWeight={600}>
                {stats?.fullname}
              </Heading>
              <Text color="gray.500" mt={-1}>
                @{stats.username}
              </Text>
            </Flex>
            <Text>“{stats.bio}”</Text>
            <Flex mb={4}>
              <Flex>
                <Text>
                  <b>{stats?.total_follower}</b>
                </Text>
                <Text ml={1} color="gray.500">
                  Mengikuti
                </Text>
              </Flex>
              <Flex ml={5}>
                <Text>
                  <b>{stats?.total_following}</b>
                </Text>
                <Text ml={1} color="gray.500">
                  Following
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>
        <Box
          w="100%"
          mb={{ base: "0", md: "5", lg: "5" }}
          borderWidth="1px"
          borderTop="0"
        >
          <Flex alignItems={"center"} justifyContent="center">
            {stats.user_id === self.user_id && (
              <Box w="35%">
                <Button
                  bg="transparent"
                  rounded={0}
                  w="full"
                  as={Link}
                  to={`/${stats.username}/`}
                >
                  Posting
                </Button>
              </Box>
            )}
            {stats.user_id === self.user_id && (
              <Box w="30%">
                <Button
                  bg="transparent"
                  rounded={0}
                  w="full"
                  as={Link}
                  to={`/${stats.username}/saved/`}
                >
                  Saved
                </Button>
              </Box>
            )}
            {stats.user_id === self.user_id && (
              <Box w="35%">
                <Button
                  bg="transparent"
                  rounded={0}
                  w="full"
                  as={Link}
                  to={`/${stats.username}/tagged/`}
                >
                  Tagged
                </Button>
              </Box>
            )}
            {stats.user_id !== self.user_id && (
              <Box w="50%">
                <Button
                  bg="transparent"
                  rounded={0}
                  w="full"
                  as={Link}
                  to={`/${stats.username}/`}
                >
                  Posting
                </Button>
              </Box>
            )}
            {stats.user_id !== self.user_id && (
              <Box w="50%">
                <Button
                  bg="transparent"
                  rounded={0}
                  w="full"
                  as={Link}
                  to={`/${stats.username}/tagged/`}
                >
                  Tagged
                </Button>
              </Box>
            )}
          </Flex>
        </Box>
        {children}
      </Flex>
    </>
  );
};

export default CardProfile;
