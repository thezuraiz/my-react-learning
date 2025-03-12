import { useEffect } from "react";
import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";
import useZutandStore from "../store/zutandStore";
import { useNavigate } from "react-router-dom";
import useAxiosHook from "../hooks/customHooks/UseAxiosHook";
import { get } from "react-hook-form";

const Home = () => {
  const navigate = useNavigate();
  const setProfile = useZutandStore((state) => state.setProfile);
  const user = useZutandStore((state) => state.user);
  const accessToken = useZutandStore((state) => state.accessToken);
  let baseUrl = import.meta.env.VITE_API_URL;
  const { fetchData } = useAxiosHook();

  const fetchProfileData = async () => {
    if (!accessToken) {
      console.warn("⚠️ No access token found. Redirecting to login...");
      navigate("/login");
      return;
    }
    if (user) {
      console.log("User already exists. Skipping profile fetch.");
      return;
    }
    try {
      console.log("Fetching Profile");
      const response = await fetchData(get, `${baseUrl}/profile/`);
      setProfile(response);
    } catch (error) {
      console.log("❌ Error fetching profile:", error);
      alert("UnAuthorized, Please Login");
      navigate("/login");
    }
  };
  useEffect(() => {
    console.log("🏠 Home Component Mounted");
    fetchProfileData();
    return () => console.log("Home Component Unmount");
  }, []);
  return (
    <>
      {user && (
        <marquee className="py-2 font-medium flex justify-between gap-5">
          <span className="mx-5">
            User: {user.first_name + " " + user.last_name}
          </span>
          <span className="mx-5">Email: {user.email}</span>
          <span className="mx-5">Role: {user.role}</span>
          <span className="mx-5">Phone No: {user.phone_number}</span>
        </marquee>
      )}
      <HeroGift />
      <TopProducts heading="Top Products" />
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Home;
