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

  getNewsBusiness: async () => {
    return await instance.get(
      `${
        import.meta.env.VITE_BASE_URL
      }top-headlines?country=us&category=business&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  },

  getNewsEntertainment: async () => {
    return await instance.get(
      `${
        import.meta.env.VITE_BASE_URL
      }top-headlines?country=us&category=entertainment&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  },

  getNewsHealth: async () => {
    return await instance.get(
      `${
        import.meta.env.VITE_BASE_URL
      }top-headlines?country=us&category=health&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
  },
};

export default services;
