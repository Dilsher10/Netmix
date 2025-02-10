import React from 'react'

const Navbar = () => {
    return (
        <header className="absolute z-10 w-full mt-5 lg:mt-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block text-white font-extrabold text-[17px] lg:text-2xl logo" href="/">
                            LISAM SOLUTIONS LLC
                        </Link>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-10 text-[15px]">
                                <li>
                                    <a className="text-[#2cffc8]" href="#"> Home </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Packages </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> About Us </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Services </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Features </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> News </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Contacts </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4 navBtn">
                                <a className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black shadow hover:bg-gray-800 hover:text-white"
                                    href="tel:+1-(888)-845-0301"
                                >
                                    Get Started
                                </a>
                                <div className="hidden sm:flex navBtn">
                                    <a className="rounded-full bg-white p-4 hover:bg-[#2cffc8]" href="tel:+1-(888)-845-0301">
                                        <Image src="/phone.png" alt="phone" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar