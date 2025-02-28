const Footer = () => {
  return (
    <footer className="bg-[#101828] py-5 text-gray-200 transition-all duration-300 ease-in-out">
      <section className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-7 text-center lg:text-start sm:text-base xs:text-xs lg:text-base">
        <div className="p-5 lg:col-span-2">
          <a href="# ">
            <img
              className="mb-5 "
              src="https://dealaday-images.eu-central-1.linodeobjects.com/5309fd5b3d244d1bf1dfe116e5c49063/test1679300288.svg"
              alt=""
            />
          </a>
          <p className=" ">
            At Deal A Day we are dedicated to helping you get the best prices on
            electronics and home living products.
          </p>
        </div>
        <div className="p-5 order-2">
          <h4 className="text-md font-semibold mb-6 text-gray-100">
            Categories
          </h4>
          <ul>
            <li className="mb-3">
              <a href="$">Todays Deals</a>
            </li>
            <li className="mb-3">
              <a href="$">Products</a>
            </li>
            <li className="mb-3">
              <a href="$">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="p-5 order-2">
          <h4 className="text-md font-semibold mb-6 text-gray-100">About</h4>
          <ul>
            <li className="mb-3">
              <a href="$">Todays Deals</a>
            </li>
            <li className="mb-3">
              <a href="$">Products</a>
            </li>
            <li className="mb-3">
              <a href="$">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="p-5 order-2">
          <h4 className="text-md font-semibold mb-6 text-gray-100">Legal</h4>
          <ul>
            <li className="mb-3">
              <a href="$">Terms of Service</a>
            </li>
            <li className="mb-3">
              <a href="$">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="p-5 lg:col-span-2 order-1 lg:order-2">
          <h4 className="text-md font-semibold mb-6 text-gray-100">
            Newsletter
          </h4>
          <p className="mb-3">
            Get notified on great deals weekly. Subscribe to our newsletter
          </p>
          <div className=" border-gray-500 border-1 flex items-center mx-auto rounded-lg font-light">
            <input
              type="text"
              className="placeholder:text-gray-500 placeholder:text-sm  text-gray-500  w-full  px-5 focus:outline-0"
              placeholder="Enter your email"
            />
            <button className="text-nowrap px-3 py-1 lg:px-5 bg-orange-600 rounded-lg text-sm text-white font-bold">
              Join Us
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mt-5 mx-auto sm:text-base xs:text-xs lg:text-base">
        <div className="contain flex flex-col gap-2 lg:flex-row items-center justify-between px-8">
          <p className="m-0 text-xs">
            © Deal A Day 2008-2022. All rights reserved. <br />
            GST: 135-410-306. Company Registration Number: 8110277 NZBN:
            9429048649957
          </p>
          <div className="pay_cards">
            <svg
              width="244"
              height="24"
              viewBox="0 0 244 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.44921 8.34316C9.16382 8.69506 8.70721 8.97261 8.2506 8.93296C8.19353 8.45715 8.41707 7.95161 8.67867 7.63936C8.96406 7.27755 9.46348 7.01983 9.86777 7C9.91533 7.49563 9.72983 7.98135 9.44921 8.34316ZM9.86297 9.02723C9.46071 9.00311 9.09366 9.1533 8.79718 9.27461C8.60639 9.35267 8.44483 9.41878 8.32191 9.41878C8.18397 9.41878 8.01574 9.34914 7.82685 9.27095L7.82685 9.27095C7.57935 9.16849 7.29638 9.05135 6.99964 9.05697C6.31948 9.06688 5.68688 9.46834 5.33967 10.1077C4.62621 11.3864 5.15417 13.2797 5.84384 14.3206C6.18155 14.836 6.58584 15.401 7.11855 15.3812C7.35291 15.372 7.5215 15.2975 7.69597 15.2203C7.89683 15.1315 8.10549 15.0392 8.43131 15.0392C8.74582 15.0392 8.94536 15.1291 9.1369 15.2153C9.31903 15.2974 9.49393 15.3761 9.75358 15.3713C10.3053 15.3614 10.6525 14.8558 10.9902 14.3404C11.3547 13.7872 11.5148 13.2473 11.5391 13.1653L11.542 13.1558C11.5414 13.1552 11.5369 13.1531 11.5289 13.1493C11.4071 13.0912 10.476 12.647 10.467 11.4558C10.4581 10.456 11.2056 9.94946 11.3233 9.86972C11.3304 9.86487 11.3353 9.8616 11.3374 9.85989C10.8618 9.12636 10.1198 9.04706 9.86297 9.02723ZM13.6824 15.3167V7.5898H16.4649C17.9013 7.5898 18.9049 8.62071 18.9049 10.1274C18.9049 11.6341 17.8822 12.675 16.4268 12.675H14.8334V15.3167H13.6824ZM14.8333 8.60088H16.1603C17.1592 8.60088 17.7299 9.15599 17.7299 10.1324C17.7299 11.1088 17.1592 11.6688 16.1556 11.6688H14.8333V8.60088ZM22.7051 14.3898C22.4007 14.9945 21.7301 15.3761 21.0071 15.3761C19.9369 15.3761 19.1902 14.712 19.1902 13.7108C19.1902 12.7195 19.9132 12.1496 21.2497 12.0653L22.6861 11.9761V11.5498C22.6861 10.9204 22.2913 10.5784 21.5874 10.5784C21.0071 10.5784 20.5838 10.8907 20.4982 11.3665H19.4613C19.4946 10.3653 20.3983 9.63672 21.6207 9.63672C22.9382 9.63672 23.7943 10.3554 23.7943 11.4705V15.3166H22.7289V14.3898H22.7051ZM21.3163 14.4592C20.7027 14.4592 20.3127 14.1519 20.3127 13.6811C20.3127 13.1954 20.6885 12.9129 21.4067 12.8683L22.6861 12.784V13.2202C22.6861 13.9438 22.0964 14.4592 21.3163 14.4592ZM27.3284 15.619C26.867 16.9721 26.3391 17.4181 25.2166 17.4181C25.131 17.4181 24.8456 17.4082 24.779 17.3884V16.4616C24.8503 16.4715 25.0263 16.4814 25.1167 16.4814C25.6256 16.4814 25.911 16.2584 26.087 15.6785L26.1916 15.3365L24.2415 9.7111H25.4449L26.8004 14.2759H26.8242L28.1798 9.7111H29.3499L27.3284 15.619Z"
                fill="black"
              ></path>
              <rect
                x="42.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.7503 15.8582H50.6905L49.146 9.79235C49.0726 9.51332 48.917 9.26664 48.688 9.15038C48.1166 8.85821 47.4869 8.62568 46.8 8.50841V8.27487H50.1181C50.576 8.27487 50.9195 8.62568 50.9767 9.0331L51.7781 13.4086L53.8369 8.27487H55.8394L52.7503 15.8582ZM56.9842 15.8582H55.039L56.6408 8.27487H58.586L56.9842 15.8582ZM61.1027 10.3757C61.1599 9.96725 61.5034 9.73372 61.9041 9.73372C62.5338 9.67508 63.2197 9.79235 63.7921 10.0835L64.1356 8.45079C63.5631 8.21725 62.9335 8.09998 62.362 8.09998C60.474 8.09998 59.1002 9.15038 59.1002 10.6082C59.1002 11.7173 60.0733 12.2996 60.7603 12.6504C61.5034 13.0002 61.7896 13.2337 61.7324 13.5835C61.7324 14.1082 61.1599 14.3418 60.5885 14.3418C59.9016 14.3418 59.2147 14.1669 58.586 13.8747L58.2426 15.5084C58.9295 15.7996 59.6726 15.9169 60.3596 15.9169C62.4765 15.9745 63.7921 14.9251 63.7921 13.35C63.7921 11.3664 61.1027 11.2502 61.1027 10.3757ZM70.6 15.8582L69.0554 8.27487H67.3964C67.0529 8.27487 66.7095 8.50841 66.595 8.85821L63.7349 15.8582H65.7374L66.1371 14.7502H68.5975L68.8265 15.8582H70.6ZM67.6826 10.3171L68.254 13.1751H66.6523L67.6826 10.3171Z"
                fill="#172B85"
              ></path>
              <rect
                x="84.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M98.6142 18.4483L98.8349 16.9992L98.3432 16.9873H95.9953L97.627 6.2937C97.6321 6.26132 97.6485 6.23126 97.6725 6.20987C97.6967 6.18849 97.7274 6.17676 97.7596 6.17676H101.719C103.033 6.17676 103.94 6.45939 104.413 7.01734C104.635 7.27908 104.777 7.55267 104.845 7.85364C104.917 8.16951 104.918 8.54685 104.848 9.00715L104.843 9.04063V9.33561L105.065 9.46563C105.252 9.56815 105.401 9.68546 105.515 9.81975C105.705 10.0436 105.827 10.3281 105.879 10.6652C105.933 11.012 105.915 11.4248 105.827 11.892C105.726 12.4295 105.562 12.8976 105.341 13.2805C105.138 13.6334 104.879 13.9262 104.571 14.153C104.277 14.3686 103.928 14.5322 103.534 14.6369C103.151 14.7398 102.715 14.7917 102.237 14.7917H101.929C101.708 14.7917 101.495 14.8737 101.327 15.0207C101.158 15.1708 101.047 15.3758 101.013 15.6L100.989 15.7305L100.599 18.2848L100.582 18.3785C100.577 18.4082 100.569 18.423 100.557 18.433C100.546 18.4422 100.531 18.4483 100.517 18.4483H98.6142Z"
                fill="#28356A"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M105.276 9.07458C105.264 9.15267 105.25 9.23246 105.235 9.31445C104.713 12.0851 102.927 13.0422 100.646 13.0422H99.4841C99.2051 13.0422 98.9699 13.2516 98.9265 13.536L98.1634 18.5393C98.1351 18.7261 98.2744 18.8944 98.4567 18.8944H100.517C100.761 18.8944 100.968 18.7112 101.006 18.4626L101.027 18.3544L101.415 15.8102L101.439 15.6707C101.477 15.4211 101.685 15.2378 101.929 15.2378H102.237C104.233 15.2378 105.796 14.4003 106.252 11.9765C106.443 10.964 106.344 10.1185 105.84 9.52389C105.687 9.34464 105.497 9.1958 105.276 9.07458Z"
                fill="#298FC2"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M104.729 8.84968C104.649 8.82561 104.567 8.80386 104.483 8.78419C104.398 8.765 104.311 8.74802 104.221 8.73311C103.908 8.68081 103.565 8.65601 103.197 8.65601H100.094C100.018 8.65601 99.9453 8.67385 99.8804 8.70611C99.7372 8.77722 99.631 8.91726 99.6052 9.0887L98.945 13.4102L98.9261 13.5362C98.9695 13.2517 99.2046 13.0424 99.4836 13.0424H100.645C102.926 13.0424 104.713 12.0848 105.235 9.31463C105.25 9.23264 105.264 9.15285 105.275 9.07477C105.143 9.00231 105 8.94035 104.846 8.88756C104.808 8.87449 104.769 8.8619 104.729 8.84968Z"
                fill="#22284F"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.6055 9.08862C99.6312 8.91718 99.7375 8.77715 99.8807 8.70652C99.9461 8.67414 100.018 8.6563 100.095 8.6563H103.198C103.565 8.6563 103.908 8.68123 104.222 8.73353C104.311 8.74831 104.398 8.76542 104.483 8.7846C104.567 8.80415 104.65 8.82603 104.729 8.84998C104.769 8.8622 104.808 8.8749 104.847 8.88749C105.001 8.94028 105.144 9.00272 105.276 9.07469C105.431 8.05082 105.275 7.3537 104.739 6.72245C104.149 6.0274 103.083 5.72998 101.719 5.72998H97.7601C97.4816 5.72998 97.2439 5.9393 97.2009 6.22426L95.5519 17.0279C95.5194 17.2416 95.6789 17.4344 95.8874 17.4344H98.3316L99.6055 9.08862Z"
                fill="#28356A"
              ></path>
              <rect x="126" width="34" height="24" rx="4" fill="#1F72CD"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M132.095 8.5L128.914 15.7467H132.723L133.195 14.5913H134.274L134.746 15.7467H138.938V14.8649L139.311 15.7467H141.48L141.853 14.8462V15.7467H150.571L151.631 14.6213L152.623 15.7467L157.101 15.7561L153.91 12.1436L157.101 8.5H152.693L151.661 9.60463L150.7 8.5H141.216L140.401 10.3704L139.568 8.5H135.768V9.35186L135.345 8.5H132.095ZM132.832 9.52905H134.689L136.799 14.4431V9.52905H138.832L140.462 13.0524L141.964 9.52905H143.987V14.7291H142.756L142.746 10.6544L140.951 14.7291H139.85L138.045 10.6544V14.7291H135.512L135.032 13.5633H132.438L131.958 14.728H130.601L132.832 9.52905ZM150.12 9.52905H145.114V14.726H150.042L151.631 13.0036L153.162 14.726H154.763L152.436 12.1426L154.763 9.52905H153.232L151.651 11.2316L150.12 9.52905ZM133.735 10.4089L132.881 12.4856H134.589L133.735 10.4089ZM146.35 11.555V10.6057V10.6048H149.474L150.837 12.1229L149.413 13.6493H146.35V12.613H149.081V11.555H146.35Z"
                fill="white"
              ></path>
              <rect
                x="168.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
                stroke="#D9D9D9"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M185.179 16.8295C183.995 17.8275 182.459 18.43 180.781 18.43C177.036 18.43 174 15.4303 174 11.73C174 8.02972 177.036 5.03003 180.781 5.03003C182.459 5.03003 183.995 5.63253 185.179 6.63057C186.363 5.63253 187.899 5.03003 189.577 5.03003C193.322 5.03003 196.358 8.02972 196.358 11.73C196.358 15.4303 193.322 18.43 189.577 18.43C187.899 18.43 186.363 17.8275 185.179 16.8295Z"
                fill="#ED0006"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M185.179 16.8295C186.637 15.6006 187.561 13.772 187.561 11.73C187.561 9.68807 186.637 7.85947 185.179 6.63057C186.363 5.63253 187.899 5.03003 189.577 5.03003C193.322 5.03003 196.358 8.02972 196.358 11.73C196.358 15.4303 193.322 18.43 189.577 18.43C187.899 18.43 186.363 17.8275 185.179 16.8295Z"
                fill="#F9A000"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M185.179 16.8295C186.637 15.6006 187.561 13.772 187.561 11.7301C187.561 9.68811 186.637 7.85952 185.179 6.63062C183.721 7.85952 182.797 9.68811 182.797 11.7301C182.797 13.772 183.721 15.6006 185.179 16.8295Z"
                fill="#FF5E00"
              ></path>
              <rect
                x="210.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="#B2FCE5"
                stroke="#D9D9D9"
              ></rect>
              <g clipPath="url(#clip0_3793_9591)">
                <path
                  d="M233.351 7.82805L229.02 5.26483C227.749 4.51244 226.16 5.45265 226.16 6.95855V7.2215C226.16 7.45903 226.284 7.67889 226.484 7.79711L227.302 8.28103C227.542 8.42355 227.841 8.24568 227.841 7.96173V7.30767C227.841 6.98064 228.186 6.77625 228.462 6.93976L232.213 9.16048C232.489 9.32399 232.489 9.73279 232.213 9.89519L228.462 12.1159C228.186 12.2795 227.841 12.0751 227.841 11.748V11.3999C227.841 9.89409 226.252 8.95277 224.98 9.70627L220.649 12.2695C219.378 13.0219 219.378 14.9045 220.649 15.6569L224.98 18.2201C226.251 18.9725 227.841 18.0323 227.841 16.5264V16.2635C227.841 16.0259 227.718 15.8071 227.517 15.6878L226.699 15.2028C226.459 15.0603 226.16 15.2382 226.16 15.5221V16.1762C226.16 16.5032 225.815 16.7076 225.539 16.5441L221.788 14.3234C221.512 14.1598 221.512 13.751 221.788 13.5875L225.539 11.3668C225.815 11.2033 226.16 11.4077 226.16 11.7347V12.0828C226.16 13.5886 227.749 14.53 229.02 13.7765L233.351 11.2133C234.622 10.4631 234.622 8.58044 233.351 7.82805Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3793_9591">
                  <rect
                    width="14.6087"
                    height="14"
                    fill="white"
                    transform="translate(219.696 5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
