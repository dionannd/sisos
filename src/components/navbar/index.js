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
  Button,
  HStack,
} from "@chakra-ui/react";
import { IconUser, SettingIcon, SignOutIcon, IconPost } from "components";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { openPosting, user } = props;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <Flex
        height="5rem"
        px={{ base: "1rem", md: "3rem", lg: "10rem" }}
        alignItems="center"
        top={0}
        bg="white"
        w="full"
        position="fixed"
        zIndex="1"
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
              borderWidth: "0px",
            }}
          />
        </InputGroup>
        <HStack spacing={2}>
          <Button
            variant="ghost"
            _hover={{ bg: "transparent" }}
            onClick={openPosting}
          >
            <IconPost h="35px" w="35px" />
          </Button>
          <Menu isLazy lazyBehavior="unmount">
            <MenuButton>
              <Avatar size="sm" src={user?.profil_pic} />
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
                to="/setting/profile"
                fontWeight="400"
              >
                Profile
              </MenuItem>
              <MenuItem icon={<SettingIcon />}>Setting</MenuItem>
              <MenuDivider borderColor="gray.100" />
              <MenuItem
                color="#FF4C4C"
                icon={<SignOutIcon />}
                onClick={handleLogout}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
