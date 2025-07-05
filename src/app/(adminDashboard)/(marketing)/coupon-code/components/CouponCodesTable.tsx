"use client";
import { Button } from "antd";
import {
  TableProps,
} from "antd";
// import UserDetails from "./UserDetails";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownWideNarrowIcon, Eye, Info, Plus, Search } from "lucide-react";

type TDataType = {
  key?: number;
  productName: string;
  code: string;
  discount: string;
  expiry_date: string;
  status: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  productName: "Hamburger Burger",
  code: "MH23EK6",
  discount: "20%",
  expiry_date: "07 Sep 2025",
  status: inx % 2 == 0 ?"Inactive": "Active",
}));

const columns: TableProps<TDataType>["columns"] = [
  {
    title: "Product name",
    dataIndex: "productName",
    align: "center"
  },
  {
    title: "Code",
    dataIndex: "code",
    align: "center"
  },
  {
    title: "Discount",
    dataIndex: "discount",
    align: "center"
  },

  {
    title: "Expiry Date",
    dataIndex: "expiry_date",
    align: "center"
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "center"
  },

  {
    title: "Action",
    dataIndex: "action",
    align: "center",
    render: () => (
      <div className="flex justify-center items-center">
        <Info
          size={22}
          color="var(--color-text-color)"
        />
      </div>
    ),
  },
];

export default function CouponCodesTable() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between   items-center">
        <h1 className="text-xl font-bold text-[#505050]">Coupon Codes</h1>
        <Button><Plus size={20}/>Create a New Coupon Code</Button>
      </div>
      <DataTable columns={columns} data={data} pageSize={11}></DataTable>
    </div>
  );
}
