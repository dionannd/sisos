import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDisclosure } from "@chakra-ui/react";

import homeRequest from "api/home";
import userRequest from "api/user";
import { CardUserPosting, ModalComment } from "components";

export default function HomePage() {
  const [posting, setPosting] = useState([]);
  const [user, setUser] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUserLogin = async () => {
    const response = await userRequest.getUserLogin();
    setUser(response.data);
  };

  const getPosting = async () => {
    const response = await homeRequest.getUserPosting();
    setPosting(response.data);
  };

  useEffect(() => {
    getUserLogin();
    getPosting();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {posting.map((item, index) => (
        <CardUserPosting
          data={item}
          key={index}
          onOpen={onOpen}
        ></CardUserPosting>
      ))}
      <ModalComment data={user} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
