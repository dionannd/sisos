import React, { useContext } from "react";
import { Flex, Button, Box, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserContext from "context/user/UserContext";

const CardSetting = ({ children }) => {
  const { userProfile } = useContext(UserContext);

  return (
    <Flex mt="8rem" mb="5rem">
      <Box mr={8}>
        <NavLink
          to="/setting/profile"
          activeClassName="is-active"
          variant="ghost"
          fontWeight="reguler"
        >
          Edit Profile
        </NavLink>
        <Divider mt={2} mb={2} />
        <NavLink to="/setting/password" variant="ghost" mb={2}>
          Change Password
        </NavLink>
        <Divider mt={2} mb={2} />
        <NavLink to="/setting/activity" variant="ghost">
          Activity
        </NavLink>
        <Divider mt={2} mb={2} />
        <Button
          variant="link"
          color="#FF4C4C"
          mt={20}
          width="full"
          justifyContent="left"
          _hover={{ bg: "white" }}
        >
          Sign Out
        </Button>
      </Box>
      <Box ml={5} data={userProfile}>
        {children}
      </Box>
    </Flex>
  );
};

export default CardSetting;
