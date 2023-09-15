import { openAxiosInstance,securedAxiosInstance } from "./instance";


const auth_apis = {
    loginWithEmailAndPassword: async (email, password) =>
      openAxiosInstance.post("auth/login", { email, password }),
  };
  const apis = {
    ...auth_apis,
  };
  
  export default apis;