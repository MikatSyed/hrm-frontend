import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronRight,
  FaChevronDown,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/higher resolution (no bg).png";

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    components: false,
    setting: false,
  });
  const [activeOption, setActiveOption] = useState("");

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
  const handleOptionClick = (option) => {
    setActiveOption(option);
    // You can add additional logic here if needed
  };

  return (
    <div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 px-[25px] h-100vh">
      <div className="px-[10px] py-[30px] flex items-center justify-center ">
        <img src={logo} alt="logo" />
      </div>

      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "dashboard" ? "bg-black rounded-lg" : ""
        }`}
        onClick={() => handleOptionClick("dashboard")}
      >
        <FaTachometerAlt color="white" />
        <Link to="/dashboard">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "dashboard" ? "text-white" : ""
            }`}
          >
            Dashboard
          </p>
        </Link>
      </div>

      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "employee" ? "bg-black rounded-lg" : ""
        }`}
        onClick={() => handleOptionClick("employee")}
      >
        <IoPeopleSharp color="white" />
        <Link to="/employee">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "employee" ? "text-white" : ""
            }`}
          >
            Employee
          </p>
        </Link>
      </div>

      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "attendance"
            ? "bg-purple-900 rounded-[10px] pl-2"
            : ""
        }`}
        onClick={() => handleOptionClick("attendance")}
      >
        <FaCalendarAlt color="white" />
        <Link to="/attendance">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "attendance" ? "text-white" : ""
            }`}
          >
            Attendance
          </p>
        </Link>
      </div>

      <div>
        <div
          className={`flex items-center justify-between gap-[10px] py-[15px] cursor-pointer `}
          onClick={() => toggleDropdown("components")}
        >
          <div className="flex items-center gap-[10px]">
            <HiMiniRectangleGroup color="white" />{" "}
            <p
              className={`text-[16px] leading-[20px] font-normal text-white ${
                activeOption === "components" ? "text-[#FFD700]" : ""
              }`}
            >
              Department
            </p>
          </div>
          {dropdownStates.components ? (
            <FaChevronDown color="white" />
          ) : (
            <FaChevronRight color="white" />
          )}
        </div>
        {dropdownStates.components && (
          <div>
            <div
              className={`flex items-center gap-[5px] py-[5px] cursor-pointer ${
                activeOption === "component1" ? "text-[#7d00b5]" : ""
              }`}
              onClick={() => handleOptionClick("component1")}
            >
              <p
                className={`text-[14px] leading-[20px] font-normal text-white ml-[20px] mb-[10px] ${
                  activeOption === "component1" ? "text-[#7d00b5]" : ""
                }`}
              >
                Component 1
              </p>
            </div>
            <div
              className={`flex items-center gap-[5px] py-[5px] cursor-pointer ${
                activeOption === "component2"
                  ? "text-purple rounded-[10px] "
                  : ""
              }`}
              onClick={() => handleOptionClick("component2")}
            >
              <p
                className={`text-[14px] leading-[20px] font-normal text-white ml-[20px] mb-[10px] ${
                  activeOption === "component2" ? "text-[#7d00b5]" : ""
                }`}
              >
                Component 2
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "leave" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("leave")}
      >
        <FaRegChartBar color="white" />
        <Link to="/leave">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "leave" ? "text-white" : ""
            }`}
          >
            Leave
          </p>
        </Link>
      </div>
      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "payroll" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("leave")}
      >
        <FaRegChartBar color="white" />
        <Link to="/payroll">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "payroll" ? "text-white" : ""
            }`}
          >
            Payroll
          </p>
        </Link>
      </div>
      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "project" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("leave")}
      >
        <FaRegChartBar color="white" />
        <Link to="/project">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "project" ? "text-white" : ""
            }`}
          >
            Project
          </p>
        </Link>
      </div>
      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "awards" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("awards")}
      >
        <FaRegChartBar color="white" />
        <Link to="/test">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "awards" ? "text-white" : ""
            }`}
          >
            Awards
          </p>
        </Link>
      </div>
      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "loan" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("loan")}
      >
        <FaRegChartBar color="white" />
        <Link to="/loan">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "loan" ? "text-white" : ""
            }`}
          >
            Loan
          </p>
        </Link>
      </div>
      <div
        className={`flex items-center gap-[10px] py-[15px]  cursor-pointer ${
          activeOption === "notice" ? "bg-purple-900 rounded-[10px] pl-2" : ""
        }`}
        onClick={() => handleOptionClick("notice")}
      >
        <FaRegChartBar color="white" />
        <Link to="/test">
          <p
            className={`text-[16px] leading-[20px] font-normal text-white ${
              activeOption === "notice" ? "text-white" : ""
            }`}
          >
            Notice
          </p>
        </Link>
      </div>

      <div>
        <div
          className={`flex items-center justify-between gap-[10px] py-[15px] cursor-pointer `}
          onClick={() => toggleDropdown("setting")}
        >
          <div className="flex items-center gap-[10px]">
            <IoIosSettings color="white" />{" "}
            <p className={`text-[16px] leading-[20px] font-normal text-white `}>
              Setting
            </p>
          </div>
          {dropdownStates.setting ? (
            <FaChevronDown color="white" />
          ) : (
            <FaChevronRight color="white" />
          )}
        </div>
        {dropdownStates.setting && (
          <div>
            <div
              className={`flex items-center gap-[5px] py-[5px] cursor-pointer ${
                activeOption === "department" ? "bg-black rounded-lg " : ""
              }`}
              onClick={() => handleOptionClick("department")}
            >
              <Link to="/setting/department">
                <p
                  className={`text-[14px] leading-[20px] font-normal text-white ml-[20px] mb-[10px] ${
                    activeOption === "department" ? "text-white" : ""
                  }`}
                >
                  Department
                </p>
              </Link>
            </div>
            <div
              className={`flex items-center gap-[5px] py-[5px] cursor-pointer ${
                activeOption === "designation" ? "bg-black rounded-lg" : ""
              }`}
              onClick={() => handleOptionClick("designation")}
            >
              <Link to="/setting/designation">
                <p
                  className={`text-[14px] leading-[20px] font-normal text-white ml-[20px] mb-[10px] `}
                >
                  Designation
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
