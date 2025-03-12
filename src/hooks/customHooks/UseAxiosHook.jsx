import axios from "axios";
import useZutandStore from "../../store/zutandStore";

const useAxiosHook = () => {
  const token = useZutandStore((state) => state.accessToken);
  // console.log("token:", token);

  const fetchData = async (method = "get", url, headers = {}) => {
    let type = method.toString();
    try {
      let response = await axios({
        type,
        url,
        headers: { Authorization: `Bearer ${token}`, ...headers },
      });
      return response.data;
    } catch (error) {
      console.error("Axios error:", error);
      throw error;
    }
  };

  return { fetchData };
};

export default useAxiosHook;
