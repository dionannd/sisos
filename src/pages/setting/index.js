import React, { useEffect, useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CardSetting } from "components";
import UserContext from "context/user/UserContext";

export default function EditProfile() {
  const { userProfile } = useContext(UserContext);

  useEffect(() => {
    document.title = "Edit Profile | Sisos";
  }, []);
  return (
    <CardSetting>
      <Flex p={4} ml="5rem" mb={1}>
        <Avatar width="40px" height="40px" ml="0.2rem" />
        <Flex ml={10} direction="column">
          <Text fontSize="20px">Jhon Doe</Text>
          <Text
            as="button"
            color="cyan.500"
            fontSize="14px"
            fontWeight="semibold"
          >
            Change Profil Pic
          </Text>
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
      <Button size="sm" variant="gray" fontSize="12px" ml="11rem">
        Save
      </Button>
    </CardSetting>
  );
}
