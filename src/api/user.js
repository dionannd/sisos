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

  editUser: async (payload, id) => {
    try {
      const res = await request.put(`/user/edit/${id}`, payload);
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  updatePassword: async (payload) => {
    try {
      const res = await request.put(`/user/password`, payload);
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  updateProfilePic: async (payload) => {
    try {
      const res = await request.put(`/user/upload/image`, payload);
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default userRequest;
