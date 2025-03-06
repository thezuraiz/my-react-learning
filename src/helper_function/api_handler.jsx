// import { useUser } from "../context/UserContext";
import { useSelector } from "react-redux";

let useFetchApi = () => {
  // const { user } = useUser();
  const user = useSelector((state) => state);
  const fetch_Api = async (
    url = null,
    method = "POST",
    headers,
    body = null
  ) => {
    if (!url) throw new Error("URL is required");
    console.log("Body: ", body);
    console.log("User from Fetch Api", user);
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          ...headers,
        },
        body: body,
      });
      const apiData = await response.json();
      return apiData;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { fetch_Api };
};

export default useFetchApi;
