import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
  HStack,
} from "@chakra-ui/react";
import { IconUser, SettingIcon, IconPost } from "components";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { openPosting, user, openSearch } = props;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Flex
        height="3.4rem"
        px={{ base: "1rem", md: "1.5rem", lg: "13rem" }}
        alignItems="center"
        bg="white"
        w="full"
        position="fixed"
        zIndex="1"
        borderBottomWidth="1px"
        justifyContent="space-between"
      >
        <Text fontWeight="500" fontSize="22px" mt={1.5} as={Link} to="/home">
          SISOS
        </Text>
        <Button
          mr={{ base: 1, sm: 1, md: 3, lg: "5.5rem" }}
          ml={{ base: 4, lg: "7rem", md: 9 }}
          width="full"
          leftIcon={<SearchIcon mr={2} />}
          size="sm"
          rounded="sm"
          bgColor="gray.100"
          color="gray.400"
          fontWeight="normal"
          onClick={openSearch}
        >
          Search
        </Button>
        <HStack>
          <Button
            variant="ghost"
            _hover={{ bg: "transparent" }}
            _focus={{ borderWidth: 0 }}
            _active={{ borderWidth: 0, bg: "white" }}
            onClick={openPosting}
          >
            <IconPost h="26px" w="26px" />
          </Button>
          <Menu isLazy lazyBehavior="unmount">
            <MenuButton>
              <Avatar size="xs" src={user?.profil_pic} />
            </MenuButton>
            <MenuList
              minH="48px"
              border="0"
              boxShadow="md"
              rounded="lg"
              fontWeight="800"
              color="gray.600"
              tabIndex={0}
            >
              <MenuItem
                icon={<IconUser />}
                as={Link}
                to={`/${user.username}`}
                fontWeight="400"
                fontSize="14px"
              >
                Profile
              </MenuItem>
              <MenuItem
                icon={<SettingIcon />}
                as={Link}
                to="/setting/accounts/edit"
                fontWeight="400"
                fontSize="14px"
              >
                Setting
              </MenuItem>
              <MenuDivider borderColor="gray.300" />
              <MenuItem color="#FF4C4C" onClick={handleLogout} fontSize="14px">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
