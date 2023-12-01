import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    console.log("file: useRefreshToken.js:12 ~ refresh ~ response:", response);
    setAuth((prev) => {
      console.log("prevState: ", JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        user: response.data.username,
      };
    });

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
