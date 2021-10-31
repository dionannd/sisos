/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardPostDetail } from "components";
import homeRequest from "api/home";
import UserContext from "context/user/UserContext";

export default function DetailPostPage() {
  const [detail, setDetail] = useState([]);

  const { userProfile } = useContext(UserContext);
  const { id } = useParams();

  const getDetailPost = async () => {
    const res = await homeRequest.getDetailPosting(id);
    setDetail(res);
  };

  useEffect(() => {
    document.title = "Detail Post";
    getDetailPost();
  }, []);

  return <CardPostDetail data={detail} user={userProfile} />;
}
