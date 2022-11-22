import Link from "next/link";
import React from "react";
import { GiMeat } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <header className="bg-white py-3">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* <!-- Brand --> */}
            <div className="flex-shrink-0 mr-5">
              <Link href="/">
                <GiMeat size={36} />
              </Link>
            </div>
            {/* <!-- Brand .//end --> */}

            {/* <!-- Search --> */}
            <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <input
                className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                type="text"
                placeholder="Search"
              />
              <button
                type="button"
                className="px-4 py-2 inline-block text-blue-600 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md hover:bg-blue-100"
              >
                <AiOutlineSearch size={23} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
