import React, { useEffect, useContext, useState, useRef } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CardSetting } from "components";
import UserContext from "context/user/UserContext";
import userRequest from "api/user";

export default function EditProfile() {
  const { userProfile } = useContext(UserContext);
  const [data, setData] = useState(userProfile);
  const [isLoading, setLoading] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const inputFile = useRef(null);

  const editProfile = async (body, id) => {
    try {
      setLoading(true);
      const res = await userRequest.editUser(body, id);
      localStorage.setItem("token", res.token);
      setAlertSuccess(true);
    } catch (error) {
      setAlertError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeProfilPic = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      await userRequest.updateProfilePic(formData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Edit Profile | Sisos";

    setData(userProfile);
  }, [userProfile]);
  return (
    <CardSetting>
      {alertSuccess && (
        <Alert status="success" variant="left-accent" rounded="md">
          <AlertIcon />
          <AlertTitle mr={2} fontSize="sm">
            Ok!
          </AlertTitle>
          <AlertDescription fontSize="sm">
            Data berhasil diperbarui.
          </AlertDescription>
        </Alert>
      )}
      {alertError && (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>Terjadi kesalahan server.</AlertDescription>
        </Alert>
      )}
      <Flex p={4} ml="5rem" mb={1}>
        <Avatar
          src={userProfile.profil_pic}
          width="40px"
          height="40px"
          ml="0.2rem"
          border="0.5px"
        />
        <Flex ml={10} direction="column">
          <Text fontSize="20px">{userProfile.username}</Text>
          <Menu isLazy>
            <MenuButton
              color="cyan.500"
              fontSize="14px"
              fontWeight="semibold"
              mt="-0.5rem"
            >
              Change Profil Pic
            </MenuButton>
            <MenuList>
              <form onSubmit={changeProfilPic} encType="multipart/form-data">
                <MenuItem fontSize="12px" fontWeight="bold">
                  <Text onClick={() => inputFile.current.click()}>
                    <input
                      type="file"
                      id="file"
                      name="image_posting"
                      ref={inputFile}
                      style={{ display: "none" }}
                      onChange="submit"
                    />
                    Upload Foto
                  </Text>
                </MenuItem>
              </form>
              <MenuItem fontSize="12px" fontWeight="bold" color="red.500">
                Remove Foto
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <FormControl px={3} ml="5rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">Name</FormLabel>
          <Flex direction="column">
            <Input
              type="text"
              size="sm"
              defaultValue={userProfile.fullname}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              borderWidth="1px"
              borderColor="gray.200"
              bgColor="transparent"
              _focus={{ borderWidth: "2px", borderColor: "black" }}
              width="23rem"
              ml={7}
            />
            <Box my={5} ml={7} color="gray.500">
              <Text fontSize="12px">
                Bantu orang menemukan akun Anda menggunakan nama yang
              </Text>
              <Text fontSize="12px">
                orang-orang kenali tentang Anda: baik nama lengkap, maupun
              </Text>
              <Text fontSize="12px"> nama panggilan Anda.</Text>
            </Box>
          </Flex>
        </Flex>
      </FormControl>
      <FormControl px={3} mb={5} ml="2.8rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">Username</FormLabel>
          <Input
            type="text"
            defaultValue={userProfile.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            size="sm"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="transparent"
            _focus={{ borderWidth: "2px", borderColor: "black" }}
            width="23rem"
            ml={7}
          />
        </Flex>
      </FormControl>
      <FormControl px={3} ml="6rem" mb={5}>
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="Bold">Bio</FormLabel>
          <Flex direction="column">
            <Textarea
              type="text"
              defaultValue={userProfile.bio}
              onChange={(e) => setData({ ...data, bio: e.target.value })}
              size="sm"
              borderWidth="1px"
              borderColor="gray.200"
              bgColor="transparent"
              _focus={{ borderWidth: "2px", borderColor: "black" }}
              width="23rem"
              ml={7}
              mb={8}
            />
            <Box ml={7} color="gray.500">
              <Text fontWeight="bold" fontSize="15px">
                Informasi Pribadi
              </Text>
              <Text fontSize="12px">
                Berikan informasi pribadi Anda, bahkan jika akun digunakan untuk
              </Text>
              <Text fontSize="12px">
                bisnis, hewan peliharaan, atau hal lainnya. Ini tidak akan
                menjadi
              </Text>
              <Text fontSize="12px">bagian profil publik Anda.</Text>
            </Box>
          </Flex>
        </Flex>
      </FormControl>
      <FormControl px={3} ml="5rem" mb={6}>
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">Email</FormLabel>
          <Input
            type="text"
            defaultValue={userProfile.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            size="sm"
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="transparent"
            _focus={{ borderWidth: "2px", borderColor: "black" }}
            width="23rem"
            ml={7}
          />
        </Flex>
      </FormControl>
      <Button
        size="sm"
        variant="gray"
        fontSize="12px"
        rounded="sm"
        ml="11rem"
        onClick={() => editProfile(data, userProfile.user_id)}
        isLoading={isLoading}
        loadingText="Memproses"
      >
        Save
      </Button>
    </CardSetting>
  );
}
