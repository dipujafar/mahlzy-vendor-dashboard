"use client";
import { Avatar, Flex } from "antd";
import { FaBars } from "react-icons/fa6";
import avatarImg from "@/assets/image/profile.png";
import Link from "next/link";
import { X } from "lucide-react";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  return (
    <div className="flex items-center justify-between w-[97%] font-poppins text-text-color xl:px-8 px-4">
      {/* Header left side */}
      <Flex align="center" gap={20}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full duration-1000"
        >
          {
            collapsed ? <X size={20} className="text-primary-gray" /> :<FaBars size={20} className="text-primary-gray" />
          }
          
        </button>
        <div className="flex flex-col ">
          <h2 className="text-lg  font-medium">
          Dashboard
            <span className="block  text-sm font-normal">Hello Polash, welcome back!</span>
          </h2>
        </div>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={20}>
        {/* Notification */}
        {/* <Link href={"/notifications"}>
          <div className="flex justify-center items-center size-12  rounded-full cursor-pointer relative border border-main-color">
            <IoNotificationsOutline size={24} color="#AB9D6E" />

            <Badge
              count={1}
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "var(--color-main)",
                color: "#000",
                position: "absolute",
                top: "-24px",
                right: "-8px",
              }}
            ></Badge>
          </div>
        </Link> */}

        <Link href={"#"} className="flex items-center">
          <Avatar
            src={avatarImg.src}
            size={42
            }
            className="border border-main-color size-12"
          ></Avatar>
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
