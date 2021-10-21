import React, { useContext } from "react";
import { CardProfile } from "components";
import UserContext from "context/user/UserContext";

export default function Profile() {
  const { userProfile } = useContext(UserContext);

  return <CardProfile maxW="36rem" user={userProfile} />;
}
