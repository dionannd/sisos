import React, { useContext, useEffect, useState } from "react";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CardProfile } from "components";
import homeRequest from "api/home";
import userRequest from "api/user";
import UserContext from "context/user/UserContext";

export default function Profile() {
  const [posting, setPosting] = useState([]);
  const [stats, setStats] = useState([]);
  const [readPost] = useState(true);
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

  useEffect(() => {
    document.title = "Profile • Sisos";
    getStats(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <CardProfile stats={stats} user={userProfile}>
      <SimpleGrid columns={3} spacingY="15px">
        {posting.map((item, index) => (
          <Box key={index}>
            {item.image !== null ? (
              <Image
                src={item.image}
                boxSize="200px"
                objectFit="cover"
                bg="#FAFAFA"
                rounded="xl"
                _hover={{ cursor: "pointer" }}
              />
            ) : (
              <Box
                width="200px"
                h="200px"
                bg="white"
                p={2}
                alignItems="center"
                rounded="xl"
                _hover={{ cursor: "pointer" }}
              >
                <Text isTruncated={readPost}>{item.content}</Text>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </CardProfile>
  );
}
