import { SearchIcon } from "@chakra-ui/icons";
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
  InputLeftElement,
} from "@chakra-ui/react";
import { IconUser, SettingIcon, IconPost } from "components";
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
        height="3.4rem"
        px={{ base: "1rem", md: "1.5rem", lg: "13rem" }}
        alignItems="center"
        top={0}
        bg="white"
        w="full"
        position="fixed"
        zIndex="1"
        borderBottomWidth="1px"
        justifyContent="space-between"
      >
        <Text fontWeight="500" fontSize="22px" mt={1.5}>
          SISOS
        </Text>
        <InputGroup
          mr={{ base: 1, sm: 1, md: 3, lg: "5.5rem" }}
          ml={{ base: 4, lg: "7rem", md: 5 }}
        >
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="12px"
            pb="0.6rem"
            children={<SearchIcon />}
          />
          <Input
            type="tel"
            placeholder="Search"
            size="sm"
            bg="#F2F2F2"
            _focus={{
              borderColor: "gray.300",
              borderWidth: "1px",
            }}
          />
        </InputGroup>
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
                to={`/${user.username}/`}
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
