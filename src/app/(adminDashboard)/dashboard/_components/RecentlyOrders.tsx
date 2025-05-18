"use client";
import {
  Image,
  Input,
  message,
  Popconfirm,
  PopconfirmProps,
  TableProps,
} from "antd";

import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownWideNarrowIcon, Euro, Eye, Search } from "lucide-react";
import AnimatedArrowUp from "@/components/shared/animatedArrows/AnimatedArrowUp";
import Link from "next/link";

type TDataType = {
  key?: number;
  serial: string;
  name: string;
  customerName: string;
  location: string;
  status: string;
  qty: number;
};
const data: TDataType[] = Array.from({ length: 6 }).map((data, inx) => ({
  key: inx,
  serial: "ON322",
  name: "Hamburger Burger",
  customerName: "Muskan Tanaz",
  location: "Dhanmondi",
  status: "On Process",
  qty: 2,
  price: 40,
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const RecentlyOrders = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Order ID",
      dataIndex: "serial",
    },
    {
      title: "Menu name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="flex items-center gap-x-1">
          <Image
            src={"/item_image.png"}
            alt="profile-picture"
            width={40}
            height={40}
            className="size-10"
          ></Image>
          <div>
            <p>{text}</p>
            <p className="text-sm text-[#606060]">first food</p>
          </div>
        </div>
      ),
    },

    {
      title: "Customer name",
      dataIndex: "customerName",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <div className="bg-[#FFC3B0] text-main-color">{status}</div>
      ),
    },
    {
      title: "Quantity",
      align: "center",
      dataIndex: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => (
        <p className="flex  items-center">
          <Euro color="#505050" size={16} />
          {text}
        </p>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-md">
      <div className="flex justify-between items-center px-3 py-5">
        <h1 className="  text-xl font-semibold text-text-color">
          Recently Placed Orders
        </h1>
        <div className="flex xl:gap-x-10 gap-x-3">
          <Input
            className="!w-[250px] xl:!w-[240px] !py-2 !bg-[#ECECEC] !border-none "
            placeholder="Search..."
            prefix={<Search size={20} color="#000"></Search>}
          ></Input>
          <Link href={"#"} className="text-main-color group flex gap-x-0.5 overflow-hidden">
            See All <AnimatedArrowUp size={18}/>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={data} ></DataTable>
      {/* <UserDetails open={open} setOpen={setOpen}></UserDetails> */}
    </div>
  );
};

export default RecentlyOrders;
