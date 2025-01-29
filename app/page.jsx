"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import ServiceSlider from "./_components/ServiceSlider";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="absolute z-10 w-full mt-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <Image src="/logo.png" alt="logo" width={130} height={100} />
              </a>
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
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-full bg-[#e1ff19] px-8 py-4 text-sm font-medium text-black shadow"
                    href="#"
                  >
                    Get Started
                  </a>

                  <div className="hidden sm:flex">
                    <a className="rounded-full bg-[#2cffc8] p-4 hover:bg-[#e1ff19]" href="#">
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


      <section className="hero">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[800px] lg:items-center lg:px-0">
          <div className="ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white lg:text-6xl">
              Netmix TV box +
            </h1>
            <p className="mt-8 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap gap-20 text-center items-center">
              <div className="flex gap-2 items-center">
                <Image src="/remote.png" alt="tv" width={60} height={60} />
                <p className="text-3xl text-[#e1ff19] font-bold mt-5">$88.99 /mo</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/router.png" alt="tv" width={70} height={70} />
                <p className="text-3xl text-white font-bold mt-5">free /6 month</p>
              </div>
            </div>
            <button className="bg-[#2cffc8] px-8 py-4 rounded-full text-sm mt-10 hover:bg-[#e1ff19]">Get Netmix TV box +</button>
          </div>
        </div>
      </section>


      {/* Home 2 */}

      <div className="home2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 px-36 py-14">
        <div className="">
          <h2 className="text-4xl font-bold mb-5 text-[#262937]">Call us now and connect Netmix</h2>
          <Link href="" className="text-4xl font-bold text-white hover:text-[#262937]">1 (800) 216 20 20</Link>
        </div>
        <div className="text-right mt-10">
          <Link href="" className="bg-white text-black p-5 rounded-full hover:bg-[#262937] hover:text-white">Check coverage in your area</Link>
        </div>
      </div>


      {/* Home 3 */}

      <section className="home3 mt-16">
        <div className="mx-auto max-w-screen-xl py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-4xl font-extrabold text-[#262937] pb-10">
                  Experience the magic of technology
                </h2>
                <p className="pb-10 text-gray-700">
                  Netmix entertainment means more than just TV or Internet — get streaming speeds, top shows, easy access to Netflix® favorites, and so much more. We’re local members to the communities we serve which allows us to get your services up and running in a day.
                </p>
                <p className="pb-10 text-gray-700">
                  Netmix entertainment means more than just TV or Internet — get streaming speeds, top shows, easy access to Netflix® favorites, and so much more. We’re local members to the communities we serve which allows us to get your services up and running in a day.
                </p>
                <Link href="" className="bg-[#e1ff19] px-8 py-4 rounded-full font-semibold hover:bg-[#2cffc8]">Contact Us</Link>
              </div>
            </div>

            <div className="listDiv p-10">
              <h3 className="text-3xl text-white font-extrabold py-5">Connect your phone with mobile WIFI</h3>
              <span className="text-2xl text-[#2cffc8] font-bold">from $69.99/ mo</span>
              <ul className="py-5 text-white text-[15px]">
                <li className="pb-3 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                <li className="pb-3 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Satellite TV</li>
                <li className="pb-3 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Cell phone connection</li>
                <li className="pb-3 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home security</li>
                <li className="pb-3 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
              </ul>
              <button className="bg-[#2cffc8] text-gray-900 py-3 px-5 rounded-full text-sm font-semibold">View mobile wifi plans</button>
            </div>
          </div>
        </div>
      </section>


      {/* Servive Slider */}

      <section className="Slider h-fit">
        <div className="container">
          <h2 className="text-white text-4xl font-extrabold text-center py-10">Explore the Netmix unlimited possibilities</h2>
          <div className="mx-auto max-w-screen-xl">
          <ServiceSlider />
          </div>
        </div>
      </section>

      {/* Home 4 */}
      <section className="priceSec">
        <div className="container">
          <div className="wrapper mx-auto max-w-screen-xl">
            <h2 className="text-center text-4xl font-extrabold py-20 text-gray-700">Discover our best plans</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="box" id="boxOne">
                <h3 className="text-2xl font-extrabold text-gray-900">Broadband & WIFI</h3>
                <ul className="py-7 text-white text-[15px] mt-5">
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Satellite TV</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Cell phone connection</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home security</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                </ul>
                <p className="text-2xl text-gray-900 font-bold">from $69.99/mo</p>
                <button className="bg-gray-800 text-white py-4 px-10 rounded-full text-[15px] mt-10 hover:bg-white">View plans</button>
              </div>
              <div className="box" id="boxTwo">
                <h3 className="text-2xl font-extrabold text-white">Broadband & WIFI</h3>
                <ul className="py-7 text-white text-[15px] mt-5">
                  <li className="pb-3 text-white flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                  <li className="pb-3 text-white flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Satellite TV</li>
                  <li className="pb-3 text-white flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Cell phone connection</li>
                  <li className="pb-3 text-white flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home security</li>
                  <li className="pb-3 text-white flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                </ul>
                <p className="text-2xl text-white font-bold">from $69.99/mo</p>
                <button className="bg-[#2cffc8] text-gray-800 py-4 px-10 rounded-full text-[15px] mt-10 hover:bg-[#e1ff19]">View plans</button>
              </div>
              <div className="box" id="boxThree">
                <h3 className="text-2xl font-extrabold text-gray-900">Broadband & WIFI</h3>
                <ul className="py-7 text-white text-[15px] mt-5">
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Satellite TV</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Cell phone connection</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home security</li>
                  <li className="pb-3 text-gray-800 flex gap-2"><FontAwesomeIcon icon={faCircleCheck} className="w-5" /> Home broadband</li>
                </ul>
                <p className="text-2xl text-gray-900 font-bold">from $69.99/mo</p>
                <button className="bg-gray-800 text-white py-4 px-10 rounded-full text-[15px] mt-10 hover:bg-white">View plans</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 lg:py-24">
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#262937] sm:text-4xl">
            What clients say about us
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                error officiis atque voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>


      <section className="conSec">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-fit lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Interested? Join us now
            </h2>
            <p className="mt-10 sm:text-[17px] text-white">
              Fast internet connection and high-quality support are only several of much
              more benefits we offer to our clients
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-full bg-[#2cffc8] px-12 py-4 text-sm font-medium text-gray-900 shadow hover:bg-[#e1ff19] focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}


      <footer className="bg-[#262937]">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <Image src="/logo.png" alt="logo" width={130} height={130} />
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-[#a8aec4] sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                cum itaque neque.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#2cffc8] transition hover:text-[#e1ff19]"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#2cffc8] transition hover:text-[#e1ff19]"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#2cffc8] transition hover:text-[#e1ff19]"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-[#2cffc8] transition hover:text-[#e1ff19]"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-extrabold text-white">Customer service</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#">
                      Company History
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#">
                      Employee Handbook
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Careers </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-extrabold text-white">Useful links</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#">
                      Web Development
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Web Design </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Marketing </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-[#2cffc8]" href="#"> Google Ads </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-extrabold text-white">Get in touch</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-[#2cffc8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-white">john@doe.com</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-[#2cffc8]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">0123456789</span>
                    </a>
                  </li>

                  <li
                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-[#2cffc8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-white">
                      213 Lane, London, United Kingdom
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2025 Company Name</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
