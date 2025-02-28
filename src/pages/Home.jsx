import HeroGift from "../sections/HeroGift";
import TopProducts from "../sections/TopProducts";

const Home = () => {
  return (
    <>
      <HeroGift />
      <TopProducts heading="Top Products" />
      <TopProducts heading="Most Popular" />
    </>
  );
};

export default Home;
