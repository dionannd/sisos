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
};

export default homeRequest;
