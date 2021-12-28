import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IconOption, IconPosting, IconSave, IconTagged } from "components";

const CardProfile = ({ children, stats, user }) => {
  return (
    <Box w="40rem">
      <Flex>
        <Avatar size="2xl" src={stats.profil_pic} />
        <Flex ml="7rem" direction="column">
          <HStack
            alignItems="center"
            spacing={stats.user_id === user.user_id ? 2 : 4}
          >
            <Text fontSize="28px">{stats.username}</Text>
            {stats.user_id === user.user_id && (
              <>
                <Box
                  bg="#FAFAFA"
                  py={1}
                  px={2}
                  rounded="md"
                  border="1px"
                  borderColor="gray.300"
                >
                  <NavLink to="setting/accounts/edit">
                    <Text fontWeight="medium" fontSize="sm">
                      Edit Profile
                    </Text>
                  </NavLink>
                </Box>
                <IconButton icon={<IconOption />} variant="link" p={0} />
              </>
            )}
            {stats.user_id !== user.user_id && (
              <Box bg="#0095F6" py={0.5} rounded="md">
                <Text
                  as="button"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="white"
                  w="20"
                  p={0}
                  bg="transparent"
                >
                  Ikuti
                </Text>
              </Box>
            )}
          </HStack>
          <HStack spacing={10} py={5}>
            <Text>
              <b>{stats.total_post}</b> kiriman
            </Text>
            <Text>
              <b>{stats.total_follower}</b> pengikut
            </Text>
            <Text>
              <b>{stats.total_following}</b> diikutii
            </Text>
          </HStack>
          <Text fontWeight="semibold">{stats.fullname}</Text>
          <Text>{stats.bio}</Text>
        </Flex>
      </Flex>
      <HStack
        spacing={12}
        pt={14}
        pb={6}
        justifyContent="center"
        fontSize="sm"
        fontWeight="semibold"
      >
        <NavLink to={`/${stats.username}`}>
          <IconPosting width="15px" mr={1} /> POSTINGAN
        </NavLink>
        {stats.user_id === user.user_id && (
          <NavLink to={`/${stats.username}/saved`}>
            <IconSave width="15px" mr={1} /> TERSIMPAN
          </NavLink>
        )}
        <NavLink to={`/${stats.username}/tagged`}>
          <IconTagged width="15px" mr={1} /> DITANDAI
        </NavLink>
      </HStack>
      <Divider />
      {children}
    </Box>
  );
};

export default CardProfile;
