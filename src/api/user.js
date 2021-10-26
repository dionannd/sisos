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

  getUserStats: async (username) => {
    try {
      const response = await request.get(`/user/profil/stats/${username}`);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  searchUsers: async (q = "") => {
    try {
      const res = await request.get(`/user/search?q=${q}`);
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default userRequest;
