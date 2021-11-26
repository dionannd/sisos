import React from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  IconUser,
  SettingIcon,
  IconPost,
  IconHome,
  IconMessage,
} from "components";
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
        height="4rem"
        px={{ base: "1rem", md: "1.5rem", lg: "13rem" }}
        alignItems="center"
        bg="#F6F6F6"
        w="full"
        position="fixed"
        zIndex="5"
        borderBottomWidth="1px"
        justifyContent="space-between"
      >
        <Text fontWeight="semibold" fontSize="20px" as={Link} to="/home">
          SISOS
        </Text>
        <Button
          mr={{ base: 1, sm: 1, md: 3, lg: "5.5rem" }}
          ml={{ base: 4, lg: "7rem", md: 9 }}
          leftIcon={<SearchIcon mr={2} />}
          width="15%"
          rounded="full"
          bg="white"
          color="gray.500"
          _hover={{ bg: "#E5E5E5" }}
          fontWeight="normal"
          onClick={openSearch}
        >
          Search
        </Button>
        <HStack>
          <IconButton
            aria-label="Tombol Home"
            icon={<IconHome />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
          <IconButton
            aria-label="Tombol DM"
            icon={<IconMessage />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
          <IconButton
            aria-label="Tombol New Post"
            icon={<IconPost />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            mb={4}
            onClick={openPosting}
          />
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
