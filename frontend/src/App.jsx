

// import React, { useContext } from "react"; 
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Nopage from "./pages/Nopage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import UploadNewBlog from './pages/UploadNewBlog';
// import BlogDetails from './pages/BlogDetails';
// import Blog from './pages/Blog';  
// import AuthProvider, { AuthContext } from "./context/AuthContext"; 
// import Navbar from "./componennts/Navbar"; // Import Navbar
// import SearchResults from "./componennts/SearchResults";

// const ProtectedRoute = ({ element }) => {
//   const { user } = useContext(AuthContext);  
//   return user ? element : <Navigate to="/login" replace />;
// };

// const App = () => {
//   return (
//     <AuthProvider>  
//       <BrowserRouter>
//         {/* <Navbar />  */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/search" element={<SearchResults />} />
//           <Route path="/uploadnewblog" element={<ProtectedRoute element={<UploadNewBlog />} />} />
//           <Route path="/blog/:id" element={<ProtectedRoute element={<BlogDetails />} />} />
//           <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />
//           <Route path="*" element={<Nopage />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;
import React, { useContext } from "react"; 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UploadNewBlog from './pages/UploadNewBlog';
import BlogDetails from './pages/BlogDetails';
import Blog from './pages/Blog';  
import AuthProvider, { AuthContext } from "./context/AuthContext"; 
import Navbar from "./componennts/Navbar"; 

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);  
  return user ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>  
      <BrowserRouter>
        {/* <Navbar />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
        
          <Route path="/search" element={<ProtectedRoute element={<Blog />} />} />
          
          <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />

          <Route path="/uploadnewblog" element={<ProtectedRoute element={<UploadNewBlog />} />} />
          <Route path="/blog/:id" element={<ProtectedRoute element={<BlogDetails />} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
