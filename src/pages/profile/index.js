import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { CardProfile } from "components";
import UserContext from "context/user/UserContext";
import { CardUserPosting } from "components";
import homeRequest from "api/home";
import userRequest from "api/user";
import { useParams } from "react-router-dom";

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
    document.title = "Profile | Sisos";
    getStats(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CardProfile maxW="36rem" self={userProfile} stats={stats} />
      <Flex>
        <Tabs mb={5} variant="unstyled">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Postingan</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Tersimpan</Tab>
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Ditandai</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justifyContent="center" direction="column">
                {posting.map((item, index) => (
                  <CardUserPosting
                    data={item}
                    user={userProfile}
                    key={index}
                    getPost={getPostingSelf}
                    likePosting={likePosting}
                    unLikePosting={unLikePosting}
                  />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text>Under maintenance</Text>
            </TabPanel>
            <TabPanel>
              <Text>Under maintenance</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
