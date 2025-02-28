const BlogCard = () => {
  return (
    <div className="section p-5 border rounded-xl border-gray-300">
      <img
        src="https://dealaday-images.eu-central-1.linodeobjects.com/7ce9d67d85410c4531d26ee12e9640d2/test1681868329.webp"
        alt=""
        className="rounded mx-auto w-50"
      />
      <div className="m-5">
        <h3 className="text-base text-blue-300 my-3">
          Top 5 Reasons to Buy the KidsPlay 7 Android 10 Tablet for Your Child
        </h3>
        <div>
          <span className="flex gap-2 my-5">
            <img
              src="https://dealaday-images.eu-central-1.linodeobjects.com/b560f6b4a8e44ba5736d6ff6aa644f25/test1681578809.jpeg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span>
              <h3 className="font-bold">By</h3>
              <p className="text-sm fond-medium ">
                Deal A Day
                <br /> Apr 19, 2023
              </p>
            </span>
          </span>
        </div>
        <p className="text-gray-700 text-sm">
          In todays digital age, children are exposed to technology from a very
          young age...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
