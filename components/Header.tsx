import Image from 'next/image'
import Link from 'next/link'
import LightLogoImage from '../public/logolight.png'

const Header = () => {

    return (
        <header className="sticky top-0 z-40 w-full py-1 bg-white border-gray-100 shadow-sm border-b-slate-100">
            <div className="flex items-center justify-between h-16 px-2 py-2 mx-auto space-x-4 font-bold sm:justify-between sm:space-x-0 max-w-7xl">
                <div>
                    <Link href="/">
                        <Image
                            className="rounded-full"
                            src={LightLogoImage}
                            width={90}
                            height={90}
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center space-x-6 npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react ">
                    <h3 className="font-light text-black cursor-pointer">Sign In</h3>
                    <Link href={"https://prakashnayak.com.np"}>
                        <button className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium text-white transition-all duration-300 delay-75 bg-black border rounded-full cursor-pointer transparent border-slate-100 hover:bg-opacity-80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95">
                            View My Portfolio 👋
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
