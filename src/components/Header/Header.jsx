import React, { useState } from "react";
import { CustomLink } from "../CustomLink/CustomLink";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center text-center justify-center h-16">
            <div className="flex items-center justify-center text-center">
              <div className="flex-shrink-0"></div>
              <div className="md:block justify-center items-center">
                <div className="flex items-center justify-center space-x-4">
                  <CustomLink
                    to="/home"
                    className=" hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </CustomLink>

                  <CustomLink
                    to="/reviews"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reviews
                  </CustomLink>

                  <CustomLink
                    to="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </CustomLink>

                  <CustomLink
                    to="/blogs"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                  </CustomLink>

                  <CustomLink
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
