import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVERURL;

export const login = async (data) => {
  try {
    const result = await axios.post(serverUrl + "/api/auth/signup", data, {
      withCredentials: true,
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const googleLoginAPI = async (data) => {
  try {
    const result = await axios.post(
      serverUrl + "/api/auth/googlesignup",
      data,
      {
        withCredentials: true,
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
