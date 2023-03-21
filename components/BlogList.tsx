import React from 'react';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";


type Props = {
    posts: Post[];
};

function BlogList({ posts }: Props) {
    return (
        <div className='mx-auto max-w-7xl'>
            <hr className="mb-10 border200-gray-" />

            <div className="grid grid-cols-1 px-10 pb-24 md:grid-cols-2 gap-x-10 gap-y-16">
                {posts.map((post) => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div key={post._id} className="flex flex-col cursor-pointer group">
                            <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-95">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
                                />
                                <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
                                    <div className="">
                                        <p className="font-bold">{post.title}</p>
                                        <p className="">
                                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center mf:flex-row gap-y-2 md:gap-x-2">
                                        {post.categories.map((category) => (
                                            <div key={category._id} className="px-3 py-1 text-sm font-semibold text-center text-black bg-black rounded-full">
                                                <p className="text-white">{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 mt-5">
                                <p className="text-lg font-bold underline">{post.title}</p>
                                <p className="text-gray-500 line-clamp-2">{post.description}</p>
                            </div>

                            <p className="flex items-center mt-5 font-bold group-hover:underline">
                                Read Post
                                <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
