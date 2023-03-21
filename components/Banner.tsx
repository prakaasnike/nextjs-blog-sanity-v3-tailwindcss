
import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <div>
            <section className="grid items-center gap-6 px-4 pt-6 pb-8 mx-auto space-y-6 max-w-7xl md:py-6">
                <div className="flex max-w-[980px] flex-col items-start space-y-6">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">Light&apos;s daily blog.</h1>
                    <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">Welcome to every developer&apos;s favorite blog made with nextjs, typescript, sanity, tailwindcss and deployed to vercel</p>
                </div>
                <div><Link href={"/"} className="inline-flex items-center justify-center px-8 text-sm font-medium transition-colors bg-transparent border rounded-md h-11 border-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95">Start Reading ...</Link></div>
            </section>

        </div>
    );
};

export default Banner;