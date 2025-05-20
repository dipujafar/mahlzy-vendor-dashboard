import React from "react";
import { Button } from "@/components/ui/button";

interface PizzaCardProps {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const MenuCard: React.FC<PizzaCardProps> = ({
  id,
  name,
  price,
  description,
  image,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-main-color font-semibold">{price}</p>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
      <div className="flex">
        <Button
          variant="outline"
          className="flex-1 rounded-none border-t border-r border-ma py-3 text-gray-600 hover:bg-gray-100"
          onClick={() => onRemove(id)}
        >
          Remove
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-none border-t border-gray-200 py-3 bg-main-color text-white hover:bg-orange-700 hover:text-white "
          onClick={() => onEdit(id)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
