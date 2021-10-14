import userRequest from "api/user";
import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

import { SET_PROFILE } from "./UserTypes";
const UserState = ({ children }) => {
  const initialState = {
    userProfile: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUserInfo = async () => {
    try {
      const res = await userRequest.getUserLogin();
      dispatch({ type: SET_PROFILE, payload: res.data });
      return Promise.resolve(res.data);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  const { userProfile } = state;

  return (
    <UserContext.Provider value={{ getUserInfo, userProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
