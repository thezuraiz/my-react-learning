import { useContext, useEffect } from "react";
import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const fetchProfile = async () => {
    try {
      console.log("Fetching Profile");
      console.log("user.accessToken: ", user.accessToken);

      const response = await fetch(
        "https://apiadsells.nms-mdm.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.accessToken}`, // Use Bearer token format
          },
        }
      );

      const apiData = await response.json();
      console.log("Success:", apiData.type);
      if (apiData.type == "client_error") {
        throw new Error("Un Authenticated");
      }
      localStorage.setItem("userProfile", JSON.stringify(apiData));
      setUser((prev) => ({ ...prev, ...apiData }));
    } catch (e) {
      alert("Error: " + e.message); // Fix alert syntax
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
      <h3>User: {user.first_name}</h3>
      <h3>Is Authenticated: {user.isAuthenticated ? "true" : "false"}</h3>
      <h3>Email: {user.email}</h3>
      <HeroGift />
      <TopProducts heading="Top Products" />
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Home;
