import request from ".";

const homeRequest = {
  getPosting: async () => {
    try {
      const response = await request.get("/home/posting");
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default homeRequest;
