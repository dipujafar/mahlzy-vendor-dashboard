import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";
import { PiListPlusFill } from "react-icons/pi";
import {
  BadgePlus,
  BriefcaseBusiness,
  Clock2,
  Menu,
  MessagesSquare,
  SquareMenu,
} from "lucide-react";
import { AddItemIcon, MenuIcon, MenuListIcon } from "@/icons";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={22} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "menus",
    icon: <MenuIcon />,
    label: "Menus",
    children: [
      {
        key: "menus_list",
        icon: <MenuListIcon className="nav-icon" />,
        label: <Link href="/menus-list"> Menus list </Link>,
      },
      {
        key: "add_menus",
        icon: <AddItemIcon />,
        label: <Link href="/add-product">Add Products</Link>,
      },
    ],
  },
  {
    key: "customer",
    icon: <GoPeople size={22} />,
    label: "Customer",
    children: [
      {
        key: "customers-list",
        icon: <GoPeople size={22} />,
        label: <Link href={"/customers"}>Customers List</Link>,
      },
      {
        key: "customer_review",
        icon: <MessagesSquare size={22} />,
        label: <Link href="/customer-review">Customer Review</Link>,
      },
    ],
  },
  {
    key: "restaurant",
    icon: <GoPeople size={22} />,
    label: "Restaurant",
    children: [
      {
        key: "time_manage",
        icon: <Clock2 size={22} />,
        label: <Link href={"/time-manage"}>Time Manage</Link>,
      },
      {
        key: "business_details",
        icon: <BriefcaseBusiness size={22} />,
        label: <Link href="/business-details">Business Details</Link>,
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

  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];
