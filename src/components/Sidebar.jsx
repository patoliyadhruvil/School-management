import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "New Admission",
    href: "/newadmission",
    icon: UserPlusIcon,
  },
  {
    name: "All Students",
    href: "/allstudents",
    icon: UsersIcon,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: ShieldCheckIcon,
  },
];

function Sidebar() {
  return (
    <div className="sticky top-0 h-screen w-full flex flex-col justify-between border-r border-gray-200 bg-white px-4 py-6 xl:px-6 xl:py-10 shadow-lg">
      {/* Logo Section */}
      <div className="text-center xl:text-left">
        <h1 className="text-xl font-semibold text-gray-900 xl:text-3xl">
          <span className="block xl:hidden">AD</span>
          <span className="hidden xl:block">Admin</span>
        </h1>
      </div>

      {/* Menu Links */}
      <div className="mt-8 flex-1 flex flex-col gap-4">
        {sidebarLinks.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            className="group"
          >
            {({ isActive }) => (
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                }`}
              >
                <item.icon
                  className={`h-6 w-6 transition-all ${
                    isActive
                      ? "stroke-blue-700"
                      : "stroke-gray-400 group-hover:stroke-blue-700"
                  }`}
                />
                <span
                  className={`hidden xl:block font-medium transition-all ${
                    isActive ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>

     

      {/* User Section (Mobile) */}
      <div className="xl:hidden p-1">
        <span className="flex flex-col items-center bg-gray-50 px-3 py-2 rounded-md shadow-inner">
          <ArrowLeftOnRectangleIcon className="h-5 stroke-gray-700 hover:stroke-red-700" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
