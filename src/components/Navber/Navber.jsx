import { useContext, useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Navber/style.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    setIsMenuOpen(false); // Close menu on navigation (mobile UX improvement)
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
      toast.success("Logout successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed!");
      console.error(error);
    }
  };

  const links = (
    <>
      {['home', 'download', 'review', 'ourTeam'].map((section) => (
        <span
          key={section}
          onClick={() => handleNavigation(section)}
          className="text-gray-600 cursor-pointer transition-colors duration-300 hover:text-blue-600"
        >
          {section.toUpperCase()}
        </span>
      ))}
    </>
  );

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 py-2 shadow shadow-blue-300 sticky-navbar">
        <div className="navbar max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-0">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold">
            CODE NEXUS
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-5 items-center">
            {links}
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Profile Image with Link to Dashboard */}
                <NavLink to="/dashboard">
                  <img src={user.photoURL} alt="User Avatar" className="h-8 w-8 rounded-full cursor-pointer" />
                </NavLink>
                <button onClick={handleLogout} className="bg-red-400 py-2 px-3 rounded ">Logout</button>
              </div>
            ) : (
              <NavLink to="/login">
                <button className="btn btn-primary">Login</button>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {isMenuOpen ? <RiCloseLine className="text-3xl" /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-100 shadow-md p-5 z-50 flex flex-col items-center space-y-5">
            {links}
            {user ? (
              <div className="flex flex-col items-center space-y-3">
                <NavLink to="/dashboard">
                  <img src={user.photoURL} alt="User Avatar" className="h-12 w-12 rounded-full border border-gray-400 cursor-pointer" />
                </NavLink>
                <button onClick={handleLogout} className="btn btn-error w-full">Logout</button>
              </div>
            ) : (
              <NavLink to="/login" className="w-full">
                <button className="btn btn-primary w-full">Login</button>
              </NavLink>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
