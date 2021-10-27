import React, { useEffect, useContext, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CardSetting } from "components";
import UserContext from "context/user/UserContext";
import userRequest from "api/user";

export default function EditProfile() {
  const { userProfile } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [alertSuccess, setAlertSuccess] = useState(false);
  const toast = useToast();

  const notif = (title, message, type) => {
    toast({
      title: title,
      description: message,
      status: type,
      duration: 3000,
      isClosable: true,
      position: "top-right",
      variant: "left-accent",
    });
  };

  const changePassword = async () => {
    try {
      setLoading(true);
      await userRequest.updatePassword(data);
      setData({});
      setAlertSuccess(true);
    } catch (error) {
      notif("Error!", error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Edit Profile | Sisos";
  }, []);
  return (
    <CardSetting>
      {alertSuccess && (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          <AlertTitle mr={2}>Berhasil!</AlertTitle>
          <AlertDescription>Password berhasil diubah.</AlertDescription>
        </Alert>
      )}
      <Flex p={4} ml="4.9rem" mb={4}>
        <Avatar
          src={userProfile.profil_pic}
          width="40px"
          height="40px"
          ml="0.2rem"
        />
        <Flex ml={10} direction="column">
          <Text fontSize="24px">{userProfile.username}</Text>
        </Flex>
      </Flex>
      <FormControl px={3} mb={5} ml="1rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">Old Password</FormLabel>
          <Input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
            isRequired={true}
          />
        </Flex>
      </FormControl>
      <FormControl px={3} mb={5} ml="0.6rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="bold">New Password</FormLabel>
          <Input
            type="password"
            value={data.password_new}
            onChange={(e) => setData({ ...data, password_new: e.target.value })}
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
            isRequired={true}
          />
        </Flex>
      </FormControl>
      <FormControl px={3} mb={6} ml="-0.1rem">
        <Flex justifyContent="-moz-initial">
          <FormLabel fontWeight="Bold">Verify Password</FormLabel>
          <Input
            type="password"
            value={data.password_confirm}
            onChange={(e) =>
              setData({ ...data, password_confirm: e.target.value })
            }
            borderWidth="1px"
            borderColor="gray.200"
            bgColor="gray.50"
            _focus={{ borderWidth: "1px", borderColor: "gray.400" }}
            width="23rem"
            ml={7}
            isRequired={true}
          />
        </Flex>
      </FormControl>
      <Button
        size="sm"
        variant="gray"
        fontSize="12px"
        ml="11rem"
        onClick={changePassword}
        isLoading={isLoading}
        loadingText="Memproses"
      >
        Change Password
      </Button>
    </CardSetting>
  );
}
