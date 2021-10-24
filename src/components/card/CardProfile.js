import {
  Avatar,
  Button,
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CardProfile = ({ stats, self, ...rest }) => {
  return (
    <Flex
      {...rest}
      px={{ sm: "1rem", lg: -2 }}
      mt={{ base: -8, lg: -2 }}
      direction="column"
    >
      <Box borderWidth={{ md: "1px", lg: "1px" }} borderBottom="0">
        <Flex py={1}>
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
            <Text ml={7} fontWeight="bold" mt={1} fontSize="18px">
              {stats?.username}
            </Text>
            <Text ml={7} color="gray.500" fontSize="14px" mt={-2}>
              {stats?.total_post} Posts
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box borderWidth="1px">
        <Image
          h={"170px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex px={5} justifyContent="space-between">
          <Avatar
            mt={-16}
            width="130px"
            height="130px"
            src={self?.profil_pic}
            css={{
              border: "5px solid white",
            }}
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
            <Heading fontSize={"2xl"} fontWeight={600}>
              {stats?.username}
            </Heading>
            <Flex mt={-1} color="gray.500">
              <Text>
                <EmailIcon />
              </Text>
              <Text ml={1}>{stats.email}</Text>
            </Flex>
          </Flex>
          <Text>“{stats.bio}”</Text>
          <Flex mb={4}>
            <Flex>
              <Text>
                <b>{stats?.total_follower}</b>
              </Text>
              <Text ml={1} color="gray.500">
                Followers
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
          {/* <Text color={"gray.500"}>Frontend Developer</Text> */}
        </Stack>
      </Box>
    </Flex>
  );
};

export default CardProfile;
