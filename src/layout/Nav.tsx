import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import { FaChartBar } from "react-icons/fa";
import { FaClock, FaFolder } from "react-icons/fa6";
import { RiPlayList2Fill } from "react-icons/ri";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Setting from "../components/UI/nav/Setting";
import { AddCategory } from "../screens/CategoryGroup";

type NavItemType = {
  path: string;
  icon: ReactNode;
};

const ACTIVE_COLOR = "fill-white";
const DEFAULT_COLOR = "fill-gray-500";
const SIZE = "text-xl";

const NAV_DATA: NavItemType[] = [
  {
    path: "/playlist",
    icon: <RiPlayList2Fill />,
  },
  {
    path: "/schedule",
    icon: <FaClock />,
  },
  {
    path: "/category",
    icon: <FaFolder />,
  },
  {
    path: "/statistics",
    icon: <FaChartBar />,
  },
];

const Nav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getClass = (path: string) => {
    const colorClass = currentPath.startsWith(path)
      ? ACTIVE_COLOR
      : DEFAULT_COLOR;
    const sizeClass = SIZE;
    return { className: [colorClass, sizeClass].join(" ") };
  };

  const showDateNav = ['playlist', 'schedule'].includes(currentPath);
  return (
    <>
      <main>
        <Setting />
        {showDateNav && <DateNav />}
        <Outlet />
      </main>
      {currentPath.startsWith("/category") ? <AddCategory /> : null}
      <nav
        style={{ zIndex: 99, position: "relative" }}
        className="w-100 flex j-evenly i-center bg-primary"
      >
        {NAV_DATA.map(({ path, icon }) => (
          <IconContext.Provider key={path} value={getClass(path)}>
            <Link to={path}>{icon}</Link>
          </IconContext.Provider>
        ))}
      </nav>
    </>
  );
};

export default Nav;
