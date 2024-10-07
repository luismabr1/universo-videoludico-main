import Link from "next/link";
import { sortBlogs } from "../../utils";


const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
        <div className="w-full flex justify-between">
            <h2 className="inline-block font-bold capitalize text-4xl">Recent Posts</h2>
            <Link href="/categories/all" className="inline-block font-medium text-accent underline underline-offset-2 text-lg">view all</Link>
        </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
                {
                    sortedBlogs.slice(5, 11).map((blog, index) =>{
                       return <article key={index} className="cols-span-1 row-span-1 relative">Blog Layout 3</article> 
                    })
                }
            </div>
    </section>
  );
};

export default RecentPosts;