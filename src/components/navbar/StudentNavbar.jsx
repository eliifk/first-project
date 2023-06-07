
import * as React from "react";
import { NavLink } from "react-router-dom";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

//import { useDispatch } from 'react-redux';
//import { logout } from '../actions/authActions';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentNavbar = () => {
  const [Menu, setMenu] = React.useState(false);
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  const handleLogout = () => {
    //dispatch(logout());
    navigate("/");
  };

  return (
    <div className="border-b mb-6 py-4 px-6 flex justify-between items-center gap-10  w-full mr-3">
      <div className="fixed flex items-center text-white font-bold text-3xl border-gray-400 top-0 left-0 w-full h-14 bg-[#1b3365]">
        &nbsp; &nbsp; ITS
        <div className="flex items-center absolute top-4 right-10 space-x-2 cursor-pointer">
        <Link to="/student/PersonalInformation">
            <BiUserCircle size={30} color="white" />
          </Link>
          
          <div
          onMouseEnter={() => setIsLogoutHovered(true)}
          onMouseLeave={() => setIsLogoutHovered(false)}
        >
          <IoMdLogOut
            size={30}
            color={isLogoutHovered ? "red" : "white"}
            onClick={handleLogout}
            style={{
              transition: "color 0.3s ease-in-out",
            }}
          />
        </div>
        </div>
      </div>
      <div className="fixed top-16 left-3" onClick={() => setMenu(!Menu)}>
        <RiMenuUnfoldLine className="cursor-pointer" size={35} />
      </div>
      <div
        className={
          Menu
            ? "fixed top-14 left-0 border-t-2 border-gray-400 w-[220px] h-[98vh] bg-[#1b3365] text-white shadow-2xl shadow-black z-10 duration-200"
            : "fixed top-0 left-[-100%] w-[240px] h-screen bg-white z-10 duration-200"
        }
      >
        <RiMenuFoldLine
          className="absolute right-2 top-1 cursor-pointer hover:text-[#9ad2ff] "
          onClick={() => setMenu(!Menu)}
          size={30}
        />





          <li className="">
            <NavLink
              className="inline-block ml-5  text-xl border-white flex-col hover:text-[#9ad2ff]  transition-all ease-in-out"
              to={"/student/myprofile"}
            >
              
              My Profile
              
            </NavLink>
          </li>

        <ul className="flex flex-col justify-around gap-10 mt-30">
        
        <ul id="alt-menu">
        <li><a href="/student/MyEducationInformation">My Education</a></li>
        



    
        <ul class="alt-menu">
          <li><a href="/student/PersonalInformation">Personal Information</a></li>
      
      
          <li><a href="/student/Project">Project</a></li>

        </ul>
          </ul>
          </ul>



          <li className="">
            <NavLink
              className="inline-block ml-5  text-xl border-white hover:text-[#9ad2ff]  transition-all ease-in-out"
              to={"/student/Companies"}
            >
              Companies
            </NavLink>
          </li>



          
          <li className="">
            <NavLink
              className="inline-block ml-5  text-xl border-white hover:text-[#9ad2ff]  transition-all ease-in-out"
              to={"/student/myapplication"}
            >
              My Application
            </NavLink>
          </li>



          <ul className="flex flex-col justify-around gap-10 mt-30">
        
        <ul id="alt-menu">
        <li><a href="/student/ApprovedApplication">Approved Application</a></li>
        



    
    <ul class="alt-menu">
      <li><a href="/student/AwaitedApplication">Awaited Application</a></li>
      
      
      <li><a href="/student/RejectedApplication">Rejected Application</a></li>

      </ul>
     </ul>



          <li className="">
            <NavLink
              className="inline-block ml-5  text-xl border-white hover:text-[#9ad2ff]  transition-all ease-in-out"
              to={"/student/notebook"}
            >
              Internship Book
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="inline-block ml-5  text-xl border-white hover:text-[#9ad2ff]  transition-all ease-in-out"
              to={"/student/myresults"}
            >
              My Results
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StudentNavbar;