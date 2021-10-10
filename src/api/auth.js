import request from "./index";

const authRequest = {
  login: async (payload) => {
    try {
      const response = await request.post("/auth/login", payload);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  register: async (payload) => {
    try {
      const response = await request.post("/auth/register", payload);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authRequest;
