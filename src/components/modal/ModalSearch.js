import React, { useState, useEffect } from "react";
import {
  Avatar,
  Divider,
  Flex,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import userRequest from "api/user";
import { Link } from "react-router-dom";

const ModalSearch = (props) => {
  const { isOpenSearch, onCloseSearch } = props;
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const searchUser = async (q) => {
    const res = await userRequest.searchUsers(q);
    setUser(res.data);
  };

  const handlerSearch = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    searchUser(search);
  }, [search]);

  return (
    <Modal isOpen={isOpenSearch} onClose={onCloseSearch} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex alignItems="center">
            <SearchIcon color="gray.500" />
            <Input
              type="tel"
              onChange={(e) => handlerSearch(e.target.value)}
              value={search}
              placeholder="Search other people"
              ml={2}
              borderWidth="0"
              _focus={{ borderWidth: "0" }}
            />
          </Flex>
        </ModalHeader>
        {search.length !== 0 && <Divider />}
        {search.length !== 0 &&
          user.map((item, index) => (
            <ModalBody>
              <Flex
                alignItems="center"
                as={Link}
                to={`/${item.username}`}
                onClick={() => {
                  onCloseSearch();
                  setSearch("");
                }}
                mb={1}
              >
                <Avatar src={item.profil_pic} size="md" />
                <Flex direction="column">
                  <Text key={index} ml={3} fontWeight="bold">
                    {item.username}
                  </Text>
                  <Text key={index} ml={3} color="gray.500" mt="-0.5rem">
                    {item.fullname}
                  </Text>
                </Flex>
              </Flex>
            </ModalBody>
          ))}
      </ModalContent>
    </Modal>
  );
};

export default ModalSearch;
