import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Blog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Text",
    "Image",
    "Code",
    "Audio",
    "Video",
    "Business",
    "Other",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/ai-content`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
        // Also update the blogs in navbar through window event
        window.dispatchEvent(new CustomEvent('updateNavbarBlogs', { detail: data }));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Listen for search events from navbar
  useEffect(() => {
    const handleNavbarSearch = (event) => {
      setSearchQuery(event.detail);
    };
    window.addEventListener('navbarSearch', handleNavbarSearch);

    return () => {
      window.removeEventListener('navbarSearch', handleNavbarSearch);
    };
  }, []);

  // Filter based on category and search query
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" ||
      blog.type?.trim().toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col lg:flex-row p-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer p-3 rounded-lg transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Content */}
      <div className="w-full lg:w-3/4">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blog/${blog._id}`}
                className="relative block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-transform transform hover:scale-105"
              >
                <img
                  className="w-16 h-16 rounded-full absolute top-4 right-4 object-cover"
                  src={blog.imageUrl || logo}
                  alt={blog.title}
                />
                <div className="text-left mt-4">
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {blog.description?.substring(0, 50)}
                    {blog.description?.length > 50 ? "..." : ""}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()} |{" "}
                    {blog.priceType === "free" ? "Free" : "Paid"}
                  </p>
                  {/* Display the review */}
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Review:</strong> {blog.review || "No reviews yet."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No matching AI tools found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;