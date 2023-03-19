import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
    return (
        <div>
            <>
                <div className="flex items-center justify-between p-2">
                    <Link
                        className="text-[#ffffffea] flex items-center  p-2 rounded-md bg-gray-50 bg-opacity-10 hover:shadow-md hover:scale-105 transition-all duration-100"
                        href="/"
                    >
                        <ArrowUturnLeftIcon className="h-4 w-4 text-[#fce131] mr-2" />
                        Go To Website
                    </Link>

                    <div className="hidden md:flex p-2 rounded-lg justify-center border-2 border-[#ffffff25]">
                        <h1 className="font-bold text-gray-400">Check out my portfolio</h1>
                        <Link className="text-[#ffffff] font-bold ml-2" href="">
                            prakashnayak.com.np
                        </Link>
                    </div>
                </div>
                {props.renderDefault(props)}
            </>
        </div>
    )
}

export default StudioNavbar
