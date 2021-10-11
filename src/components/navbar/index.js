import { Flex, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";
import { FiSettings, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Flex
        height="5rem"
        px="10rem"
        alignItems="center"
        bg="white"
        boxShadow="sm"
        justifyContent="space-between"
      >
        <Text fontWeight="semibold" fontSize="22px">
          SISOS
        </Text>
        <InputGroup mr={20} ml={20}>
          <Input
            type="tel"
            placeholder="Search email or username"
            bg="#F2F2F2"
            _focus={{
              borderColor: "gray.600",
            }}
          />
        </InputGroup>
        <Menu isLazy>
          <MenuButton>
            <Avatar size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<RiUserLine />}>Profile</MenuItem>
            <MenuItem icon={<FiSettings />}>Setting</MenuItem>
            <MenuDivider />
            <MenuItem
              color="#FF4C4C"
              icon={<FiLogOut />}
              onClick={handleLogout}
            >
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Navbar;
