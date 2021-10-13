import React, { useState, useEffect } from "react";

import homeRequest from "api/home";
import userRequest from "api/user";
import { CardUserPosting } from "components";

export default function HomePage() {
  const [posting, setPosting] = useState([]);
  const [user, setUser] = useState([]);

  const getUserLogin = async () => {
    const response = await userRequest.getUserLogin();
    setUser(response.data);
  };

  const likePosting = async (id) => {
    try {
      await homeRequest.likePosting({ post_id: id });
      getPosting();
    } catch (error) {
      console.log(error);
    }
  };

  const unLikePosting = async (id) => {
    try {
      await homeRequest.unLikePosting(id);
      getPosting();
    } catch (error) {
      console.log(error);
    }
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
      {posting.map((item, index) => (
        <CardUserPosting
          data={item}
          key={index}
          user={user}
          getPost={getPosting}
          likePosting={likePosting}
          unLikePosting={unLikePosting}
        />
      ))}
    </>
  );
}
