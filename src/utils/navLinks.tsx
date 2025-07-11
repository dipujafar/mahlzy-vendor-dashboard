import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { BriefcaseBusiness, Clock2, MessagesSquare } from "lucide-react";
import { AddItemIcon, CouponCodeIcon, MarketingIcon, MenuIcon, MenuListIcon, RestaurantIcon, SponsoredIcon } from "@/icons";

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
    key: "marketing",
    icon: <MarketingIcon />,
    label: "Marketing",
    children: [
      {
        key: "coupon_code",
        icon: <CouponCodeIcon className="nav-icon" />,
        label: <Link href="/coupon-code">Coupon Code</Link>,
      },
      {
        key: "sponsored",
        icon: <SponsoredIcon />,
        label: <Link href="/sponsored">Sponsored</Link>,
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
        key: "customer_reviews",
        icon: <MessagesSquare size={22} />,
        label: <Link href="/customer-reviews">Customer Reviews</Link>,
      },
    ],
  },
  {
    key: "restaurant",
    icon: <RestaurantIcon />,
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
