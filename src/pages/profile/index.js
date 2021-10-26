import React, { useContext, useEffect, useState } from "react";
import { CardProfile } from "components";
import UserContext from "context/user/UserContext";
import { CardUserPosting } from "components";
import homeRequest from "api/home";
import userRequest from "api/user";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [posting, setPosting] = useState([]);
  const [stats, setStats] = useState([]);
  const { username } = useParams();
  const { userProfile } = useContext(UserContext);

  const getPostingSelf = async (id) => {
    const response = await homeRequest.getPostingSelf(id);
    setPosting(response.data);
  };

  const getStats = async (username) => {
    const response = await userRequest.getUserStats(username);
    getPostingSelf(response.data.user_id);
    setStats(response.data);
  };

  const likePosting = async (id) => {
    try {
      await homeRequest.likePosting({ post_id: id });
      getPostingSelf(stats.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  const unLikePosting = async (id) => {
    try {
      await homeRequest.unLikePosting(id);
      getPostingSelf(stats.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Profile | Sisos";
    getStats(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <CardProfile self={userProfile} stats={stats}>
      {posting.map((item, index) => (
        <CardUserPosting
          data={item}
          user={userProfile}
          key={index}
          getPost={getPostingSelf}
          likePosting={likePosting}
          unLikePosting={unLikePosting}
        />
      ))}
    </CardProfile>
  );
}
