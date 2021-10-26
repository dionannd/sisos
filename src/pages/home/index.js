import React, { useState, useEffect, useContext } from "react";

import homeRequest from "api/home";
import { CardUserPosting } from "components";
import UserContext from "context/user/UserContext";

export default function HomePage() {
  const [posting, setPosting] = useState([]);
  const { userProfile } = useContext(UserContext);

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
    document.title = "Sisos";
    getPosting();
  }, []);

  return (
    <>
      {posting.map((item, index) => (
        <CardUserPosting
          data={item}
          user={userProfile}
          key={index}
          getPost={getPosting}
          likePosting={likePosting}
          unLikePosting={unLikePosting}
        />
      ))}
    </>
  );
}
