import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import {
  CardProfile,
  IconOption,
  IconPosting,
  IconSave,
  IconTagged,
} from "components";
import UserContext from "context/user/UserContext";
import { CardPost } from "components";
import homeRequest from "api/home";
import userRequest from "api/user";

export default function Profile() {
  const [posting, setPosting] = useState([]);
  const [stats, setStats] = useState([]);
  const { username } = useParams();
  const { userProfile } = useContext(UserContext);

  const getPostingSelf = async (id) => {
    const response = await homeRequest.getPostingSelf(id);
    setPosting(response.data);
  };

  const getStats = async (username) => {
    const response = await userRequest.getUserStats(username);
    getPostingSelf(response.data.user_id);
    setStats(response.data);
  };

  const likePosting = async (id) => {
    try {
      await homeRequest.likePosting({ post_id: id });
      getPostingSelf(stats.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  const unLikePosting = async (id) => {
    try {
      await homeRequest.unLikePosting(id);
      getPostingSelf(stats.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Profile • Sisos";
    getStats(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <CardProfile>
      <Flex>
        <Avatar size="2xl" src={stats.profil_pic} />
        <Flex ml="7rem" direction="column">
          <HStack alignItems="center">
            <Text fontSize="28px">{stats.username}</Text>
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
            <IconButton icon={<IconOption />} variant="link" />
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
          <Text>"{stats.bio}"</Text>
        </Flex>
      </Flex>
      <HStack
        spacing={12}
        py={14}
        justifyContent="center"
        fontSize="sm"
        fontWeight="semibold"
      >
        <NavLink to={`/${stats.username}`}>
          <IconPosting width="15px" mr={1} /> POSTINGAN
        </NavLink>
        <NavLink to={`/${stats.username}/saved`}>
          <IconSave width="15px" mr={1} /> TERSIMPAN
        </NavLink>
        <NavLink to={`/${stats.username}/tagged`}>
          <IconTagged width="15px" mr={1} /> DITANDAI
        </NavLink>
      </HStack>
      <Divider />
      {posting.map((item, index) => (
        <CardPost
          data={item}
          user={userProfile}
          key={index}
          getPost={getPostingSelf}
          likePosting={likePosting}
          unLikePosting={unLikePosting}
        />
      ))}
    </CardProfile>
  );
}
