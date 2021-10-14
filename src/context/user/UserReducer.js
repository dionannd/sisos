import { SET_PROFILE } from "./UserTypes";

const UserReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
