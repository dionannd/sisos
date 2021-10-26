import React, { useEffect, useState, useContext } from "react";
import { CardProfile, CardSaved } from "components";
import UserContext from "context/user/UserContext";
import userRequest from "api/user";
import { useParams } from "react-router-dom";

export default function Saved() {
  const [stats, setStats] = useState([]);

  const { username } = useParams();
  const { userProfile } = useContext(UserContext);

  const getStats = async (username) => {
    const response = await userRequest.getUserStats(username);
    setStats(response.data);
  };

  useEffect(() => {
    document.title = "Profile | Sisos";
    getStats(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CardProfile self={userProfile} stats={stats}>
        <CardSaved />
      </CardProfile>
    </>
  );
}
