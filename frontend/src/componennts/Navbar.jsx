import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import logo from "../images/bn.png";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // Dispatch custom event for search
    window.dispatchEvent(new CustomEvent('navbarSearch', { detail: query }));
  };

  // If user is not logged in, don't render the navbar
  if (!user) {
    return null;
  }

  return (
    <nav className="navbar h-[80px] px-6 lg:px-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", width: "150px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="cursor-pointer hover:underline" onClick={() => navigate("/UploadNewBlog")}>
            Submit AI Tool
          </li>
        </ul>
      </div>

      {/* 🔍 Search Input */}
      <div className="relative hidden lg:block w-1/4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300"
          placeholder="Search by title..."
        />
      </div>

      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <Avatar
            className="cursor-pointer"
            name={user.name}
            size="45"
            round="50%"
            onClick={() => setShowLogout(!showLogout)}
          />
          {showLogout && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setUser(null);
                  navigate("/login");
                }}
                className="w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-t-lg text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
