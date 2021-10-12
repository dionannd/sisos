import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CardHome, ModalComment } from "components";
import homeRequest from "api/home";
import { useDisclosure } from "@chakra-ui/react";

export default function HomePage() {
  const [posting, setPosting] = useState([]);

  const getPosting = async () => {
    const response = await homeRequest.getPosting();
    setPosting(response.data);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getPosting();
  });
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {posting.map((item, index) => (
        <CardHome data={item} key={index} onOpen={onOpen}></CardHome>
      ))}
      <ModalComment isOpen={isOpen} onClose={onClose} />
    </>
  );
}
