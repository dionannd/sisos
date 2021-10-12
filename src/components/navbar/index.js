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
        px={{ base: "3rem", lg: "10rem", md: "6rem" }}
        alignItems="center"
        bg="white"
        boxShadow="sm"
        justifyContent="space-between"
      >
        <Text fontWeight="semibold" fontSize="22px">
          SISOS
        </Text>
        <InputGroup
          mr={{ base: 3, lg: "7.5rem", md: 5 }}
          ml={{ base: 3, lg: "5.5rem", md: 5 }}
        >
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
