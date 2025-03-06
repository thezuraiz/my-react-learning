import { useEffect } from "react";
import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";
// import { UserContext } from "../context/UserContext";
import useFetchApi from "../helper_function/api_handler";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const { user, setUser } = useContext(UserContext);
  /// Now using Redux
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const { fetch_Api } = useFetchApi();
  console.log("user==>", user);
  const fetchProfile = async () => {
    try {
      const response = await fetch_Api(
        "https://apiadsells.nms-mdm.com/api/profile/",
        "GET",
        {
          "Content-Type": "application/json",
        }
      );
      console.log("Fetching Profile");
      console.log("Success:", response);
      if (response.type == "client_error") {
        throw new Error("Un Authenticated");
      }
      console.log("Profile: ", response);
      // setUser({ ...response });
      dispatch({
        type: "LOGIN",
        payload: { ...response },
      });
    } catch (e) {
      alert("Error: " + e.message);
    }
  };
  useEffect(() => {
    fetchProfile();

    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <>
      <h3>User: {user.first_name + " " + user.last_name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Role: {user.role}</h3>
      <h3>Phone No: {user.phone_number}</h3>
      <h3>Is Authenticated: {user.isAuthenticated ? "true" : "false"}</h3>
      <HeroGift />
      <TopProducts heading="Top Products" />
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Home;
