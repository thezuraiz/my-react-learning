import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";
import useZutandStore from "../store/zutandStore";
import { useNavigate } from "react-router-dom";
import useAxiosHook from "../hooks/customHooks/UseAxiosHook";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ApiLoader from "../component/Loader";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const setProfile = useZutandStore((state) => state.setProfile);
  const user = useZutandStore((state) => state.user);
  const accessToken = useZutandStore((state) => state.accessToken);
  let baseUrl = import.meta.env.VITE_API_URL;
  const { fetchData } = useAxiosHook();
  const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!accessToken) {
        toast.warn("⚠️ No access token. Redirecting to login...");
        navigate("/login");
        throw new Error("Unauthorized");
      }

      console.log("Fetching Profile...");
      const response = await fetchData("GET", `${baseUrl}/profile/`);
      return response;
    },
    staleTime: Infinity,
    retry: false,
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (!accessToken) {
      queryClient.removeQueries(["profile"]);
    }
  }, [accessToken, queryClient]);

  if (profile && !user) {
    setProfile(profile);
  }

  if (isLoading)
    return (
      <p>
        Loading profile... <ApiLoader />
      </p>
    );
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

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
