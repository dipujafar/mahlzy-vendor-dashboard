"use client";
import React from "react";
import MenuCard from "./MenuCard";
import { Input } from "antd";
import { Search } from "lucide-react";

// Sample pizza data
const pizzaData = [
  {
    id: 1,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2825&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2825&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Pizza",
    price: "€4.520k",
    description:
      "Pizza, a beloved food worldwide, originated in Naples, Italy. It's typically a flatbread base with toppings baked at a high temperature.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
  },
];

const Menus: React.FC = () => {
  const handleEdit = (id: number) => {
    //
  };

  const handleRemove = (id: number) => {
    //
  };

  return (
    <div>
      <div className="flex justify-between items-center px-3 py-3 mb-5 bg-white">
        <h1 className="  text-2xl text-text-color">Menu Lists</h1>
        <Input
          className="!w-[180px] lg:!w-[250px] !py-2 placeholder:text-white !border-none !bg-[#ECECEC]"
          placeholder="Search..."
          prefix={<Search size={16} color="#000"></Search>}
        ></Input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pizzaData.map((pizza) => (
          <MenuCard
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            description={pizza.description}
            image={pizza.image}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;
