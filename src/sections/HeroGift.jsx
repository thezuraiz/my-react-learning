import { BsTag } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CgArrowsExchange } from "react-icons/cg";
const HeroGift = () => {
  return (
    <section className="bg-gray-200">
      <img
        src="https://dealaday-images.eu-central-1.linodeobjects.com/3f781c34c198414b5d4758460caa481e/test1685748663.png"
        alt=""
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      />
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl flex flex-wrap justify-between mx-auto p-5 py-10">
        <div className="lg:max-w-[30%] flex flex-col justify-start items-center text-center p-3">
          <BsTag className="text-4xl text-blue-500" />
          <p className="font-medium mt-2">
            Great
            <br />
            Discount
          </p>
        </div>
        <div className="lg:max-w-[30%] flex flex-col justify-start items-center text-center p-3">
          <IoLockClosedOutline className="text-4xl text-blue-500" />
          <p className="font-medium mt-2">
            Secure
            <br />
            Shop
          </p>
        </div>
        <div className="lg:max-w-[30%] flex flex-col justify-start items-center text-center p-3">
          <IoGiftOutline className="text-4xl text-blue-500" />
          <p className="font-medium mt-2">
            Earn
            <br />
            Rewards
          </p>
        </div>
        <div className="lg:max-w-[30%] flex flex-col justify-start items-center text-center p-3">
          <FiUser className="text-4xl text-blue-500" />
          <p className="font-medium mt-2">
            Great
            <br />
            Customer Support
          </p>
        </div>
        <div className="lg:max-w-[30%] flex flex-col justify-start items-center text-center p-3">
          <CgArrowsExchange className="text-4xl text-blue-500" />
          <p className="font-medium mt-2">
            AfterPay
            <br />
            Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroGift;
