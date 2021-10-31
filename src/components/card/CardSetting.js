import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserContext from "context/user/UserContext";

const SidebarSetting = () => (
  <Box
    w="14.5rem"
    display={{ base: "none", lg: "inline" }}
    borderRight="1px"
    borderRightColor="gray.200"
  >
    <Flex direction="column" mt={3} ml={7}>
      <NavLink to="/setting/accounts/edit">
        <Text mb={6} fontFamily="roboto">
          Edit Profile
        </Text>
      </NavLink>
      <NavLink to="/setting/accounts/password/change">
        <Text mb={6} fontFamily="roboto">
          Change Password
        </Text>
      </NavLink>
      <NavLink to="/session/activity">
        <Text mb={6} fontFamily="roboto">
          Login Activity
        </Text>
      </NavLink>
      <Text mb={4} color="red.600">
        Sign Out
      </Text>
    </Flex>
  </Box>
);

const CardSetting = ({ children }) => {
  const { userProfile } = useContext(UserContext);

  return (
    <Flex borderWidth="1px" borderColor="gray.200">
      <SidebarSetting />
      <Box
        p={4}
        w="44.5rem"
        borderLeft={{ md: "1px red", lg: "1px red" }}
        user={userProfile}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default CardSetting;
