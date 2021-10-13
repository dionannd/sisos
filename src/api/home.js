import request from ".";

const homeRequest = {
  getUserPosting: async () => {
    try {
      const response = await request.get("/posting/list");
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  likePosting: async (payload) => {
    try {
      const response = await request.post("/like/posting", payload);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  unLikePosting: async (id) => {
    try {
      const res = await request.delete(`/like/${id}/posting/delete`);
      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  newPosting: async (payload) => {
    try {
      const response = await request.post("/posting/create", payload);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default homeRequest;
