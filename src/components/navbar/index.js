import React, { useState } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import {
  IconUser,
  IconSearch,
  IconPost,
  IconHome,
  IconHomeActive,
  IconMessage,
  IconMessageActive,
  IconSave,
  IconSetting,
} from "components";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { openPosting, user, openSearch } = props;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const [newActiveLink, setNewActiveLink] = useState(false);

  return (
    <>
      <Flex
        height="4rem"
        px={{ base: "1rem", md: "1.5rem", lg: "20rem" }}
        alignItems="center"
        bg="#F6F6F6"
        w="full"
        position="fixed"
        zIndex="5"
        justifyContent="space-between"
      >
        <Text fontWeight="semibold" fontSize="20px" as={Link} to="/home">
          SISOS
        </Text>
        <Button
          mx="7rem"
          leftIcon={<IconSearch />}
          width="15%"
          rounded="full"
          bg="white"
          color="gray.500"
          _hover={{ bg: "#E5E5E5" }}
          fontSize="xs"
          size="sm"
          onClick={openSearch}
        >
          Cari
        </Button>
        <Flex alignItems="center">
          <NavLink
            style={{ marginRight: "10px" }}
            to="/home"
            isActive={(match, location) => {
              match ? setNewActiveLink(true) : setNewActiveLink(false);
              return match;
            }}
          >
            {newActiveLink === true ? <IconHome /> : <IconHomeActive />}
          </NavLink>
          <NavLink
            mx={2}
            to="/direct/inbox"
            isActive={(match, location) => {
              match ? setNewActiveLink(true) : setNewActiveLink(false);
              return match;
            }}
          >
            {newActiveLink !== true ? <IconMessage /> : <IconMessageActive />}
          </NavLink>
          <IconButton
            aria-label="Tombol New Post"
            icon={<IconPost />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            onClick={openPosting}
          />
          <Menu isLazy lazyBehavior="unmount">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              <Avatar size="xs" src={user?.profil_pic} />
            </MenuButton>
            <MenuList
              minH="48px"
              border="0"
              boxShadow="md"
              rounded="lg"
              tabIndex={0}
            >
              <MenuItem
                icon={<IconUser width="18" height="18" />}
                as={Link}
                to={`/${user.username}`}
                fontSize="sm"
              >
                Profil
              </MenuItem>
              <MenuItem
                icon={<IconSave width="18" height="18" />}
                as={Link}
                to={`/${user.username}`}
                fontSize="sm"
              >
                Disimpan
              </MenuItem>
              <MenuItem
                icon={<IconSetting width="18" height="18" />}
                as={Link}
                to="/setting/accounts/edit"
                fontSize="sm"
              >
                Pengaturan
              </MenuItem>
              <MenuDivider borderColor="gray.300" />
              <MenuItem onClick={handleLogout} fontSize="sm">
                Keluar
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
