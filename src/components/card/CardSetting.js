import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SidebarProfile = () => (
  <Box w="14.5rem">
    <Flex direction="column" mt={4} ml={7}>
      <NavLink to="/setting/accounts/edit">
        <Text mb={6} fontWeight="bold">
          Edit Profile
        </Text>
      </NavLink>
      <NavLink to="/setting/accounts/password/change">
        <Text mb={6}>Change Password</Text>
      </NavLink>
      <NavLink to="/session/activity">
        <Text mb="15rem">Login Activity</Text>
      </NavLink>
      <Text mb={4} color="red.600">
        Sign Out
      </Text>
    </Flex>
  </Box>
);

const CardSetting = ({ children }) => {
  return (
    <Flex borderWidth="1px" borderColor="gray.200">
      <SidebarProfile />
      <Box p={4} w="44.5rem" borderLeft="1px" borderColor="gray.200">
        {children}
      </Box>
    </Flex>
  );
};

export default CardSetting;
