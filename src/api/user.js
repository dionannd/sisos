import request from ".";

const userRequest = {
  getUserLogin: async () => {
    try {
      const response = await request.get("/user");
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default userRequest;
