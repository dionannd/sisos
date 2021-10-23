import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CardUserPosting } from "components";
import homeRequest from "api/home";
import userRequest from "api/user";

const CardProfile = ({ self, ...rest }) => {
  const [posting, setPosting] = useState([]);
  const [stats, setStats] = useState([]);

  const getPostingSelf = async () => {
    const response = await homeRequest.getPostingSelf();
    setPosting(response.data);
  };

  const getStats = async (id) => {
    const response = await userRequest.getUserStats(id);
    setStats(response.data);
  };

  useEffect(() => {
    getPostingSelf();
    getStats();
  }, []);

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
              <b>0</b> followers
            </Text>
            <Text ml={10}>
              <b>0</b> following
            </Text>
          </Flex>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          </Text>
        </Box>
      </Flex>
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
                    key={index}
                    getPost={getPostingSelf}
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
    </Flex>
  );
};

export default CardProfile;
