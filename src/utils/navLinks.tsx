import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";
import { PiListPlusFill } from "react-icons/pi";
import { BadgePlus, Menu, SquareMenu } from "lucide-react";
import { AddItemIcon, MenuIcon, MenuListIcon } from "@/icons";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={22} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "customers",
    icon: <GoPeople size={22} />,
    label: <Link href={"/customers"}>Customers</Link>,
  },
  {
    key: "menus",
    icon: <MenuIcon  />,
    label: "menus",
    children: [
      {
        key: "menus_list",
        icon: <MenuListIcon className="nav-icon"/>,
        label: <Link href="/menus-list"> Menus list </Link>,
      },
      {
        key: "add_menus",
        icon: <AddItemIcon  />,
        label: "Add Products",
      },
    ],
  },
  //   {
  //     key: "user-request",
  //     icon: <PiListPlusFill size={20} />,
  //     label: <Link href={"/user-request"}>User Request</Link>,
  //   },
  // {
  //     key: "team-member",
  //     icon: <GoPeople size={18} />,
  //     label: <Link href={"/user"}>Team Member</Link>,
  //   },

  //   {
  //     key: "settings",
  //     icon: <IoSettingsOutline size={18} />,
  //     label: <Link href={"/settings"}>Settings</Link>,
  //   },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];
