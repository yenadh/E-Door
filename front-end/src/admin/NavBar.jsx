import React, { useState, useEffect } from "react";
import DashBoardIcon from "../assets/icons/dashboard.png";
import LocationIcon from "../assets/icons/maps-and-flags.png";
import DoorIcon from "../assets/icons/door.png";
import ReportIcon from "../assets/icons/report.png";
import ArrowUp from "../assets/icons/right-chevron.png";
import UserIcon from "../assets/icons/user.png";
import EdoorLogo from "../assets/icons/icons8-door-100.png";
import BreadCrum from "../Components/BreadCrum";
import AdminProfileIcon from "../Components/AdminProfileIcon";

function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const AdminName = "Admin";
  

  return (
    <>
      <div className=" font-DM_Sans">
        <div className=" absolute left-[290px] top-[25px] z-50 font-semibold text-primary cursor-pointer">
          <BreadCrum Page={props.title}/>
        </div>
        <div className="fixed w-full h-[70px] bg-tertiary font-semibold">
          <div className="flex justify-end mt-[10px] mr-[20px] text-primary">
            <p className="mr-[10px] flex flex-col justify-center text-[16px] font-semibold">
              Welcome {AdminName}
            </p>            
            <div>
              <AdminProfileIcon/>
            </div>
          </div>
        </div>

        <div className="fixed h-screen w-[250px] bg-primary text-[#ffffff] font-semibold flex flex-col space-y-[30px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
          <div className="flex justify-center relative top-[20px] 3xl:top-[20px]">
            <img className="w-[30px] h-[30px] mx-[10px] relative top-[5px]" src={EdoorLogo} alt="" />
            <h1 className="text-[30px] font-bold">E-DOOR</h1>
          </div>

          <ul className="flex flex-col relative 3xl:relative top-[80px] text-[16px]">
            <div className="ml-[20px] py-[10px] w-[200px] h-[40px] pl-[20px] rounded-md bg-Secondary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <a href="/">
                <li
                  className={`flex transition-colors delay-[0.02s] hover:text-primary relative bottom-[2px] ${
                    props.title === "Dashboard" ? "text-primary" : ""
                  } `}
                >
                  <img
                    className=" relative top-[5px] w-[18px] h-[18px] mr-[10px]"
                    src={DashBoardIcon}
                  ></img>
                  <div className=" relative top-[1px]">Dashboard</div>
                </li>
              </a>
            </div>

            <div className="ml-[20px] mt-[20px]">
              <div
                className=" w-[200px] h-[40px] pl-[20px] py-[10px] rounded-md bg-Secondary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] "
                onClick={() => toggleMenu("location")}
              >
                <li
                  className={`flex transition-colors delay-[0.02s] hover:text-primary relative bottom-[2px]  ${
                    props.title === "AddLocation" ? "text-primary" : ""
                  } ${props.title === "ListLocation" ? "text-primary" : ""}`}
                >
                  <img
                    className=" relative top-[4px] w-[18px] h-[18px] mr-[10px]"
                    src={LocationIcon}
                  ></img>
                  <a href="#">
                    <div className=" relative top-[1px]">Location</div>

                    <img
                      className={`relative left-[110px] bottom-[20px] h-[20px] w-[20px] transition-transform ${
                        openMenu === "location" ? "" : "rotate-180"
                      }`}
                      src={ArrowUp}
                    />
                  </a>
                </li>
              </div>
              <div>
                {openMenu === "location" && (
                  <ul className="flex flex-col text-[16px]">
                    <a href="listLocation">
                      <li
                        className={`flex flex-col justify-center mt-[10px] h-[40px] relative bg-Secondary rounded w-[200px]  text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                          props.title === "ListLocation" ? "text-primary" : ""
                        } `}
                      >
                        List
                      </li>
                    </a>
                    <a href="addLocation">
                    <li
                      className={`flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                        props.title === "AddLocation" ? "text-primary" : ""
                      } `}
                    >
                      Add
                    </li>
                    </a>
                  </ul>
                )}
              </div>
            </div>

            <div className="ml-[20px]  mt-[20px]">
              <div
                className="w-[200px] h-[40px] pl-[20px] py-[10px] rounded-md bg-Secondary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] "
                onClick={() => toggleMenu("door")}
              >
                <li
                  className={`flex transition-colors delay-[0.02s] hover:text-primary relative bottom-[2px]  ${
                    props.title === "AddDoor" ? "text-primary" : ""
                  } ${props.title === "ListDoor" ? "text-primary" : ""}`}
                >
                  <img
                    className="relative top-[5px] w-[18px] h-[18px] mr-[10px]"
                    src={DoorIcon}
                  ></img>
                  <a href="#">
                    <div className=" relative top-[1px]">Door</div>
                    <img
                      className={`relative left-[110px] bottom-[20px] h-[20px] w-[20px] transition-transform ${
                        openMenu === "door" ? "" : "rotate-180"
                      }`}
                      src={ArrowUp}
                    />
                  </a>
                </li>
              </div>
              <div>
                {openMenu === "door" && (
                  <ul className="flex flex-col text-[16px]">
                    <a href="listDoor">
                    <li
                      className={`flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                        props.title === "ListDoor" ? "text-primary" : ""
                      } `}
                    >
                      List
                    </li>
                    </a>

                    <a href="addDoor">
                    <li
                      className={`flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                        props.title === "AddDoor" ? "text-primary" : ""
                      } `}
                    >
                      Add
                    </li>
                    </a>
                  </ul>
                )}
              </div>
            </div>

            <div className="ml-[20px]  mt-[20px]">
              <div
                className="w-[200px] h-[40px] pl-[20px] py-[10px] rounded-md bg-Secondary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] "
                onClick={() => toggleMenu("user")}
              >
                <li
                  className={`flex transition-colors delay-[0.02s] hover:text-primary relative bottom-[2px]  ${
                    props.title === "AddUser" ? "text-primary" : ""
                  } ${props.title === "ListUser" ? "text-primary" : ""}`}
                >
                  <img
                    className="relative top-[4px] w-[18px] h-[18px] mr-[10px]"
                    src={UserIcon}
                  ></img>
                  <a href="#">
                    <div className=" relative top-[1px]">User</div>

                    <img
                      className={`relative left-[110px] bottom-[20px] h-[20px] w-[20px] transition-transform ${
                        openMenu === "user" ? "" : "rotate-180"
                      }`}
                      src={ArrowUp}
                    />
                  </a>
                </li>
              </div>
              <div>
                {openMenu === "user" && (
                  <ul className="flex flex-col text-[16px]">
                    <a href="listUser">
                    <li
                      className={`flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                        props.title === "ListUser" ? "text-primary" : ""
                      } `}
                    >
                      List
                    </li>
                    </a>
                    
                    <a href="addUser">
                    <li
                      className={`flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary ${
                        props.title === "AddUser" ? "text-primary" : ""
                      } `}
                    >
                      Add
                    </li>
                    </a>
                  </ul>
                )}
              </div>
            </div>

            <div className="ml-[20px]  mt-[20px]">
              <div
                className="w-[200px] h-[40px] pl-[20px] py-[10px] rounded-md bg-Secondary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                onClick={() => toggleMenu("report")}
              >
                <li className="flex transition-colors delay-[0.02s] hover:text-primary relative bottom-[2px]  ">
                  <img
                    className="relative top-[4px] w-[18px] h-[18px] mr-[10px]"
                    src={ReportIcon}
                  ></img>
                  <a href="#">
                    <div className=" relative top-[1px]">Reports</div>
                    <img
                      className={`relative left-[110px] bottom-[20px] h-[20px] w-[20px] transition-transform ${
                        openMenu === "report" ? "" : "rotate-180"
                      }`}
                      src={ArrowUp}
                    />
                  </a>
                </li>
              </div>
              <div>
                {openMenu === "report" && (
                  <ul className="flex flex-col text-[16px]">
                    <li className="flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary">
                      <a href="#">List</a>
                    </li>
                    <li className="flex flex-col justify-center mt-[10px] h-[40px] w-[200px] relative  bg-Secondary rounded text-left px-[20px] transition-colors delay-[0.02s] hover:text-primary">
                      <a href="#">Add</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>

          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
