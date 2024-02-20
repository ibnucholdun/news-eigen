import instance from "./../lib/axios/instance";

const services = {
  getNewsTopHeadlines: async () => {
    return await instance.get(
      `${import.meta.env.VITE_BASE_URL}top-headlines?country=us&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  },

  getNewsLifestyle: async () => {
    return await instance.get(
      `${
        import.meta.env.VITE_BASE_URL
      }top-headlines?sources=associated-press&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  },
};

export default services;
