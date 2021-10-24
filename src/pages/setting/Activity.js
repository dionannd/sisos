import React, { useEffect } from "react";
import { CardSetting } from "components";

export default function EditProfile() {
  useEffect(() => {
    document.title = "Login Activity | Sisos";
  });
  return <CardSetting>Activity</CardSetting>;
}
