/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardPostDetail } from "components";
import homeRequest from "api/home";
import UserContext from "context/user/UserContext";

export default function DetailPostPage() {
  const [posting, setPosting] = useState([]);

  const { userProfile } = useContext(UserContext);
  const { id } = useParams();

  const getDetailPost = async () => {
    const res = await homeRequest.getDetailPosting(id);
    setPosting(res);
  };

  useEffect(() => {
    document.title = "Detail Post";
    getDetailPost();
  }, []);

  return (
    <CardPostDetail
      data={posting}
      user={userProfile}
      getComments={getDetailPost}
    />
  );
}
