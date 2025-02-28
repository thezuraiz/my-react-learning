import BlogCard from "../component/BlogCard";

const Blogs = () => {
  return (
    <section>
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-8xl mx-auto my-8 p-3">
        <h3 className="text-3xl font-bold my-5">Deal A Day Blogs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-5">
          <BlogCard />
          <BlogCard />
        </div>
        <p className="text-sm text-gray-400">Showing 1-2 of 2 Products</p>
      </div>
    </section>
  );
};

export default Blogs;
