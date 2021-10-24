import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const CardProfile = ({ stats, self, ...rest }) => {
  return (
    <Flex
      mb={10}
      {...rest}
      px={{ base: "1rem", sm: "1rem" }}
      direction="column"
    >
      <Flex mb={7}>
        <Avatar width="150px" height="150px" src={self?.profil_pic} />
        <Box ml={20}>
          <Flex mb={4}>
            <Text fontSize="26px" fontWeight="normal">
              {stats?.username}
            </Text>
          </Flex>
          <Flex mb={4}>
            <Text>
              <b>{stats?.total_post}</b> posts
            </Text>
            <Text ml={10}>
              <b>{stats?.total_follower}</b> followers
            </Text>
            <Text ml={10}>
              <b>{stats?.total_following}</b> following
            </Text>
          </Flex>
          <Text>"{stats.bio}"</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardProfile;
