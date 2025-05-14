import Image from "next/image";
import Tags from "../Elements/Tags";
import Link from "next/link";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  // Depuración: Verificar datos de la imagen
  console.log("Blog Image Data:", {
    filePath: blog.image.filePath,
    blurhashDataUrl: blog.image.blurhashDataUrl,
    src: blog.image.filePath.replace("../public", ""),
  });

  return (
    <div className="group relative inline-block w-full h-full overflow-hidden rounded-xl">
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className="aspect-[4/3] w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 z-0"
        sizes="(max-width: 1180px) 100vw, 50vw"
        priority
      />
      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 bg-gradient-to-t from-black/80 to-transparent z-10">
        <Tags
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 text-white bg-black/50 dark:bg-black/50"
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-white dark:text-white text-shadow mt-2 sm:mt-4">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;