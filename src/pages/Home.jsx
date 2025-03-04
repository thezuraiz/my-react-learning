import { useContext } from "react";
import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";
import { UserContext } from "../App";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h3>User: {user.username}</h3>
      <h3>Is Authenticated: {user.isAuthenticated ? "true" : "false"}</h3>
      <HeroGift />
      <TopProducts heading="Top Products" />
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Home;
