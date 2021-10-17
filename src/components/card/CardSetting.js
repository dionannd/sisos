import React, { useContext } from "react";
import { Flex, Button, Box, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserContext from "context/user/UserContext";

const CardSetting = ({ children }) => {
  const { userProfile } = useContext(UserContext);

  return (
    <Box
      px={4}
      rounded="md"
      borderColor="#E5E5E5"
      borderWidth={{ base: 0, sm: 0, md: "1px" }}
    >
      <Flex mt="1rem" mb="2rem">
        <Box mr={8}>
          <NavLink
            to="/setting/accounts/edit"
            activeClassName="is-active"
            variant="ghost"
            fontWeight="reguler"
          >
            Edit Profile
          </NavLink>
          <Divider mt={2} mb={2} />
          <NavLink
            to="/setting/accounts/password/change"
            variant="ghost"
            mb={2}
          >
            Change Password
          </NavLink>
          <Divider mt={2} mb={2} />
          <NavLink to="/session/activity" variant="ghost">
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
        <Box mt={6} ml={5} data={userProfile}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default CardSetting;
