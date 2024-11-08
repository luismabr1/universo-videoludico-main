import { sortBlogs } from "../../app/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl dark:text-light">Featured Posts</h2>

      <div className="grid grid-cols-2 grid-row-2 gap-6 sm:Lt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
            <BlogLayoutOne blog={sortedBlogs[0]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
           <BlogLayoutTwo blog={sortedBlogs[1]}/>
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          {sortedBlogs && sortedBlogs.length > 2 && (
            <BlogLayoutTwo blog={sortedBlogs[2]} />
          )}
        </article>

      </div>
    </section>
  );
};

export default FeaturedPost;
