import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CardUserPosting, ModalComment } from "components";
import homeRequest from "api/home";
import { useDisclosure } from "@chakra-ui/react";

export default function HomePage() {
  const [posting, setPosting] = useState([]);

  const getPosting = async () => {
    const response = await homeRequest.getUserPosting();
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
        <CardUserPosting
          data={item}
          key={index}
          onOpen={onOpen}
        ></CardUserPosting>
      ))}
      <ModalComment isOpen={isOpen} onClose={onClose} />
    </>
  );
}
