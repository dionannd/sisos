import React, { useContext, useEffect } from "react";
import { CardProfile } from "components";
import UserContext from "context/user/UserContext";

export default function Profile() {
  const { userProfile } = useContext(UserContext);
  useEffect(() => {
    document.title = "Profile | Sisos";
  }, []);

  return <CardProfile maxW="36rem" self={userProfile} />;
}
